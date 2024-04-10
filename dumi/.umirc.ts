import { defineConfig, IConfig } from 'dumi'
import path from 'path'
import { dumiConfig } from '@zafuru/plugin-components/dumi.config'
import pkg from '../package.json'

export default defineConfig({
  ...dumiConfig,
  title: '基础组件库',
  // mfsu: {},
  webpack5: {},
  mode: 'site',
  resolve: {
    includes: ['docs']
  },
  alias: {
    [pkg.name]: path.resolve('.', 'src/index.ts')
  },
  chainWebpack(memo, opts) {
    dumiConfig.chainWebpack(memo, opts)
  }
} as IConfig)