
import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';
/* const purgecss = purgecssLib.default; */


/* export default {
  plugins: [
    autoprefixer,
    purgecss({ */

     
      /* content: [
        './*.html',
        './assets/js/**//* *.js', */
      /* ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
       safelist: { */
        /* standard: [/^modal/, /^navbar/, /^btn/, 'active', 'show', 'fade', 'collapsing'],
        deep: [],
        greedy: []
      },
    }),
  ],

};
 */ 

export default {
  plugins: [
    autoprefixer(),
    purgecss({ // Llama a la función directamente
      content: [
        './*.html',
        './assets/js/**/*.js',
      ],
      // ... resto de tu configuración igual
      safelist: [
        'active', 'show', 'fade', 'collapsing',
        /^modal/, /^navbar/, /^btn/, /^carousel-/ // ¡Agrega carousel!
      ],
    }),
  ],
};