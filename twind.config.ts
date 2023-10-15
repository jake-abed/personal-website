import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        "monoton": ["Monoton", "sans-serif"],
        "noto": ['"Noto Sans"', "sans-serif"],
      },
      colors: {
        "light-green": "#96E072",
        "black": "#050517",
      },
      boxShadow: {
        "brutal": "2px 2px 1px 3px #050517",
      },
    },
  },
} as Options;
