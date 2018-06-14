/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define('flat.theme.flat.Appearance', {
  extend: qx.theme.indigo.Appearance,

  appearances: {

    'root': {
      style: function () {
        return {
          backgroundColor: 'lightgray-light',
          textColor: 'darkgray-dark',
          font: 'default'
        }
      }
    },

    'window': {
      style: function (states) {
        var decorator = 'window'

        if (states.maximized) {
          decorator = 'window-maximized'
        } else if (!states.active) {
          decorator = 'window-inactive'
        }

        return {
          decorator: decorator,
          contentPadding: [10, 10, 10, 10],
          margin: states.maximized ? 0 : [0, 5, 5, 0]
        }
      }
    },

    'window/captionbar': {
      style: function (states) {
        return {
          decorator: (states.active ? 'window-captionbar-active' : 'window-captionbar-inactive'),
          textColor: states.active ? 'darkgray-dark' : 'darkgray-light',
          padding: 10
        }
      }
    },

    'window/icon': {
      style: function () {
        return {
          scale: true,
          width: 22,
          height: 22
        }
      }
    },

    'window/title': {
      style: function () {
        return {
          font: 'bold'
        }
      }
    },

    'window-warning': {
      include: 'window',
      style: function () {
        return {
          decorator: 'window-warning',
          textColor: '#8a6d3b'
        }
      }
    },

    'window-warning/captionbar': {
      include: 'window/captionbar',
      style: function () {
        return {
          decorator: 'window-warning-captionbar-active',
          textColor: '#8a6d3b'
        }
      }
    },

    'window-warning/title': 'window/title',

    'window-error': {
      include: 'window',
      style: function () {
        return {
          decorator: 'window-error',
          textColor: '#a94442'
        }
      }
    },

    'window-error/captionbar': {
      include: 'window/captionbar',
      style: function () {
        return {
          decorator: 'window-error-captionbar-active',
          textColor: '#a94442'
        }
      }
    },

    'window-error/title': 'window/title',

    'button': {
      style: function (states) {
        var styles = {
          decorator: 'button-default',
          textColor: 'darkgray-dark',
          padding: [6, 12],
          opacity: undefined,
          font: 'default',
          center: true
        }

        if (states.disabled) {
          styles.opacity = 0.45
        } else if (states.hovered || states.pressed) {
          styles.decorator = states.pressed ? 'button-default-pressed' : 'button-default-focused'
        }

        return styles
      }
    },

    'button-normal': {
      include: 'button',
      style: function (states) {
        var styles = {}

        if (!states.disabled) {
          styles.textColor = 'white'
          styles.decorator = 'button-normal'
        }

        if (!states.disabled && (states.hovered || states.pressed)) {
          styles.decorator = states.pressed ? 'button-normal-pressed' : 'button-normal-focused'
        }

        return styles
      }
    },

    'button-link': {
      include: 'button',
      style: function (states) {
        var styles = {
          decorator: 'button-link'
        }
        if (!states.disabled && (states.hovered || states.pressed)) {
          styles.decorator = states.pressed ? 'button-normal-pressed' : 'button-normal-focused'
        }
        return styles
      }
    },

    'button-default': 'button',

    'button-primary': {
      include: 'button',
      style: function (states) {
        var styles = {}

        if (!states.disabled) {
          styles.textColor = 'white'
          styles.decorator = 'button-primary'
        }

        if (!states.disabled && (states.hovered || states.pressed)) {
          styles.decorator = states.pressed ? 'button-primary-pressed' : 'button-primary-focused'
        }
        return styles
      }
    },

    'button-success': {
      include: 'button',
      style: function (states) {
        var styles = {}

        if (!states.disabled) {
          styles.textColor = 'white'
          styles.decorator = 'button-success'
        }

        if (!states.disabled && (states.hovered || states.pressed)) {
          styles.decorator = states.pressed ? 'button-success-pressed' : 'button-success-focused'
        }
        return styles
      }
    },

    'button-info': {
      include: 'button',
      style: function (states) {
        var styles = {}

        if (!states.disabled) {
          styles.textColor = 'white'
          styles.decorator = 'button-info'
        }

        if (!states.disabled && (states.hovered || states.pressed)) {
          styles.decorator = states.pressed ? 'button-info-pressed' : 'button-info-focused'
        }
        return styles
      }
    },

    'button-warning': {
      include: 'button',
      style: function (states) {
        var styles = {}

        if (!states.disabled) {
          styles.textColor = 'white'
          styles.decorator = 'button-warning'
        }

        if (!states.disabled && (states.hovered || states.pressed)) {
          styles.decorator = states.pressed ? 'button-warning-pressed' : 'button-warning-focused'
        }
        return styles
      }
    },

    'button-warning/icon': {
      style: function () {
        return {
          width: 22,
          scale: true
        }
      }
    },

    'button-danger': {
      include: 'button',
      style: function (states) {
        var styles = {}

        if (!states.disabled) {
          styles.textColor = 'white'
          styles.decorator = 'button-danger'
        }

        if (!states.disabled && (states.hovered || states.pressed)) {
          styles.decorator = states.pressed ? 'button-danger-pressed' : 'button-danger-focused'
        }
        return styles
      }
    },

    'button-danger/icon': 'button-warning/icon',
    'button-info/icon': 'button-warning/icon',
    'button-normal/icon': 'button-warning/icon',

    'textfield': {
      style: function (states) {
        var decorator

        var focused = !!states.focused
        var invalid = !!states.invalid
        var disabled = !!states.disabled

        if (focused && invalid && !disabled) {
          decorator = 'textfield-invalid'
        } else if (focused && !invalid && !disabled) {
          decorator = 'textfield-focused'
        } else if (disabled) {
          decorator = 'textfield-disabled'
        } else if (!focused && invalid && !disabled) {
          decorator = 'textfield-invalid'
        } else {
          decorator = 'textfield-normal'
        }

        var textColor
        if (states.disabled) {
          decorator = 'textfield-disabled'
          textColor = 'mediumgray-dark'
        } else if (states.showingPlaceholder) {
          textColor = 'lightgray-dark'
        } else {
          textColor = 'darkgray-dark'
        }

        return {
          decorator: decorator,
          padding: [6, 12],
          textColor: textColor
        }
      }
    },

    'menu': {
      style: function (states) {
        var result = {
          decorator: 'menu',
          spacingX: 6,
          spacingY: 0,
          padding: [4, 0, 4, 0],
          iconColumnWidth: 16,
          arrowColumnWidth: 4,
          placementModeY: states.submenu || states.contextmenu ? 'best-fit' : 'keep-align'
        }

        if (states.submenu) {
          result.position = 'right-top'
          result.offset = [-2, -3]
        }

        return result
      }
    },

    'menu-separator': {
      style: function () {
        return {
          height: 0,
          decorator: 'menu-separator',
          margin: [4, 2]
        }
      }
    },

    'menu-button': {
      alias: 'atom',

      style: function (states) {
        return {
          textColor: states.disabled ? 'darkgray-light' : 'white',
          backgroundColor: states.selected ? 'darkgray-light' : undefined,
          padding: [5, 18]
        }
      }
    },

    'menu-button/label': {
      style: function () {
        return {
          paddingRight: 6
        }
      }
    },

    'menu-button/arrow': {
      style: function () {
        return {
          source: '@Ligature/next',
          scale: true,
          width: 10,
          height: 10
        }
      }
    },

    'scrollbar': {
      style: function () {
        return {
          backgroundColor: 'lightgray-light'
        }
      }
    },

    'scrollbar/slider/knob': {
      style: function (states) {
        var decorator = 'scroll-knob'

        if (!states.disabled) {
          if (states.hovered && !states.pressed && !states.checked) {
            decorator = 'scroll-knob-hovered'
          } else if (states.hovered && (states.pressed || states.checked)) {
            decorator = 'scroll-knob-pressed'
          } else if (states.pressed || states.checked) {
            decorator = 'scroll-knob-pressed'
          }
        }

        return {
          height: 8,
          width: 8,
          cursor: states.disabled ? undefined : 'pointer',
          decorator: decorator,
          minHeight: states.horizontal ? undefined : 9,
          minWidth: states.horizontal ? 9 : undefined
        }
      }
    },

    'scrollbar/button': {
      style: function () {
        return {
          width: 0,
          height: 0,
          icon: undefined,
          margin: 0
        }
      }
    },

    'checkbox': {
      alias: 'atom',

      style: function (states) {
        var icon = '@Ligature/check'
        if (states.undetermined) {
          icon = '@Ligature/minus'
        }

        return {
          icon: icon,
          minWidth: 20,
          gap: 8
        }
      }
    },

    'checkbox/icon': {
      style: function (states) {
        var decorator

        if (states.disabled) {
          decorator = 'checkbox-disabled'
        } else if (states.focused && states.hovered) {
          decorator = 'checkbox-hovered'
        } else {
          decorator = 'checkbox'
        }

        decorator += states.checked || states.undetermined ? '-checked' : ''
        if (!states.disabled) {
          decorator += states.invalid && !states.disabled ? '-invalid' : ''
        }

        return {
          textColor: 'white',
          decorator: decorator,
          width: 16,
          scale: true
        }
      }
    },

    'selectbox': {
      alias: 'atom',

      style: function (states) {
        var decorator = 'selectbox-field'
        var padding = [6, 12]

        if (states.disabled) {
          decorator = 'selectbox-field-disabled'
        } else if (states.focused || states.pressed) {
          decorator = 'selectbox-field-focused'
        }

        if (states.invalid && !states.disabled) {
          decorator += '-invalid'
        }

        return {
          decorator: decorator,
          padding: padding
        }
      }
    },

    'selectbox/list': {
      alias: 'list',
      style: function () {
        return {}
      }
    },

    'selectbox/popup': {
      style: function () {
        return {
          decorator: 'popup',
          backgroundColor: 'white'
        }
      }
    },

    'selectbox/arrow': {
      include: 'image',

      style: function (states) {
        return {
          source: '@Ligature/dropdown/10'
        };
      }
    },

    'tabview-page': {
      alias: 'widget',
      include: 'widget',

      style: function () {
        return {
          padding: 8
        }
      }
    },

    'listitem': {
      alias: 'atom',

      style: function (states) {
        return {
          padding: [5, 20],
          textColor: states.selected ? 'white' : 'darkgray-dark',
          decorator: states.selected ? 'listitem-selected' : 'listitem',
          opacity: states.drag ? 0.5 : undefined
        }
      }
    },

    'spinner': {
      style: function (states) {
        var decorator

        var focused = !!states.focused
        var invalid = !!states.invalid
        var disabled = !!states.disabled

        if (focused && invalid && !disabled) {
          decorator = 'textfield-invalid'
        } else if (focused && !invalid && !disabled) {
          decorator = 'textfield-focused'
        } else if (disabled) {
          decorator = 'textfield-disabled'
        } else if (!focused && invalid && !disabled) {
          decorator = 'textfield-invalid'
        } else {
          decorator = 'textfield-normal'
        }

        return {
          decorator: decorator
        }
      }
    },

    'spinner/textfield': {
      style: function (states) {
        return {
          padding: [5, 10],
          textColor: states.disabled ? 'mediumgray-dark' : 'darkgray-dark'
        }
      }
    },

    'spinner/upbutton': {
      style: function (states) {
        var decorator = 'spinner-button'

        if (states.disabled) {
          decorator = undefined
        } else if (states.focused) {
          decorator = 'spinner-button-focused'
        }

        return {
          textColor: states.disabled ? 'lightgray-dark' : 'darkgray-light',
          padding: [0, 4, 0, 4],
          backgroundColor: states.hovered ? 'mediumgray-light' : 'transparent',
          decorator: decorator,
          icon: '@Ligature/up',
          margin: 0
        }
      }
    },

    'spinner/upbutton/icon': {
      style: function () {
        return {
          height: 10,
          scale: true
        }
      }
    },

    'spinner/downbutton': {
      include: 'spinner/upbutton',
      style: function () {
        return {
          icon: '@Ligature/down'
        }
      }
    },

    'spinner/downbutton/icon': 'spinner/upbutton/icon',

    'tooltip': {
      include: 'popup',

      style: function (states) {
        return {
          decorator: 'tooltip',
          backgroundColor: states.invalid ? 'grapefruit-dark' : 'darkgray-dark',
          textColor: 'white',
          padding: [6, 10],
          offset: [15, 5, 5, 5]
        }
      }
    },

    'virtual-tree': {
      include: 'tree',
      alias: 'tree',

      style: function () {
        return {
          padding: 1,
          minWidth: 260
        }
      }
    },

    'splitpane/splitter': {
      style: function (states) {
        return {
          width: states.horizontal ? 3 : undefined,
          height: states.vertical ? 3 : undefined,
          padding: 3,
          backgroundColor: 'white'
        }
      }
    },

    'splitpane/slider': {
      style: function (states) {
        return {
          width: states.horizontal ? 3 : undefined,
          height: states.vertical ? 3 : undefined,
          backgroundColor: 'white'
        }
      }
    },

    'toolbar/part': {},
    'toolbar/part/container': {},
    'toolbar/part/handle': {},

    'toolbar-button': {
      alias: 'atom',

      style: function (states) {
        var backgroundColor = 'transparent'
        var textColor = 'darkgray-dark'

        if (states.disabled) {
          textColor = 'lightgray-dark'
        } else if (states.hovered && !states.pressed && !states.checked) {
          backgroundColor = 'lightgray-dark'
        } else if (states.hovered && (states.pressed || states.checked)) {
          backgroundColor = 'mediumgray-light'
        } else if (states.pressed || states.checked) {
          backgroundColor = 'mediumgray-dark'
        }

        return {
          cursor: states.disabled ? undefined : 'pointer',
          backgroundColor: backgroundColor,
          textColor: textColor,
          padding: [3, 10]
        }
      }
    },

    'toolbar-menubutton/arrow': {
      alias: 'image',
      include: 'image',

      style: function (states) {
        return {
          source: '@Ligature/dropdown/12',
          cursor: states.disabled ? undefined : 'pointer',
          marginLeft: 2
        }
      }
    },

    'menu-checkbox': {
      alias: 'menu-button',
      include: 'menu-button',

      style: function (states) {
        return {
          icon: !states.checked ? undefined : '@Ligature/check/16',
          textColor: 'lightgray-light'
        }
      }
    },

    'table-scroller/header': {
      style: function () {
        return {
          decorator: 'table-header'
        }
      }
    },

    'table-header-cell': {
      alias: 'atom',

      style: function (states) {
        return {
          decorator: states.first ? 'table-header-cell-first' : 'table-header-cell',
          minWidth: 13,
          font: 'bold',
          cursor: states.disabled ? undefined : 'pointer',
          padding: 8,
          sortIcon: states.sorted ? (
            states.sortedAscending ? '@Ligature/down/12' : '@Ligature/up/12'
          ) : undefined
        }
      }
    },

    'table-header-cell/sort-icon': {
      style: function () {
        return {
          alignY: 'middle',
          alignX: 'right'
        }
      }
    },

    'bread-crumb': {
      style: function () {
        return {
          minHeight: 38,
          backgroundColor: 'lightgray-dark',
          decorator: 'bread-crumb'
        }
      }
    },

    'bread-crumb-item': {
      style: function (states) {
        return {
          padding: 0,
          margin: 0,
          backgroundColor: states.forelast || states.last ? 'transparent' : (
            states.nextpressed ? 'aqua-light' : 'aqua-dark')
        }
      }
    },

    'bread-crumb-item/atom': {
      include: 'atom',
      alias: 'atom',
      style: function (states) {
        var background = 'aqua-dark'

        if (states.last) {
          background = 'transparent'
        } else if (states.hovered) {
          background = 'aqua-light'
        }

        return {
          paddingLeft: 6,
          paddingRight: 6,
          backgroundColor: background,
          textColor: states.last ? 'darkgray-dark' : 'white'
        }
      }
    },

    'bread-crumb-item/atom/icon': {
      style: function () {
        return {
          width: 22,
          height: 22,
          scale: true
        }
      }
    },

    'bread-crumb-item/arrow': {
      style: function (states) {
        return {
          height: 0,
          width: 0,
          decorator: states.last ? undefined : 'bread-crumb-item-arrow'
        }
      }
    },

    'bread-crumb-item/arrow-inner': {
      style: function (states) {
        return {
          height: 0,
          width: 0,
          decorator: states.last ? undefined : (
            states.hovered ? 'bread-crumb-item-arrow-inner-pressed' : 'bread-crumb-item-arrow-inner')
        }
      }
    },

    'datechooser': {
      style: function () {
        return {
          backgroundColor: 'white',
          decorator: 'popup',
          minWidth: 220
        }
      }
    },

    'datechooser/navigation-bar': {
      style: function (states) {
        return {
          backgroundColor: undefined,
          textColor: states.disabled ? 'text-disabled' : states.invalid ? 'invalid' : undefined,
          padding: [4, 10]
        }
      }
    },

    'datechooser/button': {
      style: function (states) {
        var result = {
          show: 'icon',
          cursor: states.disabled ? undefined : 'pointer'
        }

        if (states.lastYear) {
          result.icon = qx.theme.simple.Image.URLS['arrow-rewind']
        } else if (states.lastMonth) {
          result.icon = qx.theme.simple.Image.URLS['arrow-left']
        } else if (states.nextYear) {
          result.icon = qx.theme.simple.Image.URLS['arrow-forward']
        } else if (states.nextMonth) {
          result.icon = qx.theme.simple.Image.URLS['arrow-right']
        }

        return result
      }
    }
  }
})
