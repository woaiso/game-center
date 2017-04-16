

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
        'min-width',
        'max-height',
        'height',
        'min-height',
        'max-height',
        'margin',
        'margin-left',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'padding',
        'padding-left',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'border-radius',
        'top',
        'right',
        'bottom',
        'left',
        'border-width',
        'border-bottom-width',
        'background-size',
        'background-position'
      ],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
}
