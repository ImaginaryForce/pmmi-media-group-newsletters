const brands = require('./brands');
const emailX = require('./email-x');
const nativeX = require('./native-x');

const config = {
  emailX,
  nativeX,
  dpm: {
    emailx: {
      enabled: true,
    },
  },
  'mundo-perspectivas': {
    name: 'Perspectivas',
    description: 'Inteligencia de mercados, tecnologías y tendencias',
    lang: 'es',
    ...brands.mundo,
  },
  'mundo-expo-pack': {
    brand: 'Mundo EXPO PACK',
    brandShort: 'mundo',
    title: 'Mundo EXPO PACK',
    lang: 'es',
    headerSrc: '/files/base/pmmi/all/image/newsletters/mundo_expo_pack_revwhite.png',
    primaryColor: '#007557',
    socialMedia: {
      imagePath: '/files/base/pmmi/all/image/static/newsletters',
      links: [
        { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/mundo-expopack/', target: '_blank' },
        { provider: 'youtube', href: 'https://www.youtube.com/channel/UCM5Ldhqi4SFRIyoGxuJZV3w', target: '_blank' },
        { provider: 'facebook', href: 'https://www.facebook.com/MundoEXPOPACK', target: '_blank' },
      ],
    },
  },
};

module.exports = config;
