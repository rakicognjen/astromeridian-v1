import { defineConfig } from 'astro/config';

export default defineConfig({
  // Static output — perfect for Netlify drag-and-drop or CLI deploy
  output: 'static',

  // i18n routing — default locale is English
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'sr'],
    routing: {
      prefixDefaultLocale: false, // /  = en,  /de/ = de, etc.
    },
  },
});
