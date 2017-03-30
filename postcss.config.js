

//https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  map: 'inline',
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
    'postcss-pxtorem': {
      rootValue: 100,
      unitPrecision: 5,
      propList: [
        'font',
        'font-size',
        'line-height',
        'letter-spacing',
        'width',
        'height',
        'margin',
        "margin-left",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "padding",
        "padding-left",
        "padding-top",
        "padding-right",
        "padding-bottom"
      ],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
}
