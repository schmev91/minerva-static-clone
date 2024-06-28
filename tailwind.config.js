import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    // darkMode: "selector",
    content: [
        "**/*.{js,html}",
    ],

    theme: {
        extend: {
            colors: {
                main: "#432FBB",
            },
            container: {
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "8rem",
                },
            },
        },
    },

    plugins: [
        require('daisyui'),
    ],
};
