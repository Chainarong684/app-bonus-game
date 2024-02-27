import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px'
    },
    extend: {
      colors: {
        light: 'var(--primary-light)',
        main: 'var(--primary-main)',
        dark: 'var(--primary-dark)'
      }
    }
  },
  plugins: []
}
export default config
