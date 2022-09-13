/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                kenyan: ['kenyan', 'sans-serif'],
                autography: ['autography', 'cursive'],
                lato: ['lato', 'sans-serif'],
                newake: ['newake', 'sans-serif'],
                creme: ['creme', 'cursive'],
                montserrat: ['montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
