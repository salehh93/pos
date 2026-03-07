export default defineNuxtConfig({
  target: 'static',

  proxy: {
    '/api': {
      target: 'https://saleh.ps',
      changeOrigin: true,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'صالح باي',
      meta: [
        { name: 'description', content: 'للخدمات المالية والحلول الرقمية.' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
  script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
          defer: true
        }
      ],
    },
  },

  css: [
    'bootstrap/dist/css/bootstrap.rtl.min.css',
    'vueperslides/dist/vueperslides.css',
    '~/assets/css/style.css',
  ],

  runtimeConfig: {
    public: {
      googleAnalyticsId: process.env.GA_MEASUREMENT_ID || 'G-5WCDDVW93D', // For dynamic environments
    },
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
});
