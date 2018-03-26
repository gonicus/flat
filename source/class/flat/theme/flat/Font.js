/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */
/**
 * @asset(flat/font/*)
 */
qx.Theme.define('flat.theme.flat.Font', {
  extend: qx.theme.indigo.Font,

  fonts: {
    'default': {
      size: 14,
      family: ['Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      sources: [
        {
          family: 'Roboto',
          source: [
            'flat/font/Roboto-Regular.ttf'
          ]
        }
      ]
    },

    'small': {
      size: 12,
      family: ['Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      sources: [
        {
          family: 'Roboto',
          source: [
            'flat/font/Roboto-Regular.ttf'
          ]
        }
      ]
    },

    'bold': {
      size: 14,
      bold: true,
      family: ['Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      sources: [
        {
          family: 'Roboto',
          source: [
            'flat/font/Roboto-Bold.ttf'
          ]
        }
      ]
    },

    'Ligature': {
      size: 40,
      lineHeight: 1,
      comparisonString: '\uf1e3\uf1f7\uf11b\uf19d',
      family: ['Ligature'],
      sources: [
        {
          family: 'Ligature',
          source: [
            'flat/font/LigatureSymbols-2.11.eot',
            'flat/font/LigatureSymbols-2.11.woff',
            'flat/font/LigatureSymbols-2.11.ttf'
          ]
        }
      ]
    }
  }
})
