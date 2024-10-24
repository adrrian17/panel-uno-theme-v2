/** @type {import('tailwindcss').Config} */
export default {
    content: ["./*.hbs", "./**/*.hbs"],
    theme: {
        extend: {
            fontFamily: {
                merriweather: ['"Merriweather"'],
                barlow: ['"Barlow Semi Condensed"'],
            },
            colors: {
                brand: {
                    50: "#9cfaf8",
                    100: "#92f0ee",
                    200: "#88e6e4",
                    300: "#7edcda",
                    400: "#74d2d0",
                    500: "#6ac8c6",
                    600: "#60bebc",
                    700: "#56b4b2",
                    800: "#4caaa8",
                    900: "#42a09e",
                },
                secondary: {
                    50: "#fffff5",
                    100: "#ffffeb",
                    200: "#ffffe1",
                    300: "#ffffd7",
                    400: "#ffffcd",
                    500: "#fbf7c3",
                    600: "#f1edb9",
                    700: "#e7e3af",
                    800: "#ddd9a5",
                    900: "#d3cf9b",
                },
                uno: {
                    50: "#ffbf54",
                    100: "#ffb54a",
                    200: "#ffab40",
                    300: "#ffa136",
                    400: "#ff972c",
                    500: "#f78d22",
                    600: "#ed8318",
                    700: "#e3790e",
                    800: "#d96f04",
                    900: "#cf6500",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
