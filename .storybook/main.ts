import type { StorybookConfig } from '@storybook/react-webpack5';

import path from 'path'
import webpack from 'webpack'
import { merge } from 'webpack-merge'
import VirtualModulesPlugin from 'webpack-virtual-modules';
import { genFederationOptions } from '@zafuru/plugin-components'
import pkg from '../package.json'

type ModuleFederationPluginOptions = ConstructorParameters<typeof webpack.container.ModuleFederationPlugin>[0]

const config: StorybookConfig = {
  stories: ['./stories/**/*.mdx', './stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal(config, { configType }) {
    let finalConfig = merge(config, {
      resolve: {
        alias: {
          [pkg.name]: path.resolve('.', 'src/index.ts'),
          '@': path.resolve('src')
        }
      },
    })

    if (configType === 'PRODUCTION') {
      const federationOptions = genFederationOptions()
      finalConfig = merge(finalConfig, {
        entry: {
          main: ['./__entry.js'],
          [federationOptions.name]: ['./__internal_remoteEntry.js']
        },
        plugins: [
          new webpack.container.ModuleFederationPlugin(federationOptions as unknown as ModuleFederationPluginOptions),
          new VirtualModulesPlugin({
            './__entry.js': `import('${path.resolve('./storybook-config-entry.js')}');`,
            './__internal_remoteEntry.js': `__webpack_public_path__ = new URL(document.currentScript.src).origin + "/${pkg.name}/${pkg.version}/";
              Object.assign(window, {
                ${federationOptions.name}: __webpack_require__("webpack/container/entry/${federationOptions.name}"),
              });`,
          })
        ],
        optimization: {
          runtimeChunk: false,
        }
      })
    }

    return finalConfig
  },
  swc(config, { configType }) {
    return merge(config, {
      jsc: {
        parser: {
          syntax: 'typescript',
          tsx: true,
          // 动态加载 等同于 @babel/plugin-syntax-dynamic-import 
          dynamicImport: true,
        },
        transform: {
          react: {
            runtime: 'automatic'
          }
        }
      }
    })
  }
};
export default config;
