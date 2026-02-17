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
        // Add Google Analytics script here
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-5WCDDVW93D', // Replace with your GA Measurement ID
          async: true,
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5WCDDVW93D'); // Replace with your GA Measurement ID
          `,
          type: 'text/javascript',
        },
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
