module.exports = {
  content: ["./views/**/*.{html,ejs}", "./public/**/*.html"],
  safelist: [
    // Core spacing & sizing utilities
    { pattern: /^h-(1|2|3|4|5|6|8|10|12|16|20|24|32|40|48|64|80|96)$/ },
    { pattern: /^w-(1|2|3|4|5|6|8|10|12|16|20|24|32|40|48|64|80|96|full)$/ },
    { pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl)$/ },
    { pattern: /^bg-(red|green|blue|gray|black|white)-[0-9]{3}$/ },
    { pattern: /^p[trblxy]?-(1|2|4|6|8|10)$/ },
    { pattern: /^m[trblxy]?-(1|2|4|6|8|10)$/ },
    { pattern: /^flex$/ },
    { pattern: /^items-center$/ },
    { pattern: /^justify-(center|between|around|evenly)$/ },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
