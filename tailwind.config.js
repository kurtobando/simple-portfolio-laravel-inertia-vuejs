/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            }
        },
    },
    plugins: [],
};
