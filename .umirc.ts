import { defineConfig } from 'umi';

export default defineConfig({
  title: '通用后台系统',
  antd: {
    dark: false,
    compact: true,
  },
  dva: {
    immer: true,
    hmr: false,
  },
  mfsu: {},
  // layout: {
  //   name: '通用后台系统',
  //   locale: true,
  //   layout: 'side',
  //   // logo: 'https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/ad7186da163aaf25f3a2d719603c37d0~300x300.image',
  // },
  404: true,
  dynamicImport: {
    // loading: '@/components/loading',
  },
  theme: {
    '@primary-color': '#e16817',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
});
