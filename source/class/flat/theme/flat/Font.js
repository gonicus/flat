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
      family: ['Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      sources: [
        {
          family: 'Open Sans',
          source: [
            'flat/font/OpenSans-Regular.ttf'
          ]
        }
      ]
    },

    'small': {
      size: 12,
      family: ['Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      sources: [
        {
          family: 'Open Sans',
          source: [
            'flat/font/OpenSans-Regular.ttf'
          ]
        }
      ]
    },

    'bold': {
      size: 14,
      bold: true,
      family: ['Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      sources: [
        {
          family: 'Open Sans',
          source: [
            'flat/font/OpenSans-Bold.ttf'
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
