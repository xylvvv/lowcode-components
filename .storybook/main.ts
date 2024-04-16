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
    const federationOptions = genFederationOptions()
    if (Array.isArray(config.entry)) {
      const idx = config.entry.findIndex(entry => entry.includes('storybook-config-entry.js'))
      config.entry[idx] = config.entry[idx].replace('/storybook-config-entry.js', '/__entry.js')
    }

    return merge(config, {
      // output: {
      //   publicPath: configType === 'PRODUCTION' ? `${pkg.name}/${pkg.version}/` : ''
      // },
      resolve: {
        alias: {
          [pkg.name]: path.resolve('.', 'src/index.ts'),
          '@': path.resolve('src')
        }
      },
      plugins: [
        new webpack.container.ModuleFederationPlugin(federationOptions as unknown as ModuleFederationPluginOptions),
        new VirtualModulesPlugin({
          './__entry.js': `import('${path.resolve('./storybook-config-entry.js')}');`,
        })
      ],
      optimization: {
        runtimeChunk: 'single',
      }
    })
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
