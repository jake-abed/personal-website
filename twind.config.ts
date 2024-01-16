import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      keyframes: {
        expand: {
          "0%": { "transform": "scale(0)", "opacity": "0" },
          "60%": { "transform": "scale(0.60)", "opacity": "0" },
          "100%": { "transform": "scale(1)", "opacity": "1" },
        },
      },
      animation: {
        expand: "expand 1.25s ease-in-out 1 normal forwards",
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
