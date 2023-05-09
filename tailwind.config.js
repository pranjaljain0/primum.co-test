/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'theme-blue': 'hsl(249, 99%, 64%)',
        'theme-purple': 'hsl(278, 94%, 30%)',
        "theme-red": "hsl(0, 100%, 66%)",
        "theme-gray": "hsl(279, 6%, 55%)",
        "theme-violet": "hsl(278, 68%, 11%)",
        "theme-light-gray": "hsl(270, 3%, 87%)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
