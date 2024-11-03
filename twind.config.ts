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
        "light-green": "#A2FAA3",
        "black": "#29312D",
        "deep-black": "#111A17",
        "red": "#DE2A2A",
        "white": "#E9FBEC",
      },
      boxShadow: {
        "brutal": "3px 3px 0px 3px #222725",
        "brutal-white": "3px 3px 0 3px #F7EBE8",
        "brutal-circle": "5px 5px 0px 2px #A2FAA3",
        "brutal-red": "2px 2px 0px 2px #FF4242",
        "brutal-light-green": "2px 2px 0px 2px #A2FAA3",
      },
      dropShadow: {
        "text": "0px 0px 30px black",
      },
    },
  },
} as Options;
