import path from 'path'
import type { StorybookConfig } from '@storybook/react-vite';
import federation, { type VitePluginFederationOptions } from "@originjs/vite-plugin-federation";
import pkg from '../package.json'
import { genFederationOptions } from '@zafuru/plugin-components'

const config: StorybookConfig = {
  stories: ['./stories/**/*.mdx', './stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config, { configType }) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      build: {
        target: 'esnext',
        assetsDir: ''
      },
      base: configType === 'PRODUCTION' ? `/${pkg.name}/${pkg.version}/` : '/',
      resolve: {
        alias: {
          [pkg.name]: path.resolve('.', 'src/index.ts'),
          '@': path.resolve('src')
        }
      },
      plugins: [
        federation(genFederationOptions() as unknown as VitePluginFederationOptions)
      ]
    });
  },
};
export default config;
