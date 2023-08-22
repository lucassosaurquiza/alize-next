import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      // Tamaño de las media query
      // TODOS ESTOS TAMAÑOS SE APLICAN A PARTIR DEL TAMAÑO ESPECIFICADO EN ADELANTE
      screens: {
        'sm': '320px',
        'md': '600px',
        'xmd': '800px',
        'lg': '1200px',  // Modificado
        'xl': '1024px',
        'xxl': '1400px'
      },
      transitionDuration: {
        'slow': '1000ms',
        'medium': '500ms',
        'fast': '300ms',
      },
      transitionProperty: {
        'width-spacing': 'width, margin',
      },
    },
  },
  plugins: [],
}
export default config
