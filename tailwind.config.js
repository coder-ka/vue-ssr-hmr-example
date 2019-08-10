const color = require("color");

module.exports = {
  theme: {
    extend: {
      colors: {
        "accent-900": color("hsl(151, 82%, 7%)").hex(),
        "accent-800": color("hsl(151, 82%, 22%)").hex(),
        "accent-700": color("hsl(151, 82%, 37%)").hex(),
        "accent-600": color("hsl(151, 82%, 52%)").hex(),
        "accent-500": color("hsl(151, 82%, 68%)").hex(),
        "accent-400": color("hsl(151, 82%, 74%)").hex(),
        "accent-300": color("hsl(151, 82%, 80%)").hex(),
        "accent-200": color("hsl(151, 82%, 86%)").hex(),
        "accent-100": color("hsl(151, 82%, 92%)").hex(),

        "primary-900": color("hsl(4, 90%, 8%)").hex(),
        "primary-800": color("hsl(4, 90%, 21%)").hex(),
        "primary-700": color("hsl(4, 90%, 33%)").hex(),
        "primary-600": color("hsl(4, 90%, 46%)").hex(),
        "primary-500": color("hsl(4, 90%, 58%)").hex(),
        "primary-400": color("hsl(4, 90%, 68%)").hex(),
        "primary-300": color("hsl(4, 90%, 78%)").hex(),
        "primary-200": color("hsl(4, 90%, 88%)").hex(),
        "primary-100": color("hsl(4, 90%, 97%)").hex()
      }
    }
  },
  variants: {},
  plugins: []
};
