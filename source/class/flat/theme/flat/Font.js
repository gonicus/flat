/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

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
            'flat/fonts/OpenSans-Regular.ttf'
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
            'flat/fonts/OpenSans-Regular.ttf'
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
            'flat/fonts/OpenSans-Bold.ttf'
          ]
        }
      ]
    }
  }
})
