/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // plugins: [],
  plugins: [
  //   function({ addVariant }) {
  //     addVariant('odd', ({ modifySelectors, separator }) => {
  //       modifySelectors(({ className }) => {
  //         return `.${className}:nth-child(odd)`;
  //       });
  //     });

  //     addVariant('even', ({ modifySelectors, separator }) => {
  //       modifySelectors(({ className }) => {
  //         return `.${className}:nth-child(even)`;
  //       });
  //     });
  //   },
  ],
}