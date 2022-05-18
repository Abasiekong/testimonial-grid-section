module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      colors: {
        'moderate-violet': 'hsl(263, 55%, 52%)',
        'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
        'very-dark-blackish-blue': 'hsl(219, 29%, 14%)',
        'White': 'hsl(0, 0%, 100%)',
        'light-gray': 'hsl(0, 0%, 81%)',
        'light-grayish-blue': 'hsl(210, 46%, 95%)',
      },

      width: {
        '285': '21.923076em',
      },
    },

    fontSize: {
      20: [
        '20px',
        {
          lineHeight: '130%',
        },
      ],
    },

    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};
