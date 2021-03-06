import colors from 'windicss/colors'
import { defineConfig } from 'windicss/helpers'

import { aria, content } from './packages/@replygirl/windicss-plugins'

export default defineConfig({
  darkMode: 'class',
  extract: {
    exclude: ['node_modules', '.*/**/*'],
    include: ['**/*.{tsx,jsx,css}'],
  },
  plugins: [
    // https://windicss.org/plugins/community/heropatterns.html
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@windicss/plugin-heropatterns')({}),

    // https://windicss.org/plugins/community/interaction-variants.html
    require('@windicss/plugin-interaction-variants'),

    // https://windicss.org/plugins/community/question-mark.html
    require('@windicss/plugin-question-mark'),

    // https://windicss.org/plugins/community/scrollbar.html
    require('@windicss/plugin-scrollbar'),

    // https://windicss.org/plugins/official/aspect-ratio.html
    require('windicss/plugin/aspect-ratio'),

    // https://windicss.org/plugins/official/line-clamp.html
    require('windicss/plugin/line-clamp'),

    // https://windicss.org/plugins/official/scroll-snap.html
    require('windicss/plugin/scroll-snap'),

    // https://windicss.org/plugins/official/typography.html
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('windicss/plugin/typography')({
      modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    }),

    aria,

    content,
  ],
  preflight: {
    includeAll: true,
  },
  safelist: ['hidden', 'markdown', 'h1 h2 h3 h4 h5 h6 p em strong a ol ul li'],
  shortcuts: {
    'bg-image-contain': 'bg-no-repeat bg-center bg-contain',
    'bg-image-cover': 'bg-no-repeat bg-center bg-cover',
    'focus-ring':
      'focus:outline-none focus-visible:(outline-none ring ring-offset-2 ring-indigo-500)',
    'inset-center':
      'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',

    'inset-x-center': 'left-1/2 transform -translate-x-1/2',
    'inset-y-center': 'top-1/2 transform -translate-y-1/2',
  },
  theme: {
    borderColor: theme =>
      Object.assign(
        { DEFAULT: theme('colors.black', 'currentColor') },
        theme('colors') ?? {}
      ),
    extend: {
      backgroundImage: {
        logo: "url('/images/logos/jaded.svg')",
      },
      screens: {
        '2xs': '360px',
        xs: '480px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: colors.black,
            lineHeight: 1.25,
            p: {
              marginBottom: '0.5rem',
              marginTop: '0.5rem',
            },
          },
        },
      },
    },
    fontFamily: {
      mono: [
        'Space Mono',
        'Helvetica Mono',
        'SF Mono',
        'ui-monospace',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
      sans: [
        'TeX Gyre Heros',
        'Helvetica Now Text',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
    },
  },
})
