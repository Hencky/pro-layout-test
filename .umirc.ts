import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  history: {
    type: 'hash',
  },
  routes: [
    {
      path: '/welcome',
      name: 'welcome',
      component: '@/pages/index',
    },
    {
      path: '/page1',
      name: 'page1',
      component: '@/layouts',
      routes: [
        { path: '/page1/children1', name: 'ppp1', component: '@/pages/page1' },
        { path: '/page1/children2', name: 'ppp2', component: '@/pages/page2' },
      ],
    },
    { path: '/page2', name: 'page2', component: '@/pages/page2' },
    { path: '/page3', name: 'page3', component: '@/pages/page3' },
    {
      path: '/page4',
      name: 'page4',
      access: 'canAdmin',
      component: '@/pages/page4',
    },

    {
      path: '/',
      redirect: '/welcome',
    },
  ],
});
