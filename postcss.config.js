
import autoprefixer from 'autoprefixer';
import purgecssLib from '@fullhuman/postcss-purgecss';
const purgecss = purgecssLib.default;


export default {
  plugins: [
    autoprefixer,
    purgecss({

      /* mantengo solo las clases usadas en el proyecto, eliminando todas las no usadas (~ 10.500 líneas de código) */
      content: [
        './*.html',
        './assets/js/**/*.js',
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
       safelist: {
        standard: [/^modal/, /^navbar/, /^btn/, 'active', 'show', 'fade', 'collapsing'],
        deep: [],
        greedy: []
      },
    }),
  ],

};
