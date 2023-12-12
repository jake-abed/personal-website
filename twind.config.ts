import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      keyframes: {
        expand: {
          "0%": { "max-width": "96px", "max-height": "96px" },
          "100%": { "max-width": "100%", "max-height": "220px" },
        },
        fadeIn: {
          "0%": { "opacity": "0" },
          "50%": { "opacity": "0.05" },
          "75%": { "opacity": "0.1" },
          "100%": { "opacity": "1" },
        },
      },
      animation: {
        expand: "expand 0.5s ease-in 1",
        fadeIn: "fadeIn 0.75s ease-in 1",
      },
      fontFamily: {
        "monoton": ["Monoton", "sans-serif"],
        "noto": ['"Noto Sans"', "sans-serif"],
      },
      colors: {
        "light-green": "#96E072",
        "black": "#050517",
        "red": "#DE2A2A",
        "white": "#f0eff4",
      },
      boxShadow: {
        "brutal": "3px 3px 0px 3px #050517",
        "brutal-circle": "5px 5px 0px 2px #050517",
        "brutal-red": "2px 2px 0px 2px #FF4242",
        "brutal-light-green": "2px 2px 0px 2px #96E072",
      },
      dropShadow: {
        "text": "0px 0px 30px black",
      },
    },
  },
} as Options;
