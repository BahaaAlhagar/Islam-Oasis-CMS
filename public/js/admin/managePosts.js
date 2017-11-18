webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
    /**
     * Create a new Errors instance.
     */
    function Errors() {
        _classCallCheck(this, Errors);

        this.errors = {};
    }

    /**
     * Determine if an errors exists for the given field.
     *
     * @param {string} field
     */


    _createClass(Errors, [{
        key: "has",
        value: function has(field) {
            return this.errors.hasOwnProperty(field);
        }

        /**
         * Determine if we have any errors.
         */

    }, {
        key: "any",
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }

        /**
         * Retrieve the error message for a field.
         *
         * @param {string} field
         */

    }, {
        key: "get",
        value: function get(field) {
            if (this.errors[field]) {
                return this.errors[field][0];
            }
        }

        /**
         * Record the new errors.
         *
         * @param {object} errors
         */

    }, {
        key: "record",
        value: function record(errors) {
            this.errors = errors.errors;
        }

        /**
         * Clear one or all error fields.
         *
         * @param {string|null} field
         */

    }, {
        key: "clear",
        value: function clear(field) {
            if (field) {
                delete this.errors[field];

                return;
            }

            this.errors = {};
        }
    }]);

    return Errors;
}();

/* harmony default export */ __webpack_exports__["a"] = (Errors);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_resource__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_Form__ = __webpack_require__(20);
try {
    window.$ = window.jQuery = __webpack_require__(4);

    __webpack_require__(5);
} catch (e) {}

window.axios = __webpack_require__(22);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

window.Vue = __webpack_require__(23);


Vue.use(__WEBPACK_IMPORTED_MODULE_0_vue_resource__["a" /* default */]);


window.Form = __WEBPACK_IMPORTED_MODULE_1__partials_Form__["a" /* default */];

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// This file is autogenerated via the `commonjs` Grunt task. You can require() this file in a CommonJS environment.
__webpack_require__(6)
__webpack_require__(7)
__webpack_require__(8)
__webpack_require__(9)
__webpack_require__(10)
__webpack_require__(11)
__webpack_require__(12)
__webpack_require__(13)
__webpack_require__(14)
__webpack_require__(15)
__webpack_require__(16)
__webpack_require__(17)

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Url */
/* unused harmony export Http */
/* unused harmony export Resource */
/*!
 * vue-resource v1.3.4
 * https://github.com/pagekit/vue-resource
 * Released under the MIT License.
 */

/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

var RESOLVED = 0;
var REJECTED = 1;
var PENDING  = 2;

function Promise$1(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

Promise$1.reject = function (r) {
    return new Promise$1(function (resolve, reject) {
        reject(r);
    });
};

Promise$1.resolve = function (x) {
    return new Promise$1(function (resolve, reject) {
        resolve(x);
    });
};

Promise$1.all = function all(iterable) {
    return new Promise$1(function (resolve, reject) {
        var count = 0, result = [];

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

Promise$1.race = function race(iterable) {
    return new Promise$1(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

var p$1 = Promise$1.prototype;

p$1.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x['then'];

            if (x !== null && typeof x === 'object' && typeof then === 'function') {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;

                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p$1.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p$1.notify = function notify() {
    var promise = this;

    nextTick(function () {
        if (promise.state !== PENDING) {
            while (promise.deferred.length) {
                var deferred = promise.deferred.shift(),
                    onResolved = deferred[0],
                    onRejected = deferred[1],
                    resolve = deferred[2],
                    reject = deferred[3];

                try {
                    if (promise.state === RESOLVED) {
                        if (typeof onResolved === 'function') {
                            resolve(onResolved.call(undefined, promise.value));
                        } else {
                            resolve(promise.value);
                        }
                    } else if (promise.state === REJECTED) {
                        if (typeof onRejected === 'function') {
                            resolve(onRejected.call(undefined, promise.value));
                        } else {
                            reject(promise.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p$1.then = function then(onResolved, onRejected) {
    var promise = this;

    return new Promise$1(function (resolve, reject) {
        promise.deferred.push([onResolved, onRejected, resolve, reject]);
        promise.notify();
    });
};

p$1.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

/**
 * Promise adapter.
 */

if (typeof Promise === 'undefined') {
    window.Promise = Promise$1;
}

function PromiseObj(executor, context) {

    if (executor instanceof Promise) {
        this.promise = executor;
    } else {
        this.promise = new Promise(executor.bind(context));
    }

    this.context = context;
}

PromiseObj.all = function (iterable, context) {
    return new PromiseObj(Promise.all(iterable), context);
};

PromiseObj.resolve = function (value, context) {
    return new PromiseObj(Promise.resolve(value), context);
};

PromiseObj.reject = function (reason, context) {
    return new PromiseObj(Promise.reject(reason), context);
};

PromiseObj.race = function (iterable, context) {
    return new PromiseObj(Promise.race(iterable), context);
};

var p = PromiseObj.prototype;

p.bind = function (context) {
    this.context = context;
    return this;
};

p.then = function (fulfilled, rejected) {

    if (fulfilled && fulfilled.bind && this.context) {
        fulfilled = fulfilled.bind(this.context);
    }

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
};

p.catch = function (rejected) {

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.catch(rejected), this.context);
};

p.finally = function (callback) {

    return this.then(function (value) {
            callback.call(this);
            return value;
        }, function (reason) {
            callback.call(this);
            return Promise.reject(reason);
        }
    );
};

/**
 * Utility functions.
 */

var ref = {};
var hasOwnProperty = ref.hasOwnProperty;

var ref$1 = [];
var slice = ref$1.slice;
var debug = false;
var ntick;

var inBrowser = typeof window !== 'undefined';

var Util = function (ref) {
    var config = ref.config;
    var nextTick = ref.nextTick;

    ntick = nextTick;
    debug = config.debug || !config.silent;
};

function warn(msg) {
    if (typeof console !== 'undefined' && debug) {
        console.warn('[VueResource warn]: ' + msg);
    }
}

function error(msg) {
    if (typeof console !== 'undefined') {
        console.error(msg);
    }
}

function nextTick(cb, ctx) {
    return ntick(cb, ctx);
}

function trim(str) {
    return str ? str.replace(/^\s*|\s*$/g, '') : '';
}

function trimEnd(str, chars) {

    if (str && chars === undefined) {
        return str.replace(/\s+$/, '');
    }

    if (!str || !chars) {
        return str;
    }

    return str.replace(new RegExp(("[" + chars + "]+$")), '');
}

function toLower(str) {
    return str ? str.toLowerCase() : '';
}

function toUpper(str) {
    return str ? str.toUpperCase() : '';
}

var isArray = Array.isArray;

function isString(val) {
    return typeof val === 'string';
}



function isFunction(val) {
    return typeof val === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
}

function isBlob(obj) {
    return typeof Blob !== 'undefined' && obj instanceof Blob;
}

function isFormData(obj) {
    return typeof FormData !== 'undefined' && obj instanceof FormData;
}

function when(value, fulfilled, rejected) {

    var promise = PromiseObj.resolve(value);

    if (arguments.length < 2) {
        return promise;
    }

    return promise.then(fulfilled, rejected);
}

function options(fn, obj, opts) {

    opts = opts || {};

    if (isFunction(opts)) {
        opts = opts.call(obj);
    }

    return merge(fn.bind({$vm: obj, $options: opts}), fn, {$options: opts});
}

function each(obj, iterator) {

    var i, key;

    if (isArray(obj)) {
        for (i = 0; i < obj.length; i++) {
            iterator.call(obj[i], obj[i], i);
        }
    } else if (isObject(obj)) {
        for (key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                iterator.call(obj[key], obj[key], key);
            }
        }
    }

    return obj;
}

var assign = Object.assign || _assign;

function merge(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source, true);
    });

    return target;
}

function defaults(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {

        for (var key in source) {
            if (target[key] === undefined) {
                target[key] = source[key];
            }
        }

    });

    return target;
}

function _assign(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source);
    });

    return target;
}

function _merge(target, source, deep) {
    for (var key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
                target[key] = {};
            }
            if (isArray(source[key]) && !isArray(target[key])) {
                target[key] = [];
            }
            _merge(target[key], source[key], deep);
        } else if (source[key] !== undefined) {
            target[key] = source[key];
        }
    }
}

/**
 * Root Prefix Transform.
 */

var root = function (options$$1, next) {

    var url = next(options$$1);

    if (isString(options$$1.root) && !/^(https?:)?\//.test(url)) {
        url = trimEnd(options$$1.root, '/') + '/' + url;
    }

    return url;
};

/**
 * Query Parameter Transform.
 */

var query = function (options$$1, next) {

    var urlParams = Object.keys(Url.options.params), query = {}, url = next(options$$1);

    each(options$$1.params, function (value, key) {
        if (urlParams.indexOf(key) === -1) {
            query[key] = value;
        }
    });

    query = Url.params(query);

    if (query) {
        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
    }

    return url;
};

/**
 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
 */

function expand(url, params, variables) {

    var tmpl = parse(url), expanded = tmpl.expand(params);

    if (variables) {
        variables.push.apply(variables, tmpl.vars);
    }

    return expanded;
}

function parse(template) {

    var operators = ['+', '#', '.', '/', ';', '?', '&'], variables = [];

    return {
        vars: variables,
        expand: function expand(context) {
            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
                if (expression) {

                    var operator = null, values = [];

                    if (operators.indexOf(expression.charAt(0)) !== -1) {
                        operator = expression.charAt(0);
                        expression = expression.substr(1);
                    }

                    expression.split(/,/g).forEach(function (variable) {
                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                        variables.push(tmp[1]);
                    });

                    if (operator && operator !== '+') {

                        var separator = ',';

                        if (operator === '?') {
                            separator = '&';
                        } else if (operator !== '#') {
                            separator = operator;
                        }

                        return (values.length !== 0 ? operator : '') + values.join(separator);
                    } else {
                        return values.join(',');
                    }

                } else {
                    return encodeReserved(literal);
                }
            });
        }
    };
}

function getValues(context, operator, key, modifier) {

    var value = context[key], result = [];

    if (isDefined(value) && value !== '') {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            value = value.toString();

            if (modifier && modifier !== '*') {
                value = value.substring(0, parseInt(modifier, 10));
            }

            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
        } else {
            if (modifier === '*') {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            } else {
                var tmp = [];

                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeURIComponent(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }

                if (isKeyOperator(operator)) {
                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
                } else if (tmp.length !== 0) {
                    result.push(tmp.join(','));
                }
            }
        }
    } else {
        if (operator === ';') {
            result.push(encodeURIComponent(key));
        } else if (value === '' && (operator === '&' || operator === '?')) {
            result.push(encodeURIComponent(key) + '=');
        } else if (value === '') {
            result.push('');
        }
    }

    return result;
}

function isDefined(value) {
    return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
    return operator === ';' || operator === '&' || operator === '?';
}

function encodeValue(operator, value, key) {

    value = (operator === '+' || operator === '#') ? encodeReserved(value) : encodeURIComponent(value);

    if (key) {
        return encodeURIComponent(key) + '=' + value;
    } else {
        return value;
    }
}

function encodeReserved(str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part);
        }
        return part;
    }).join('');
}

/**
 * URL Template (RFC 6570) Transform.
 */

var template = function (options) {

    var variables = [], url = expand(options.url, options.params, variables);

    variables.forEach(function (key) {
        delete options.params[key];
    });

    return url;
};

/**
 * Service for URL templating.
 */

function Url(url, params) {

    var self = this || {}, options$$1 = url, transform;

    if (isString(url)) {
        options$$1 = {url: url, params: params};
    }

    options$$1 = merge({}, Url.options, self.$options, options$$1);

    Url.transforms.forEach(function (handler) {

        if (isString(handler)) {
            handler = Url.transform[handler];
        }

        if (isFunction(handler)) {
            transform = factory(handler, transform, self.$vm);
        }

    });

    return transform(options$$1);
}

/**
 * Url options.
 */

Url.options = {
    url: '',
    root: null,
    params: {}
};

/**
 * Url transforms.
 */

Url.transform = {template: template, query: query, root: root};
Url.transforms = ['template', 'query', 'root'];

/**
 * Encodes a Url parameter string.
 *
 * @param {Object} obj
 */

Url.params = function (obj) {

    var params = [], escape = encodeURIComponent;

    params.add = function (key, value) {

        if (isFunction(value)) {
            value = value();
        }

        if (value === null) {
            value = '';
        }

        this.push(escape(key) + '=' + escape(value));
    };

    serialize(params, obj);

    return params.join('&').replace(/%20/g, '+');
};

/**
 * Parse a URL and return its components.
 *
 * @param {String} url
 */

Url.parse = function (url) {

    var el = document.createElement('a');

    if (document.documentMode) {
        el.href = url;
        url = el.href;
    }

    el.href = url;

    return {
        href: el.href,
        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
        port: el.port,
        host: el.host,
        hostname: el.hostname,
        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
        search: el.search ? el.search.replace(/^\?/, '') : '',
        hash: el.hash ? el.hash.replace(/^#/, '') : ''
    };
};

function factory(handler, next, vm) {
    return function (options$$1) {
        return handler.call(vm, options$$1, next);
    };
}

function serialize(params, obj, scope) {

    var array = isArray(obj), plain = isPlainObject(obj), hash;

    each(obj, function (value, key) {

        hash = isObject(value) || isArray(value);

        if (scope) {
            key = scope + '[' + (plain || hash ? key : '') + ']';
        }

        if (!scope && array) {
            params.add(value.name, value.value);
        } else if (hash) {
            serialize(params, value, key);
        } else {
            params.add(key, value);
        }
    });
}

/**
 * XDomain client (Internet Explorer).
 */

var xdrClient = function (request) {
    return new PromiseObj(function (resolve) {

        var xdr = new XDomainRequest(), handler = function (ref) {
            var type = ref.type;


            var status = 0;

            if (type === 'load') {
                status = 200;
            } else if (type === 'error') {
                status = 500;
            }

            resolve(request.respondWith(xdr.responseText, {status: status}));
        };

        request.abort = function () { return xdr.abort(); };

        xdr.open(request.method, request.getUrl());

        if (request.timeout) {
            xdr.timeout = request.timeout;
        }

        xdr.onload = handler;
        xdr.onabort = handler;
        xdr.onerror = handler;
        xdr.ontimeout = handler;
        xdr.onprogress = function () {};
        xdr.send(request.getBody());
    });
};

/**
 * CORS Interceptor.
 */

var SUPPORTS_CORS = inBrowser && 'withCredentials' in new XMLHttpRequest();

var cors = function (request, next) {

    if (inBrowser) {

        var orgUrl = Url.parse(location.href);
        var reqUrl = Url.parse(request.getUrl());

        if (reqUrl.protocol !== orgUrl.protocol || reqUrl.host !== orgUrl.host) {

            request.crossOrigin = true;
            request.emulateHTTP = false;

            if (!SUPPORTS_CORS) {
                request.client = xdrClient;
            }
        }
    }

    next();
};

/**
 * Form data Interceptor.
 */

var form = function (request, next) {

    if (isFormData(request.body)) {

        request.headers.delete('Content-Type');

    } else if (isObject(request.body) && request.emulateJSON) {

        request.body = Url.params(request.body);
        request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    }

    next();
};

/**
 * JSON Interceptor.
 */

var json = function (request, next) {

    var type = request.headers.get('Content-Type') || '';

    if (isObject(request.body) && type.indexOf('application/json') === 0) {
        request.body = JSON.stringify(request.body);
    }

    next(function (response) {

        return response.bodyText ? when(response.text(), function (text) {

            type = response.headers.get('Content-Type') || '';

            if (type.indexOf('application/json') === 0 || isJson(text)) {

                try {
                    response.body = JSON.parse(text);
                } catch (e) {
                    response.body = null;
                }

            } else {
                response.body = text;
            }

            return response;

        }) : response;

    });
};

function isJson(str) {

    var start = str.match(/^\[|^\{(?!\{)/), end = {'[': /]$/, '{': /}$/};

    return start && end[start[0]].test(str);
}

/**
 * JSONP client (Browser).
 */

var jsonpClient = function (request) {
    return new PromiseObj(function (resolve) {

        var name = request.jsonp || 'callback', callback = request.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2), body = null, handler, script;

        handler = function (ref) {
            var type = ref.type;


            var status = 0;

            if (type === 'load' && body !== null) {
                status = 200;
            } else if (type === 'error') {
                status = 500;
            }

            if (status && window[callback]) {
                delete window[callback];
                document.body.removeChild(script);
            }

            resolve(request.respondWith(body, {status: status}));
        };

        window[callback] = function (result) {
            body = JSON.stringify(result);
        };

        request.abort = function () {
            handler({type: 'abort'});
        };

        request.params[name] = callback;

        if (request.timeout) {
            setTimeout(request.abort, request.timeout);
        }

        script = document.createElement('script');
        script.src = request.getUrl();
        script.type = 'text/javascript';
        script.async = true;
        script.onload = handler;
        script.onerror = handler;

        document.body.appendChild(script);
    });
};

/**
 * JSONP Interceptor.
 */

var jsonp = function (request, next) {

    if (request.method == 'JSONP') {
        request.client = jsonpClient;
    }

    next();
};

/**
 * Before Interceptor.
 */

var before = function (request, next) {

    if (isFunction(request.before)) {
        request.before.call(this, request);
    }

    next();
};

/**
 * HTTP method override Interceptor.
 */

var method = function (request, next) {

    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
        request.headers.set('X-HTTP-Method-Override', request.method);
        request.method = 'POST';
    }

    next();
};

/**
 * Header Interceptor.
 */

var header = function (request, next) {

    var headers = assign({}, Http.headers.common,
        !request.crossOrigin ? Http.headers.custom : {},
        Http.headers[toLower(request.method)]
    );

    each(headers, function (value, name) {
        if (!request.headers.has(name)) {
            request.headers.set(name, value);
        }
    });

    next();
};

/**
 * XMLHttp client (Browser).
 */

var xhrClient = function (request) {
    return new PromiseObj(function (resolve) {

        var xhr = new XMLHttpRequest(), handler = function (event) {

            var response = request.respondWith(
                'response' in xhr ? xhr.response : xhr.responseText, {
                    status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
                    statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
                }
            );

            each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
                response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
            });

            resolve(response);
        };

        request.abort = function () { return xhr.abort(); };

        if (request.progress) {
            if (request.method === 'GET') {
                xhr.addEventListener('progress', request.progress);
            } else if (/^(POST|PUT)$/i.test(request.method)) {
                xhr.upload.addEventListener('progress', request.progress);
            }
        }

        xhr.open(request.method, request.getUrl(), true);

        if (request.timeout) {
            xhr.timeout = request.timeout;
        }

        if (request.responseType && 'responseType' in xhr) {
            xhr.responseType = request.responseType;
        }

        if (request.withCredentials || request.credentials) {
            xhr.withCredentials = true;
        }

        if (!request.crossOrigin) {
            request.headers.set('X-Requested-With', 'XMLHttpRequest');
        }

        request.headers.forEach(function (value, name) {
            xhr.setRequestHeader(name, value);
        });

        xhr.onload = handler;
        xhr.onabort = handler;
        xhr.onerror = handler;
        xhr.ontimeout = handler;
        xhr.send(request.getBody());
    });
};

/**
 * Http client (Node).
 */

var nodeClient = function (request) {

    var client = __webpack_require__(19);

    return new PromiseObj(function (resolve) {

        var url = request.getUrl();
        var body = request.getBody();
        var method = request.method;
        var headers = {}, handler;

        request.headers.forEach(function (value, name) {
            headers[name] = value;
        });

        client(url, {body: body, method: method, headers: headers}).then(handler = function (resp) {

            var response = request.respondWith(resp.body, {
                    status: resp.statusCode,
                    statusText: trim(resp.statusMessage)
                }
            );

            each(resp.headers, function (value, name) {
                response.headers.set(name, value);
            });

            resolve(response);

        }, function (error$$1) { return handler(error$$1.response); });
    });
};

/**
 * Base client.
 */

var Client = function (context) {

    var reqHandlers = [sendRequest], resHandlers = [], handler;

    if (!isObject(context)) {
        context = null;
    }

    function Client(request) {
        return new PromiseObj(function (resolve, reject) {

            function exec() {

                handler = reqHandlers.pop();

                if (isFunction(handler)) {
                    handler.call(context, request, next);
                } else {
                    warn(("Invalid interceptor of type " + (typeof handler) + ", must be a function"));
                    next();
                }
            }

            function next(response) {

                if (isFunction(response)) {

                    resHandlers.unshift(response);

                } else if (isObject(response)) {

                    resHandlers.forEach(function (handler) {
                        response = when(response, function (response) {
                            return handler.call(context, response) || response;
                        }, reject);
                    });

                    when(response, resolve, reject);

                    return;
                }

                exec();
            }

            exec();

        }, context);
    }

    Client.use = function (handler) {
        reqHandlers.push(handler);
    };

    return Client;
};

function sendRequest(request, resolve) {

    var client = request.client || (inBrowser ? xhrClient : nodeClient);

    resolve(client(request));
}

/**
 * HTTP Headers.
 */

var Headers = function Headers(headers) {
    var this$1 = this;


    this.map = {};

    each(headers, function (value, name) { return this$1.append(name, value); });
};

Headers.prototype.has = function has (name) {
    return getName(this.map, name) !== null;
};

Headers.prototype.get = function get (name) {

    var list = this.map[getName(this.map, name)];

    return list ? list.join() : null;
};

Headers.prototype.getAll = function getAll (name) {
    return this.map[getName(this.map, name)] || [];
};

Headers.prototype.set = function set (name, value) {
    this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
};

Headers.prototype.append = function append (name, value){

    var list = this.map[getName(this.map, name)];

    if (list) {
        list.push(trim(value));
    } else {
        this.set(name, value);
    }
};

Headers.prototype.delete = function delete$1 (name){
    delete this.map[getName(this.map, name)];
};

Headers.prototype.deleteAll = function deleteAll (){
    this.map = {};
};

Headers.prototype.forEach = function forEach (callback, thisArg) {
        var this$1 = this;

    each(this.map, function (list, name) {
        each(list, function (value) { return callback.call(thisArg, value, name, this$1); });
    });
};

function getName(map, name) {
    return Object.keys(map).reduce(function (prev, curr) {
        return toLower(name) === toLower(curr) ? curr : prev;
    }, null);
}

function normalizeName(name) {

    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
    }

    return trim(name);
}

/**
 * HTTP Response.
 */

var Response = function Response(body, ref) {
    var url = ref.url;
    var headers = ref.headers;
    var status = ref.status;
    var statusText = ref.statusText;


    this.url = url;
    this.ok = status >= 200 && status < 300;
    this.status = status || 0;
    this.statusText = statusText || '';
    this.headers = new Headers(headers);
    this.body = body;

    if (isString(body)) {

        this.bodyText = body;

    } else if (isBlob(body)) {

        this.bodyBlob = body;

        if (isBlobText(body)) {
            this.bodyText = blobText(body);
        }
    }
};

Response.prototype.blob = function blob () {
    return when(this.bodyBlob);
};

Response.prototype.text = function text () {
    return when(this.bodyText);
};

Response.prototype.json = function json () {
    return when(this.text(), function (text) { return JSON.parse(text); });
};

Object.defineProperty(Response.prototype, 'data', {

    get: function get() {
        return this.body;
    },

    set: function set(body) {
        this.body = body;
    }

});

function blobText(body) {
    return new PromiseObj(function (resolve) {

        var reader = new FileReader();

        reader.readAsText(body);
        reader.onload = function () {
            resolve(reader.result);
        };

    });
}

function isBlobText(body) {
    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
}

/**
 * HTTP Request.
 */

var Request = function Request(options$$1) {

    this.body = null;
    this.params = {};

    assign(this, options$$1, {
        method: toUpper(options$$1.method || 'GET')
    });

    if (!(this.headers instanceof Headers)) {
        this.headers = new Headers(this.headers);
    }
};

Request.prototype.getUrl = function getUrl (){
    return Url(this);
};

Request.prototype.getBody = function getBody (){
    return this.body;
};

Request.prototype.respondWith = function respondWith (body, options$$1) {
    return new Response(body, assign(options$$1 || {}, {url: this.getUrl()}));
};

/**
 * Service for sending network requests.
 */

var COMMON_HEADERS = {'Accept': 'application/json, text/plain, */*'};
var JSON_CONTENT_TYPE = {'Content-Type': 'application/json;charset=utf-8'};

function Http(options$$1) {

    var self = this || {}, client = Client(self.$vm);

    defaults(options$$1 || {}, self.$options, Http.options);

    Http.interceptors.forEach(function (handler) {

        if (isString(handler)) {
            handler = Http.interceptor[handler];
        }

        if (isFunction(handler)) {
            client.use(handler);
        }

    });

    return client(new Request(options$$1)).then(function (response) {

        return response.ok ? response : PromiseObj.reject(response);

    }, function (response) {

        if (response instanceof Error) {
            error(response);
        }

        return PromiseObj.reject(response);
    });
}

Http.options = {};

Http.headers = {
    put: JSON_CONTENT_TYPE,
    post: JSON_CONTENT_TYPE,
    patch: JSON_CONTENT_TYPE,
    delete: JSON_CONTENT_TYPE,
    common: COMMON_HEADERS,
    custom: {}
};

Http.interceptor = {before: before, method: method, jsonp: jsonp, json: json, form: form, header: header, cors: cors};
Http.interceptors = ['before', 'method', 'jsonp', 'json', 'form', 'header', 'cors'];

['get', 'delete', 'head', 'jsonp'].forEach(function (method$$1) {

    Http[method$$1] = function (url, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1}));
    };

});

['post', 'put', 'patch'].forEach(function (method$$1) {

    Http[method$$1] = function (url, body, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1, body: body}));
    };

});

/**
 * Service for interacting with RESTful services.
 */

function Resource(url, params, actions, options$$1) {

    var self = this || {}, resource = {};

    actions = assign({},
        Resource.actions,
        actions
    );

    each(actions, function (action, name) {

        action = merge({url: url, params: assign({}, params)}, options$$1, action);

        resource[name] = function () {
            return (self.$http || Http)(opts(action, arguments));
        };
    });

    return resource;
}

function opts(action, args) {

    var options$$1 = assign({}, action), params = {}, body;

    switch (args.length) {

        case 2:

            params = args[0];
            body = args[1];

            break;

        case 1:

            if (/^(POST|PUT|PATCH)$/i.test(options$$1.method)) {
                body = args[0];
            } else {
                params = args[0];
            }

            break;

        case 0:

            break;

        default:

            throw 'Expected up to 2 arguments [params, body], got ' + args.length + ' arguments';
    }

    options$$1.body = body;
    options$$1.params = assign({}, options$$1.params, params);

    return options$$1;
}

Resource.actions = {

    get: {method: 'GET'},
    save: {method: 'POST'},
    query: {method: 'GET'},
    update: {method: 'PUT'},
    remove: {method: 'DELETE'},
    delete: {method: 'DELETE'}

};

/**
 * Install plugin.
 */

function plugin(Vue) {

    if (plugin.installed) {
        return;
    }

    Util(Vue);

    Vue.url = Url;
    Vue.http = Http;
    Vue.resource = Resource;
    Vue.Promise = PromiseObj;

    Object.defineProperties(Vue.prototype, {

        $url: {
            get: function get() {
                return options(Vue.url, this, this.$options.url);
            }
        },

        $http: {
            get: function get() {
                return options(Vue.http, this, this.$options.http);
            }
        },

        $resource: {
            get: function get() {
                return Vue.resource.bind(this);
            }
        },

        $promise: {
            get: function get() {
                var this$1 = this;

                return function (executor) { return new Vue.Promise(executor, this$1); };
            }
        }

    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);



/***/ }),
/* 19 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Form = function () {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    function Form(data) {
        _classCallCheck(this, Form);

        this.originalData = data;

        for (var field in data) {
            this[field] = data[field];
        }

        this.errors = new __WEBPACK_IMPORTED_MODULE_0__Errors__["a" /* default */]();
    }

    /**
     * Fetch all relevant data for the form.
     */


    _createClass(Form, [{
        key: 'data',
        value: function data() {
            var data = {};

            for (var property in this.originalData) {
                data[property] = this[property];
            }

            return data;
        }

        /**
         * Reset the form fields.
         */

    }, {
        key: 'reset',
        value: function reset() {
            for (var field in this.originalData) {
                this[field] = '';
            }

            this.errors.clear();
        }

        /**
         * Send a POST request to the given URL.
         * .
         * @param {string} url
         */

    }, {
        key: 'post',
        value: function post(url) {
            return this.submit('post', url);
        }

        /**
         * Send a PUT request to the given URL.
         * .
         * @param {string} url
         */

    }, {
        key: 'put',
        value: function put(url) {
            return this.submit('put', url);
        }

        /**
         * Send a PATCH request to the given URL.
         * .
         * @param {string} url
         */

    }, {
        key: 'patch',
        value: function patch(url) {
            return this.submit('patch', url);
        }

        /**
         * Send a DELETE request to the given URL.
         * .
         * @param {string} url
         */

    }, {
        key: 'delete',
        value: function _delete(url) {
            return this.submit('delete', url);
        }

        /**
         * Submit the form.
         *
         * @param {string} requestType
         * @param {string} url
         */

    }, {
        key: 'submit',
        value: function submit(requestType, url) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                axios[requestType](url, _this.data()).then(function (response) {
                    _this.onSuccess(response.data);

                    resolve(response.data);
                }).catch(function (error) {
                    _this.onFail(error.response.data);

                    reject(error.response.data);
                });
            });
        }

        /**
         * Handle a successful form submission.
         *
         * @param {object} data
         */

    }, {
        key: 'onSuccess',
        value: function onSuccess(data) {
            // alert(data.message); // temporary

            this.reset();
        }

        /**
         * Handle a failed form submission.
         *
         * @param {object} errors
         */

    }, {
        key: 'onFail',
        value: function onFail(errors) {
            this.errors.record(errors);
        }
    }]);

    return Form;
}();

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VuePaginator"] = factory();
	else
		root["VuePaginator"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _VPaginator = __webpack_require__(2);
	
	var _VPaginator2 = _interopRequireDefault(_VPaginator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _VPaginator2.default;

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(5)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./VPaginator.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./VPaginator.vue","-!vue-html-loader!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./VPaginator.vue"], function () {
	var newOptions = require("-!babel!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./VPaginator.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./VPaginator.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(4);
	
	exports.default = {
	  props: {
	    resource_url: {
	      type: String,
	      required: true
	    },
	    custom_template: '',
	    options: {
	      type: Object,
	      required: false,
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  data: function data() {
	    return {
	      current_page: '',
	      last_page: '',
	      next_page_url: '',
	      prev_page_url: '',
	      config: {
	        remote_data: 'data',
	        remote_current_page: 'current_page',
	        remote_last_page: 'last_page',
	        remote_next_page_url: 'next_page_url',
	        remote_prev_page_url: 'prev_page_url',
	        previous_button_text: 'Previous',
	        next_button_text: 'Next'
	      }
	    };
	  },
	
	  methods: {
	    fetchData: function fetchData(pageUrl) {
	      this.$emit("request_start");
	      pageUrl = pageUrl || this.resource_url;
	      var self = this;
	      var config = {};
	      if (this.config.headers) {
	        config.headers = this.config.headers;
	      }
	      this.$http.get(pageUrl, config).then(function (response) {
	        self.$emit("request_finish", response);
	        self.handleResponseData(response.data);
	      }).catch(function (response) {
	        self.$emit("request_error", response);
	        console.log('Fetching data failed.', response);
	      });
	    },
	    handleResponseData: function handleResponseData(response) {
	      this.makePagination(response);
	      var data = _utils.utils.getNestedValue(response, this.config.remote_data);
	      this.$emit('update', data);
	    },
	    makePagination: function makePagination(data) {
	      this.current_page = _utils.utils.getNestedValue(data, this.config.remote_current_page);
	      this.last_page = _utils.utils.getNestedValue(data, this.config.remote_last_page);
	      this.next_page_url = this.current_page === this.last_page ? null : _utils.utils.getNestedValue(data, this.config.remote_next_page_url);
	      this.prev_page_url = this.current_page === 1 ? null : _utils.utils.getNestedValue(data, this.config.remote_prev_page_url);
	    },
	    initConfig: function initConfig() {
	      this.config = _utils.utils.merge_objects(this.config, this.options);
	    }
	  },
	  watch: {
	    resource_url: function resource_url() {
	      this.fetchData();
	    }
	  },
	  created: function created() {
	    this.initConfig();
	    this.fetchData();
	  }
	};
	// </script>
	// <template>
	//   <div class="v-paginator">
	//     <button class="btn btn-default" @click="fetchData(prev_page_url)" :disabled="!prev_page_url">
	//       {{config.previous_button_text}}
	//     </button>
	//     <span>Page {{current_page}} of {{last_page}}</span>
	//     <button class="btn btn-default" @click="fetchData(next_page_url)" :disabled="!next_page_url">
	//       {{config.next_button_text}}
	//     </button>
	//   </div>
	// </template>
	
	// <script>

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var merge_objects = function merge_objects(obj1, obj2) {
	  var obj3 = {};
	  for (var attrname in obj1) {
	    obj3[attrname] = obj1[attrname];
	  }
	  for (var _attrname in obj2) {
	    obj3[_attrname] = obj2[_attrname];
	  }
	  return obj3;
	};
	
	var getNestedValue = function getNestedValue(obj, path) {
	  var originalPath = path;
	  path = path.split('.');
	  var res = obj;
	  for (var i = 0; i < path.length; i++) {
	    res = res[path[i]];
	  }
	  if (typeof res == 'undefined') console.log('[VuePaginator] Response doesn\'t contain key ' + originalPath + '!');
	  return res;
	};
	
	var utils = exports.utils = { merge_objects: merge_objects, getNestedValue: getNestedValue };

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"v-paginator\">\n    <button class=\"btn btn-default\" @click=\"fetchData(prev_page_url)\" :disabled=\"!prev_page_url\">\n      {{config.previous_button_text}}\n    </button>\n    <span>Page {{current_page}} of {{last_page}}</span>\n    <button class=\"btn btn-default\" @click=\"fetchData(next_page_url)\" :disabled=\"!next_page_url\">\n      {{config.next_button_text}}\n    </button>\n  </div>";

/***/ })
/******/ ])
});
;
//# sourceMappingURL=vuejs-paginator.js.map

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(4), __webpack_require__(77), __webpack_require__(78));
	else if(typeof define === 'function' && define.amd)
		define("VueTrumbowyg", ["jquery", "trumbowyg", "trumbowyg/dist/ui/icons.svg"], factory);
	else if(typeof exports === 'object')
		exports["VueTrumbowyg"] = factory(require("jquery"), require("trumbowyg"), require("trumbowyg/dist/ui/icons.svg"));
	else
		root["VueTrumbowyg"] = factory(root["jquery"], root["trumbowyg"], root["trumbowyg/dist/ui/icons.svg"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trumbowygPlugin", function() { return trumbowygPlugin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_vue__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return __WEBPACK_IMPORTED_MODULE_0__component_vue__["a"]; });


var trumbowygPlugin = function trumbowygPlugin(Vue, params) {
  var name = 'trumbowyg';
  if (typeof params === 'string') name = params;

  Vue.component(name, __WEBPACK_IMPORTED_MODULE_0__component_vue__["a" /* default */]);
};

__WEBPACK_IMPORTED_MODULE_0__component_vue__["a" /* default */].install = trumbowygPlugin;

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__component_vue__["a" /* default */]);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_component_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aa7e5940_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_component_vue__ = __webpack_require__(7);
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_component_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aa7e5940_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_component_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_trumbowyg__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_trumbowyg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_trumbowyg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_trumbowyg_dist_ui_icons_svg__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_trumbowyg_dist_ui_icons_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_trumbowyg_dist_ui_icons_svg__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//

var jQuery = window.jQuery || __webpack_require__(4);


// You have to import css yourself

// You have to configure webpack to load svg files


// https://alex-d.github.io/Trumbowyg/documentation/#events
var events = ['focus', 'blur', 'change', 'resize', 'paste', 'openfullscreen', 'closefullscreen', 'close'];

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'trumbowyg',
  props: {
    value: {
      default: null,
      required: true,
      validator: function validator(value) {
        return value === null || typeof value === 'string' || value instanceof String;
      }
    },
    // http://alex-d.github.io/Trumbowyg/documentation.html#basic-options
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    // https://alex-d.github.io/Trumbowyg/documentation/#svg-icons
    svgPath: {
      type: [String, Boolean],
      default: __WEBPACK_IMPORTED_MODULE_1_trumbowyg_dist_ui_icons_svg___default.a
    }
  },
  data: function data() {
    return {
      // jQuery DOM
      el: null
    };
  },
  mounted: function mounted() {
    // Return early if instance is already loaded
    if (this.el) return;

    // Store DOM
    this.el = jQuery(this.$el);

    // Init editor with config
    this.el.trumbowyg(_extends({ svgPath: this.svgPath }, this.config));
    // Set initial value
    this.el.trumbowyg('html', this.value);

    // Watch for further changes
    this.el.on('tbwchange', this.onChange);
    // Register events
    this.registerEvents();
  },
  beforeDestroy: function beforeDestroy() {
    // Free up memory
    if (this.el) {
      this.el.trumbowyg('destroy');
      this.el = null;
    }
  },

  watch: {
    /**
     * Listen to change from outside of component and update DOM
     *
     * @param newValue String
     */
    value: function value(newValue) {
      if (this.el) {
        // Prevent multiple input events
        if (newValue === this.el.trumbowyg('html')) return;
        // Set new value
        this.el.trumbowyg('html', newValue);
      }
    }
  },
  methods: {
    /**
     * Emit input event with current editor value
     * This will update v-model on parent component
     * This method gets called when value gets changed by editor itself
     *
     * @param event
     */
    onChange: function onChange(event) {
      this.$emit('input', event.target.value);
    },


    /**
     * Emit all available events
     */
    registerEvents: function registerEvents() {
      var _this = this;

      events.forEach(function (name) {
        _this.el.on('tbw' + name, function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this.$emit.apply(_this, ['tbw-' + name].concat(args));
        });
      });
    }
  }
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('textarea')}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(81)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!./trumbowyg.css", function() {
			var newContent = require("!!../../../css-loader/index.js!./trumbowyg.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueSelect=e():t.VueSelect=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.mixins=e.VueSelect=void 0;var o=n(83),i=r(o),a=n(42),s=r(a);e.default=i.default,e.VueSelect=i.default,e.mixins=s.default},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(10),o=n(33),i=n(25),a=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(4),o=n(14);t.exports=n(2)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(59),o=n(16);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(23)("wks"),o=n(15),i=n(1).Symbol,a="function"==typeof i,s=t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))};s.store=r},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(12);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(1),o=n(5),i=n(56),a=n(6),s="prototype",u=function(t,e,n){var l,c,f,p=t&u.F,d=t&u.G,h=t&u.S,b=t&u.P,v=t&u.B,g=t&u.W,y=d?o:o[e]||(o[e]={}),m=y[s],x=d?r:h?r[e]:(r[e]||{})[s];d&&(n=e);for(l in n)c=!p&&x&&void 0!==x[l],c&&l in y||(f=c?x[l]:n[l],y[l]=d&&"function"!=typeof x[l]?n[l]:v&&c?i(f,r):g&&x[l]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[s]=t[s],e}(f):b&&"function"==typeof f?i(Function.call,f):f,b&&((y.virtual||(y.virtual={}))[l]=f,t&u.R&&m&&!m[l]&&a(m,l,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(38),o=n(17);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(4).f,o=n(3),i=n(8)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(23)("keys"),o=n(15);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(1),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(12);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(1),o=n(5),i=n(19),a=n(27),s=n(4).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},function(t,e,n){e.f=n(8)},function(t,e){"use strict";t.exports={props:{loading:{type:Boolean,default:!1},onSearch:{type:Function,default:function(t,e){}}},data:function(){return{mutableLoading:!1}},watch:{search:function(){this.search.length>0&&(this.onSearch(this.search,this.toggleLoading),this.$emit("search",this.search,this.toggleLoading))},loading:function(t){this.mutableLoading=t}},methods:{toggleLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null==t?this.mutableLoading=!this.mutableLoading:this.mutableLoading=t}}}},function(t,e){"use strict";t.exports={watch:{typeAheadPointer:function(){this.maybeAdjustScroll()}},methods:{maybeAdjustScroll:function(){var t=this.pixelsToPointerTop(),e=this.pixelsToPointerBottom();return t<=this.viewport().top?this.scrollTo(t):e>=this.viewport().bottom?this.scrollTo(this.viewport().top+this.pointerHeight()):void 0},pixelsToPointerTop:function t(){var t=0;if(this.$refs.dropdownMenu)for(var e=0;e<this.typeAheadPointer;e++)t+=this.$refs.dropdownMenu.children[e].offsetHeight;return t},pixelsToPointerBottom:function(){return this.pixelsToPointerTop()+this.pointerHeight()},pointerHeight:function(){var t=!!this.$refs.dropdownMenu&&this.$refs.dropdownMenu.children[this.typeAheadPointer];return t?t.offsetHeight:0},viewport:function(){return{top:this.$refs.dropdownMenu?this.$refs.dropdownMenu.scrollTop:0,bottom:this.$refs.dropdownMenu?this.$refs.dropdownMenu.offsetHeight+this.$refs.dropdownMenu.scrollTop:0}},scrollTo:function(t){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.scrollTop=t:null}}}},function(t,e){"use strict";t.exports={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){this.typeAheadPointer=0}},methods:{typeAheadUp:function(){this.typeAheadPointer>0&&(this.typeAheadPointer--,this.maybeAdjustScroll&&this.maybeAdjustScroll())},typeAheadDown:function(){this.typeAheadPointer<this.filteredOptions.length-1&&(this.typeAheadPointer++,this.maybeAdjustScroll&&this.maybeAdjustScroll())},typeAheadSelect:function(){this.filteredOptions[this.typeAheadPointer]?this.select(this.filteredOptions[this.typeAheadPointer]):this.taggable&&this.search.length&&this.select(this.search),this.clearSearchOnSelect&&(this.search="")}}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(12),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(2)&&!n(9)(function(){return 7!=Object.defineProperty(n(32)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(19),o=n(11),i=n(39),a=n(6),s=n(3),u=n(18),l=n(61),c=n(21),f=n(67),p=n(8)("iterator"),d=!([].keys&&"next"in[].keys()),h="@@iterator",b="keys",v="values",g=function(){return this};t.exports=function(t,e,n,y,m,x,w){l(n,e,y);var S,O,_,j=function(t){if(!d&&t in M)return M[t];switch(t){case b:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},P=e+" Iterator",k=m==v,A=!1,M=t.prototype,L=M[p]||M[h]||m&&M[m],C=L||j(m),T=m?k?j("entries"):C:void 0,E="Array"==e?M.entries||L:L;if(E&&(_=f(E.call(new t)),_!==Object.prototype&&_.next&&(c(_,P,!0),r||s(_,p)||a(_,p,g))),k&&L&&L.name!==v&&(A=!0,C=function(){return L.call(this)}),r&&!w||!d&&!A&&M[p]||a(M,p,C),u[e]=C,u[P]=g,m)if(S={values:k?C:j(v),keys:x?C:j(b),entries:T},w)for(O in S)O in M||i(M,O,S[O]);else o(o.P+o.F*(d||A),e,S);return S}},function(t,e,n){var r=n(10),o=n(64),i=n(17),a=n(22)("IE_PROTO"),s=function(){},u="prototype",l=function(){var t,e=n(32)("iframe"),r=i.length,o="<",a=">";for(e.style.display="none",n(58).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+a+"document.F=Object"+o+"/script"+a),t.close(),l=t.F;r--;)delete l[u][i[r]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(s[u]=r(t),n=new s,s[u]=null,n[a]=t):n=l(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(38),o=n(17).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(3),o=n(7),i=n(55)(!1),a=n(22)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),u=0,l=[];for(n in s)n!=a&&r(s,n)&&l.push(n);for(;e.length>u;)r(s,n=e[u++])&&(~i(l,n)||l.push(n));return l}},function(t,e,n){t.exports=n(6)},function(t,e,n){var r=n(16);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(44),i=r(o),a=n(47),s=r(a),u=n(48),l=r(u),c=n(29),f=r(c),p=n(30),d=r(p),h=n(28),b=r(h);e.default={mixins:[f.default,d.default,b.default],props:{value:{default:null},options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},maxHeight:{type:String,default:"400px"},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},getOptionLabel:{type:Function,default:function(t){return"object"===("undefined"==typeof t?"undefined":(0,l.default)(t))&&this.label&&t[this.label]?t[this.label]:t}},onChange:{type:Function,default:function(t){this.$emit("input",t)}},taggable:{type:Boolean,default:!1},pushTags:{type:Boolean,default:!1},createOption:{type:Function,default:function(t){return"object"===(0,l.default)(this.mutableOptions[0])&&(t=(0,s.default)({},this.label,t)),this.$emit("option:created",t),t}},resetOnOptionsChange:{type:Boolean,default:!1},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"}},data:function(){return{search:"",open:!1,mutableValue:null,mutableOptions:[]}},watch:{value:function(t){this.mutableValue=t},mutableValue:function(t,e){this.multiple?this.onChange?this.onChange(t):null:this.onChange&&t!==e?this.onChange(t):null},options:function(t){this.mutableOptions=t},mutableOptions:function(){!this.taggable&&this.resetOnOptionsChange&&(this.mutableValue=this.multiple?[]:null)},multiple:function(t){this.mutableValue=t?[]:null}},created:function(){this.mutableValue=this.value,this.mutableOptions=this.options.slice(0),this.mutableLoading=this.loading,this.$on("option:created",this.maybePushTag)},methods:{select:function(t){this.isOptionSelected(t)?this.deselect(t):(this.taggable&&!this.optionExists(t)&&(t=this.createOption(t)),this.multiple&&!this.mutableValue?this.mutableValue=[t]:this.multiple?this.mutableValue.push(t):this.mutableValue=t),this.onAfterSelect(t)},deselect:function(t){var e=this;if(this.multiple){var n=-1;this.mutableValue.forEach(function(r){(r===t||"object"===("undefined"==typeof r?"undefined":(0,l.default)(r))&&r[e.label]===t[e.label])&&(n=r)});var r=this.mutableValue.indexOf(n);this.mutableValue.splice(r,1)}else this.mutableValue=null},onAfterSelect:function(t){this.closeOnSelect&&(this.open=!this.open,this.$refs.search.blur()),this.clearSearchOnSelect&&(this.search="")},toggleDropdown:function(t){t.target!==this.$refs.openIndicator&&t.target!==this.$refs.search&&t.target!==this.$refs.toggle&&t.target!==this.$el||(this.open?this.$refs.search.blur():this.disabled||(this.open=!0,this.$refs.search.focus()))},isOptionSelected:function(t){var e=this;if(this.multiple&&this.mutableValue){var n=!1;return this.mutableValue.forEach(function(r){"object"===("undefined"==typeof r?"undefined":(0,l.default)(r))&&r[e.label]===t[e.label]?n=!0:"object"===("undefined"==typeof r?"undefined":(0,l.default)(r))&&r[e.label]===t?n=!0:r===t&&(n=!0)}),n}return this.mutableValue===t},onEscape:function(){this.search.length?this.search="":this.$refs.search.blur()},onSearchBlur:function(){this.clearSearchOnBlur&&(this.search=""),this.open=!1,this.$emit("search:blur")},onSearchFocus:function(){this.open=!0,this.$emit("search:focus")},maybeDeleteValue:function(){if(!this.$refs.search.value.length&&this.mutableValue)return this.multiple?this.mutableValue.pop():this.mutableValue=null},optionExists:function(t){var e=this,n=!1;return this.mutableOptions.forEach(function(r){"object"===("undefined"==typeof r?"undefined":(0,l.default)(r))&&r[e.label]===t?n=!0:r===t&&(n=!0)}),n},maybePushTag:function(t){this.pushTags&&this.mutableOptions.push(t)}},computed:{dropdownClasses:function(){return{open:this.dropdownOpen,single:!this.multiple,searching:this.searching,searchable:this.searchable,unsearchable:!this.searchable,loading:this.mutableLoading,rtl:"rtl"===this.dir}},clearSearchOnBlur:function(){return this.clearSearchOnSelect&&!this.multiple},searching:function(){return!!this.search},dropdownOpen:function(){return!this.noDrop&&(this.open&&!this.mutableLoading)},searchPlaceholder:function(){if(this.isValueEmpty&&this.placeholder)return this.placeholder},filteredOptions:function(){var t=this,e=this.mutableOptions.filter(function(e){return"object"===("undefined"==typeof e?"undefined":(0,l.default)(e))&&e.hasOwnProperty(t.label)?e[t.label].toLowerCase().indexOf(t.search.toLowerCase())>-1:"object"!==("undefined"==typeof e?"undefined":(0,l.default)(e))||e.hasOwnProperty(t.label)?e.toLowerCase().indexOf(t.search.toLowerCase())>-1:console.warn('[vue-select warn]: Label key "option.'+t.label+'" does not exist in options object.\nhttp://sagalbot.github.io/vue-select/#ex-labels')});return this.taggable&&this.search.length&&!this.optionExists(this.search)&&e.unshift(this.search),e},isValueEmpty:function(){return!this.mutableValue||("object"===(0,l.default)(this.mutableValue)?!(0,i.default)(this.mutableValue).length:!this.mutableValue.length)},valueAsArray:function(){return this.multiple?this.mutableValue:this.mutableValue?[this.mutableValue]:[]}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(28),i=r(o),a=n(30),s=r(a),u=n(29),l=r(u);e.default={ajax:i.default,pointer:s.default,pointerScroll:l.default}},function(t,e,n){t.exports={default:n(49),__esModule:!0}},function(t,e,n){t.exports={default:n(50),__esModule:!0}},function(t,e,n){t.exports={default:n(51),__esModule:!0}},function(t,e,n){t.exports={default:n(52),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(43),i=r(o);e.default=function(t,e,n){return e in t?(0,i.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(46),i=r(o),a=n(45),s=r(a),u="function"==typeof s.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":typeof t};e.default="function"==typeof s.default&&"symbol"===u(i.default)?function(t){return"undefined"==typeof t?"undefined":u(t)}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":"undefined"==typeof t?"undefined":u(t)}},function(t,e,n){n(73);var r=n(5).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){n(74),t.exports=n(5).Object.keys},function(t,e,n){n(77),n(75),n(78),n(79),t.exports=n(5).Symbol},function(t,e,n){n(76),n(80),t.exports=n(27).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(7),o=n(71),i=n(70);t.exports=function(t){return function(e,n,a){var s,u=r(e),l=o(u.length),c=i(a,l);if(t&&n!=n){for(;l>c;)if(s=u[c++],s!=s)return!0}else for(;l>c;c++)if((t||c in u)&&u[c]===n)return t||c||0;return!t&&-1}}},function(t,e,n){var r=n(53);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(13),o=n(37),i=n(20);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var a,s=n(t),u=i.f,l=0;s.length>l;)u.call(t,a=s[l++])&&e.push(a);return e}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(31);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(31);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(35),o=n(14),i=n(21),a={};n(6)(a,n(8)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(15)("meta"),o=n(12),i=n(3),a=n(4).f,s=0,u=Object.isExtensible||function(){return!0},l=!n(9)(function(){return u(Object.preventExtensions({}))}),c=function(t){a(t,r,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!u(t))return"F";if(!e)return"E";c(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!u(t))return!0;if(!e)return!1;c(t)}return t[r].w},d=function(t){return l&&h.NEED&&u(t)&&!i(t,r)&&c(t),t},h=t.exports={KEY:r,NEED:!1,fastKey:f,getWeak:p,onFreeze:d}},function(t,e,n){var r=n(4),o=n(10),i=n(13);t.exports=n(2)?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),s=a.length,u=0;s>u;)r.f(t,n=a[u++],e[n]);return t}},function(t,e,n){var r=n(20),o=n(14),i=n(7),a=n(25),s=n(3),u=n(33),l=Object.getOwnPropertyDescriptor;e.f=n(2)?l:function(t,e){if(t=i(t),e=a(e,!0),u)try{return l(t,e)}catch(t){}if(s(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(7),o=n(36).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(t){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?s(t):o(r(t))}},function(t,e,n){var r=n(3),o=n(40),i=n(22)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var r=n(11),o=n(5),i=n(9);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},function(t,e,n){var r=n(24),o=n(16);t.exports=function(t){return function(e,n){var i,a,s=String(o(e)),u=r(n),l=s.length;return u<0||u>=l?t?"":void 0:(i=s.charCodeAt(u),i<55296||i>56319||u+1===l||(a=s.charCodeAt(u+1))<56320||a>57343?t?s.charAt(u):i:t?s.slice(u,u+2):(i-55296<<10)+(a-56320)+65536)}}},function(t,e,n){var r=n(24),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(24),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){"use strict";var r=n(54),o=n(62),i=n(18),a=n(7);t.exports=n(34)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(11);r(r.S+r.F*!n(2),"Object",{defineProperty:n(4).f})},function(t,e,n){var r=n(40),o=n(13);n(68)("keys",function(){return function(t){return o(r(t))}})},function(t,e){},function(t,e,n){"use strict";var r=n(69)(!0);n(34)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(1),o=n(3),i=n(2),a=n(11),s=n(39),u=n(63).KEY,l=n(9),c=n(23),f=n(21),p=n(15),d=n(8),h=n(27),b=n(26),v=n(57),g=n(60),y=n(10),m=n(7),x=n(25),w=n(14),S=n(35),O=n(66),_=n(65),j=n(4),P=n(13),k=_.f,A=j.f,M=O.f,L=r.Symbol,C=r.JSON,T=C&&C.stringify,E="prototype",V=d("_hidden"),F=d("toPrimitive"),$={}.propertyIsEnumerable,B=c("symbol-registry"),N=c("symbols"),D=c("op-symbols"),I=Object[E],R="function"==typeof L,z=r.QObject,H=!z||!z[E]||!z[E].findChild,G=i&&l(function(){return 7!=S(A({},"a",{get:function(){return A(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=k(I,e);r&&delete I[e],A(t,e,n),r&&t!==I&&A(I,e,r)}:A,U=function(t){var e=N[t]=S(L[E]);return e._k=t,e},W=R&&"symbol"==typeof L.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof L},J=function(t,e,n){return t===I&&J(D,e,n),y(t),e=x(e,!0),y(n),o(N,e)?(n.enumerable?(o(t,V)&&t[V][e]&&(t[V][e]=!1),n=S(n,{enumerable:w(0,!1)})):(o(t,V)||A(t,V,w(1,{})),t[V][e]=!0),G(t,e,n)):A(t,e,n)},K=function(t,e){y(t);for(var n,r=v(e=m(e)),o=0,i=r.length;i>o;)J(t,n=r[o++],e[n]);return t},Y=function(t,e){return void 0===e?S(t):K(S(t),e)},q=function(t){var e=$.call(this,t=x(t,!0));return!(this===I&&o(N,t)&&!o(D,t))&&(!(e||!o(this,t)||!o(N,t)||o(this,V)&&this[V][t])||e)},Q=function(t,e){if(t=m(t),e=x(e,!0),t!==I||!o(N,e)||o(D,e)){var n=k(t,e);return!n||!o(N,e)||o(t,V)&&t[V][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=M(m(t)),r=[],i=0;n.length>i;)o(N,e=n[i++])||e==V||e==u||r.push(e);return r},X=function(t){for(var e,n=t===I,r=M(n?D:m(t)),i=[],a=0;r.length>a;)!o(N,e=r[a++])||n&&!o(I,e)||i.push(N[e]);return i};R||(L=function(){if(this instanceof L)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===I&&e.call(D,n),o(this,V)&&o(this[V],t)&&(this[V][t]=!1),G(this,t,w(1,n))};return i&&H&&G(I,t,{configurable:!0,set:e}),U(t)},s(L[E],"toString",function(){return this._k}),_.f=Q,j.f=J,n(36).f=O.f=Z,n(20).f=q,n(37).f=X,i&&!n(19)&&s(I,"propertyIsEnumerable",q,!0),h.f=function(t){return U(d(t))}),a(a.G+a.W+a.F*!R,{Symbol:L});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)d(tt[et++]);for(var nt=P(d.store),rt=0;nt.length>rt;)b(nt[rt++]);a(a.S+a.F*!R,"Symbol",{for:function(t){return o(B,t+="")?B[t]:B[t]=L(t)},keyFor:function(t){if(!W(t))throw TypeError(t+" is not a symbol!");for(var e in B)if(B[e]===t)return e},useSetter:function(){H=!0},useSimple:function(){H=!1}}),a(a.S+a.F*!R,"Object",{create:Y,defineProperty:J,defineProperties:K,getOwnPropertyDescriptor:Q,getOwnPropertyNames:Z,getOwnPropertySymbols:X}),C&&a(a.S+a.F*(!R||l(function(){var t=L();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!W(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&g(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!W(e))return e}),r[1]=e,T.apply(C,r)}}}),L[E][F]||n(6)(L[E],F,L[E].valueOf),f(L,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},function(t,e,n){n(26)("asyncIterator")},function(t,e,n){n(26)("observable")},function(t,e,n){n(72);for(var r=n(1),o=n(6),i=n(18),a=n(8)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<s.length;u++){var l=s[u],c=r[l],f=c&&c.prototype;f&&!f[a]&&o(f,a,l),i[l]=i.Array}},function(t,e,n){e=t.exports=n(82)(),e.push([t.id,'.v-select{position:relative;font-family:sans-serif}.v-select .disabled{cursor:not-allowed!important;background-color:#f8f8f8!important}.v-select,.v-select *{box-sizing:border-box}.v-select.rtl .open-indicator{left:10px;right:auto}.v-select.rtl .selected-tag{float:right;margin-right:3px;margin-left:1px}.v-select.rtl .dropdown-menu{text-align:right}.v-select .open-indicator{position:absolute;bottom:6px;right:10px;cursor:pointer;pointer-events:all;opacity:1;height:20px}.v-select .open-indicator,.v-select .open-indicator:before{display:inline-block;transition:all .15s cubic-bezier(1,-.115,.975,.855);transition-timing-function:cubic-bezier(1,-.115,.975,.855);width:10px}.v-select .open-indicator:before{border-color:rgba(60,60,60,.5);border-style:solid;border-width:3px 3px 0 0;content:"";height:10px;vertical-align:top;transform:rotate(133deg);box-sizing:inherit}.v-select.open .open-indicator:before{transform:rotate(315deg)}.v-select.loading .open-indicator{opacity:0}.v-select.open .open-indicator{bottom:1px}.v-select .dropdown-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;padding:0;background:none;border:1px solid rgba(60,60,60,.26);border-radius:4px;white-space:normal}.v-select .dropdown-toggle:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}.v-select.searchable .dropdown-toggle{cursor:text}.v-select.unsearchable .dropdown-toggle{cursor:pointer}.v-select.open .dropdown-toggle{border-bottom-color:transparent;border-bottom-left-radius:0;border-bottom-right-radius:0}.v-select .dropdown-menu{display:block;position:absolute;top:100%;left:0;z-index:1000;min-width:160px;padding:5px 0;margin:0;width:100%;overflow-y:scroll;border:1px solid rgba(0,0,0,.26);box-shadow:0 3px 6px 0 rgba(0,0,0,.15);border-top:none;border-radius:0 0 4px 4px;text-align:left;list-style:none;background:#fff}.v-select .no-options{text-align:center}.v-select .selected-tag{color:#333;background-color:#f0f0f0;border:1px solid #ccc;border-radius:4px;height:26px;margin:4px 1px 0 3px;padding:1px .25em;float:left;line-height:24px}.v-select.single .selected-tag{background-color:transparent;border-color:transparent}.v-select.single.open .selected-tag{position:absolute;opacity:.5}.v-select.single.loading .selected-tag,.v-select.single.open.searching .selected-tag{display:none}.v-select .selected-tag .close{float:none;margin-right:0;font-size:20px;appearance:none;padding:0;cursor:pointer;background:0 0;border:0;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}.v-select.single.searching:not(.open):not(.loading) input[type=search]{opacity:.2}.v-select input[type=search]::-webkit-search-cancel-button,.v-select input[type=search]::-webkit-search-decoration,.v-select input[type=search]::-webkit-search-results-button,.v-select input[type=search]::-webkit-search-results-decoration{display:none}.v-select input[type=search]::-ms-clear{display:none}.v-select input[type=search],.v-select input[type=search]:focus{appearance:none;-webkit-appearance:none;-moz-appearance:none;line-height:1.42857143;font-size:1em;height:34px;display:inline-block;border:none;outline:none;margin:0;padding:0 .5em;width:10em;max-width:100%;background:none;position:relative;box-shadow:none;float:left;clear:none}.v-select li{line-height:1.42857143}.v-select li>a{display:block;padding:3px 20px;clear:both;color:#333;white-space:nowrap}.v-select li:hover{cursor:pointer}.v-select .dropdown-menu .active>a{color:#333;background:rgba(50,50,50,.1)}.v-select .dropdown-menu>.highlight>a{background:#5897fb;color:#fff}.v-select .highlight:not(:last-child){margin-bottom:0}.v-select .spinner{opacity:0;position:absolute;top:5px;right:10px;font-size:5px;text-indent:-9999em;overflow:hidden;border-top:.9em solid hsla(0,0%,39%,.1);border-right:.9em solid hsla(0,0%,39%,.1);border-bottom:.9em solid hsla(0,0%,39%,.1);border-left:.9em solid rgba(60,60,60,.45);transform:translateZ(0);animation:vSelectSpinner 1.1s infinite linear;transition:opacity .1s}.v-select .spinner,.v-select .spinner:after{border-radius:50%;width:5em;height:5em}.v-select.loading .spinner{opacity:1}@-webkit-keyframes vSelectSpinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes vSelectSpinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.fade-enter-active,.fade-leave-active{transition:opacity .15s cubic-bezier(1,.5,.8,1)}.fade-enter,.fade-leave-to{opacity:0}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e,n){n(87);var r=n(84)(n(41),n(85),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,i=t.default);var s="function"==typeof i?i.options:i;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),r){var u=s.computed||(s.computed={});Object.keys(r).forEach(function(t){var e=r[t];u[t]=function(){return e}})}return{esModule:o,exports:i,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown v-select",class:t.dropdownClasses,attrs:{dir:t.dir}},[n("div",{ref:"toggle",class:["dropdown-toggle","clearfix",{disabled:t.disabled}],on:{mousedown:function(e){e.preventDefault(),t.toggleDropdown(e)}}},[t._l(t.valueAsArray,function(e){return n("span",{key:e.index,staticClass:"selected-tag"},[t._t("selected-option",[t._v("\n        "+t._s(t.getOptionLabel(e))+"\n      ")],null,e),t._v(" "),t.multiple?n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Remove option"},on:{click:function(n){t.deselect(e)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e()],2)}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"search",class:[{disabled:t.disabled},"form-control"],style:{width:t.isValueEmpty?"100%":"auto"},attrs:{type:"search",placeholder:t.searchPlaceholder,readonly:!t.searchable,id:t.inputId,"aria-label":"Search for option"},domProps:{value:t.search},on:{keydown:[function(e){return"button"in e||!t._k(e.keyCode,"delete",[8,46])?void t.maybeDeleteValue(e):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38)?(e.preventDefault(),void t.typeAheadUp(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40)?(e.preventDefault(),void t.typeAheadDown(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?(e.preventDefault(),void t.typeAheadSelect(e)):null}],keyup:function(e){return"button"in e||!t._k(e.keyCode,"esc",27)?void t.onEscape(e):null},blur:t.onSearchBlur,focus:t.onSearchFocus,input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),t.noDrop?t._e():n("i",{ref:"openIndicator",class:[{disabled:t.disabled},"open-indicator"],attrs:{role:"presentation"}}),t._v(" "),t._t("spinner",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.mutableLoading,expression:"mutableLoading"}],staticClass:"spinner"},[t._v("Loading...")])])],2),t._v(" "),n("transition",{attrs:{name:t.transition}},[t.dropdownOpen?n("ul",{ref:"dropdownMenu",staticClass:"dropdown-menu",style:{"max-height":t.maxHeight}},[t._l(t.filteredOptions,function(e,r){return n("li",{key:r,class:{active:t.isOptionSelected(e),highlight:r===t.typeAheadPointer},on:{mouseover:function(e){t.typeAheadPointer=r}}},[n("a",{on:{mousedown:function(n){n.preventDefault(),t.select(e)}}},[t._t("option",[t._v("\n          "+t._s(t.getOptionLabel(e))+"\n        ")],null,e)],2)])}),t._v(" "),t.filteredOptions.length?t._e():n("li",{
staticClass:"no-options"},[t._t("no-options",[t._v("Sorry, no matching options.")])],2)],2):t._e()])],1)},staticRenderFns:[]}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=f[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],e));f[r.id]={id:r.id,refs:1,parts:a}}}}function o(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],a=o[1],s=o[2],u=o[3],l={css:a,media:s,sourceMap:u};n[i]?n[i].parts.push(l):e.push(n[i]={id:i,parts:[l]})}return e}function i(t,e){var n=h(),r=g[g.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function u(t,e){var n,r,o;if(e.singleton){var i=v++;n=b||(b=s(e)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else n=s(e),r=c.bind(null,n),o=function(){a(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function l(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function c(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var f={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},d=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=p(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,v=0,g=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=d()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=o(t);return r(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],u=f[s.id];u.refs--,i.push(u)}if(t){var l=o(t);r(l,e)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete f[u.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var r=n(81);"string"==typeof r&&(r=[[t.id,r,""]]);n(86)(r,{});r.locals&&(t.exports=r.locals)}])});
//# sourceMappingURL=vue-select.js.map

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuejs_paginator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuejs_paginator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuejs_paginator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_posts_postsTable__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_posts_postsTable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_posts_postsTable__);
__webpack_require__(3);



window.toastr = __webpack_require__(24);



window.eventBus = new Vue();

var managePosts = new Vue({
  el: '#managePosts',
  data: {
    current_view: '',
    posts: [],
    tags: [],
    resource_url: window.location.pathname,
    options: {
      remote_data: 'posts.data',
      remote_current_page: 'posts.current_page',
      remote_last_page: 'posts.last_page',
      remote_next_page_url: 'posts.next_page_url',
      remote_prev_page_url: 'posts.prev_page_url',
      next_button_text: 'التالى',
      previous_button_text: 'السابق'
    }
  },
  methods: {
    updateResource: function updateResource(data) {
      this.posts = data;
    },
    fetchData: function fetchData() {
      var _this = this;

      axios.get(this.resource_url).then(function (response) {
        return _this.assignData(response);
      });
    },
    refetchData: function refetchData() {
      if (this.current_page == '') {
        this.resource_url = window.location.pathname;
        this.fetchData();
      } else {
        this.resource_url = window.location.pathname + '/' + this.current_view;
        this.fetchData();
      }
    },
    assignData: function assignData(response) {
      this.posts = response.data.posts.data;
      this.tags = response.data.tags;
    },
    reloadData: function reloadData() {
      this.$refs.VP.fetchData(this.resource_url + '?page=' + this.$refs.VP.current_page);
    },
    afterPostAdded: function afterPostAdded(response) {
      $('.modal.in').modal('hide');
      toastr.success(response.message);
      this.reloadData();
    },
    afterPostDelete: function afterPostDelete(response) {
      toastr.warning(response.data.message);
      this.reloadData();
    },
    addPost: function addPost() {
      eventBus.$emit('addPost');
    }
  },
  components: {
    postsTable: __WEBPACK_IMPORTED_MODULE_1__components_posts_postsTable___default.a,
    VPaginator: __WEBPACK_IMPORTED_MODULE_0_vuejs_paginator___default.a
  },
  mounted: function mounted() {
    var _this2 = this;

    this.fetchData();

    eventBus.$on('postAdded', function (response) {
      return _this2.afterPostAdded(response);
    });
    eventBus.$on('postDeleted', function (response) {
      return _this2.afterPostDelete(response);
    });
  }
});

toastr.options = {
  "positionClass": "toast-bottom-right"
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(74)
/* template */
var __vue_template__ = __webpack_require__(90)
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\admin\\components\\posts\\postsTable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b2b6d24", Component.options)
  } else {
    hotAPI.reload("data-v-7b2b6d24", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addPost__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addPost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__addPost__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addPostTranslation__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addPostTranslation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__addPostTranslation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editPost__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editPost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__editPost__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['posts', 'locales', 'type', 'tags'],
    methods: {
        localeCheck: function localeCheck(key, post) {
            var trans = post.translations;
            for (var i = 0; i < trans.length; i++) {
                if (trans[i].locale == key) {
                    return true;
                }
            }
        },
        addTranslation: function addTranslation(post, key) {
            eventBus.$emit('addPostTranslation', post, key);
        },
        editPost: function editPost(post, translation) {
            eventBus.$emit('editPost', post, translation);
        },
        deleteTranslation: function deleteTranslation(translation) {
            if (confirm('هل انت متأكد من حذف هذه الترجمة؟')) {
                axios.delete('/admincp/posttranslation/' + translation.id).then(function (response) {
                    return eventBus.$emit('postDeleted', response);
                });
            }
        },
        deletePost: function deletePost(post) {
            if (confirm('هل انت متأكد من حذف هذا المنشور؟')) {
                axios.delete('/admincp/posts/' + post.id).then(function (response) {
                    return eventBus.$emit('postDeleted', response);
                });
            }
        }
    },
    components: {
        addPost: __WEBPACK_IMPORTED_MODULE_0__addPost___default.a,
        addPostTranslation: __WEBPACK_IMPORTED_MODULE_1__addPostTranslation___default.a,
        editPost: __WEBPACK_IMPORTED_MODULE_2__editPost___default.a
    }
});

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(76)
/* template */
var __vue_template__ = __webpack_require__(83)
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\admin\\components\\posts\\addPost.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-212f9784", Component.options)
  } else {
    hotAPI.reload("data-v-212f9784", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_trumbowyg__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_trumbowyg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_trumbowyg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_trumbowyg_dist_ui_trumbowyg_css__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_trumbowyg_dist_ui_trumbowyg_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_trumbowyg_dist_ui_trumbowyg_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_select__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_select__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['locales', 'type', 'tags'],
    data: function data() {
        return {
            addPostForm: new Form({
                type: this.$props.type,
                locale: '',
                title: '',
                content: '',
                published: 1,
                tags: []
            })
        };
    },

    methods: {
        onPostCreate: function onPostCreate() {
            this.addPostForm.post('/admincp/posts').then(function (response) {
                return eventBus.$emit('postAdded', response);
            });
        },
        addPostModal: function addPostModal() {
            this.addPostForm.type = this.$props.type;
            this.addPostForm.published = 1;
            $('#addPostForm').modal('show');
        }
    },
    components: {
        trumbowyg: __WEBPACK_IMPORTED_MODULE_0_vue_trumbowyg___default.a,
        vSelect: __WEBPACK_IMPORTED_MODULE_2_vue_select___default.a
    },
    mounted: function mounted() {
        var _this = this;

        eventBus.$on('addPost', function (event) {
            return _this.addPostModal();
        });
    }
});

/***/ }),
/* 77 */
/***/ (function(module, exports) {

/**
 * Trumbowyg v2.8.1 - A lightweight WYSIWYG editor
 * Trumbowyg core file
 * ------------------------
 * @link http://alex-d.github.io/Trumbowyg
 * @license MIT
 * @author Alexandre Demode (Alex-D)
 *         Twitter : @AlexandreDemode
 *         Website : alex-d.fr
 */

jQuery.trumbowyg = {
    langs: {
        en: {
            viewHTML: 'View HTML',

            undo: 'Undo',
            redo: 'Redo',

            formatting: 'Formatting',
            p: 'Paragraph',
            blockquote: 'Quote',
            code: 'Code',
            header: 'Header',

            bold: 'Bold',
            italic: 'Italic',
            strikethrough: 'Stroke',
            underline: 'Underline',

            strong: 'Strong',
            em: 'Emphasis',
            del: 'Deleted',

            superscript: 'Superscript',
            subscript: 'Subscript',

            unorderedList: 'Unordered list',
            orderedList: 'Ordered list',

            insertImage: 'Insert Image',
            link: 'Link',
            createLink: 'Insert link',
            unlink: 'Remove link',

            justifyLeft: 'Align Left',
            justifyCenter: 'Align Center',
            justifyRight: 'Align Right',
            justifyFull: 'Align Justify',

            horizontalRule: 'Insert horizontal rule',
            removeformat: 'Remove format',

            fullscreen: 'Fullscreen',

            close: 'Close',

            submit: 'Confirm',
            reset: 'Cancel',

            required: 'Required',
            description: 'Description',
            title: 'Title',
            text: 'Text',
            target: 'Target'
        }
    },

    // Plugins
    plugins: {},

    // SVG Path globally
    svgPath: null,

    hideButtonTexts: null
};

// Makes default options read-only
Object.defineProperty(jQuery.trumbowyg, 'defaultOptions', {
    value: {
        lang: 'en',

        fixedBtnPane: false,
        fixedFullWidth: false,
        autogrow: false,
        autogrowOnEnter: false,

        prefix: 'trumbowyg-',

        semantic: true,
        resetCss: false,
        removeformatPasted: false,
        tagsToRemove: [],
        btns: [
            ['viewHTML'],
            ['undo', 'redo'], // Only supported in Blink browsers
            ['formatting'],
            ['strong', 'em', 'del'],
            ['superscript', 'subscript'],
            ['link'],
            ['insertImage'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
            ['unorderedList', 'orderedList'],
            ['horizontalRule'],
            ['removeformat'],
            ['fullscreen']
        ],
        // For custom button definitions
        btnsDef: {},

        inlineElementsSelector: 'a,abbr,acronym,b,caption,cite,code,col,dfn,dir,dt,dd,em,font,hr,i,kbd,li,q,span,strikeout,strong,sub,sup,u',

        pasteHandlers: [],

        // imgDblClickHandler: default is defined in constructor

        plugins: {}
    },
    writable: false,
    enumerable: true,
    configurable: false
});


(function (navigator, window, document, $) {
    'use strict';

    var CONFIRM_EVENT = 'tbwconfirm',
        CANCEL_EVENT = 'tbwcancel';

    $.fn.trumbowyg = function (options, params) {
        var trumbowygDataName = 'trumbowyg';
        if (options === Object(options) || !options) {
            return this.each(function () {
                if (!$(this).data(trumbowygDataName)) {
                    $(this).data(trumbowygDataName, new Trumbowyg(this, options));
                }
            });
        }
        if (this.length === 1) {
            try {
                var t = $(this).data(trumbowygDataName);
                switch (options) {
                    // Exec command
                    case 'execCmd':
                        return t.execCmd(params.cmd, params.param, params.forceCss);

                    // Modal box
                    case 'openModal':
                        return t.openModal(params.title, params.content);
                    case 'closeModal':
                        return t.closeModal();
                    case 'openModalInsert':
                        return t.openModalInsert(params.title, params.fields, params.callback);

                    // Range
                    case 'saveRange':
                        return t.saveRange();
                    case 'getRange':
                        return t.range;
                    case 'getRangeText':
                        return t.getRangeText();
                    case 'restoreRange':
                        return t.restoreRange();

                    // Enable/disable
                    case 'enable':
                        return t.setDisabled(false);
                    case 'disable':
                        return t.setDisabled(true);

                    // Destroy
                    case 'destroy':
                        return t.destroy();

                    // Empty
                    case 'empty':
                        return t.empty();

                    // HTML
                    case 'html':
                        return t.html(params);
                }
            } catch (c) {
            }
        }

        return false;
    };

    // @param: editorElem is the DOM element
    var Trumbowyg = function (editorElem, options) {
        var t = this,
            trumbowygIconsId = 'trumbowyg-icons',
            $trumbowyg = $.trumbowyg;

        // Get the document of the element. It use to makes the plugin
        // compatible on iframes.
        t.doc = editorElem.ownerDocument || document;

        // jQuery object of the editor
        t.$ta = $(editorElem); // $ta : Textarea
        t.$c = $(editorElem); // $c : creator

        options = options || {};

        // Localization management
        if (options.lang != null || $trumbowyg.langs[options.lang] != null) {
            t.lang = $.extend(true, {}, $trumbowyg.langs.en, $trumbowyg.langs[options.lang]);
        } else {
            t.lang = $trumbowyg.langs.en;
        }

        t.hideButtonTexts = $trumbowyg.hideButtonTexts != null ? $trumbowyg.hideButtonTexts : options.hideButtonTexts;

        // SVG path
        var svgPathOption = $trumbowyg.svgPath != null ? $trumbowyg.svgPath : options.svgPath;
        t.hasSvg = svgPathOption !== false;
        t.svgPath = !!t.doc.querySelector('base') ? window.location.href.split('#')[0] : '';
        if ($('#' + trumbowygIconsId, t.doc).length === 0 && svgPathOption !== false) {
            if (svgPathOption == null) {
                // Hack to get svgPathOption based on trumbowyg.js path
                try {
                    throw new Error();
                } catch (e) {
                    if (!e.hasOwnProperty('stack')) {
                        console.warn('You must define svgPath: https://goo.gl/CfTY9U'); // jshint ignore:line
                    } else {
                        var stackLines = e.stack.split('\n');

                        for (var i in stackLines) {
                            if (!stackLines[i].match(/https?:\/\//)) {
                                continue;
                            }
                            svgPathOption = stackLines[Number(i)].match(/((https?:\/\/.+\/)([^\/]+\.js))(\?.*)?:/)[1].split('/');
                            svgPathOption.pop();
                            svgPathOption = svgPathOption.join('/') + '/ui/icons.svg';
                            break;
                        }
                    }
                }
            }

            var div = t.doc.createElement('div');
            div.id = trumbowygIconsId;
            t.doc.body.insertBefore(div, t.doc.body.childNodes[0]);
            $.ajax({
                async: true,
                type: 'GET',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                dataType: 'xml',
                crossDomain: true,
                url: svgPathOption,
                data: null,
                beforeSend: null,
                complete: null,
                success: function (data) {
                    div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
                }
            });
        }


        /**
         * When the button is associated to a empty object
         * fn and title attributs are defined from the button key value
         *
         * For example
         *      foo: {}
         * is equivalent to :
         *      foo: {
         *          fn: 'foo',
         *          title: this.lang.foo
         *      }
         */
        var h = t.lang.header, // Header translation
            isBlinkFunction = function () {
                return (window.chrome || (window.Intl && Intl.v8BreakIterator)) && 'CSS' in window;
            };
        t.btnsDef = {
            viewHTML: {
                fn: 'toggle'
            },

            undo: {
                isSupported: isBlinkFunction,
                key: 'Z'
            },
            redo: {
                isSupported: isBlinkFunction,
                key: 'Y'
            },

            p: {
                fn: 'formatBlock'
            },
            blockquote: {
                fn: 'formatBlock'
            },
            h1: {
                fn: 'formatBlock',
                title: h + ' 1'
            },
            h2: {
                fn: 'formatBlock',
                title: h + ' 2'
            },
            h3: {
                fn: 'formatBlock',
                title: h + ' 3'
            },
            h4: {
                fn: 'formatBlock',
                title: h + ' 4'
            },
            subscript: {
                tag: 'sub'
            },
            superscript: {
                tag: 'sup'
            },

            bold: {
                key: 'B',
                tag: 'b'
            },
            italic: {
                key: 'I',
                tag: 'i'
            },
            underline: {
                tag: 'u'
            },
            strikethrough: {
                tag: 'strike'
            },

            strong: {
                fn: 'bold',
                key: 'B'
            },
            em: {
                fn: 'italic',
                key: 'I'
            },
            del: {
                fn: 'strikethrough'
            },

            createLink: {
                key: 'K',
                tag: 'a'
            },
            unlink: {},

            insertImage: {},

            justifyLeft: {
                tag: 'left',
                forceCss: true
            },
            justifyCenter: {
                tag: 'center',
                forceCss: true
            },
            justifyRight: {
                tag: 'right',
                forceCss: true
            },
            justifyFull: {
                tag: 'justify',
                forceCss: true
            },

            unorderedList: {
                fn: 'insertUnorderedList',
                tag: 'ul'
            },
            orderedList: {
                fn: 'insertOrderedList',
                tag: 'ol'
            },

            horizontalRule: {
                fn: 'insertHorizontalRule'
            },

            removeformat: {},

            fullscreen: {
                class: 'trumbowyg-not-disable'
            },
            close: {
                fn: 'destroy',
                class: 'trumbowyg-not-disable'
            },

            // Dropdowns
            formatting: {
                dropdown: ['p', 'blockquote', 'h1', 'h2', 'h3', 'h4'],
                ico: 'p'
            },
            link: {
                dropdown: ['createLink', 'unlink']
            }
        };

        // Defaults Options
        t.o = $.extend(true, {}, $trumbowyg.defaultOptions, options);
        if (!t.o.hasOwnProperty('imgDblClickHandler')) {
            t.o.imgDblClickHandler = t.getDefaultImgDblClickHandler();
        }

        t.disabled = t.o.disabled || (editorElem.nodeName === 'TEXTAREA' && editorElem.disabled);

        if (options.btns) {
            t.o.btns = options.btns;
        } else if (!t.o.semantic) {
            t.o.btns[3] = ['bold', 'italic', 'underline', 'strikethrough'];
        }

        $.each(t.o.btnsDef, function (btnName, btnDef) {
            t.addBtnDef(btnName, btnDef);
        });

        // put this here in the event it would be merged in with options
        t.eventNamespace = 'trumbowyg-event';

        // Keyboard shortcuts are load in this array
        t.keys = [];

        // Tag to button dynamically hydrated
        t.tagToButton = {};
        t.tagHandlers = [];

        // Admit multiple paste handlers
        t.pasteHandlers = [].concat(t.o.pasteHandlers);

        // Check if browser is IE
        t.isIE = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') !== -1);

        t.init();
    };

    Trumbowyg.prototype = {
        init: function () {
            var t = this;
            t.height = t.$ta.height();

            t.initPlugins();

            try {
                // Disable image resize, try-catch for old IE
                t.doc.execCommand('enableObjectResizing', false, false);
                t.doc.execCommand('defaultParagraphSeparator', false, 'p');
            } catch (e) {
            }

            t.buildEditor();
            t.buildBtnPane();

            t.fixedBtnPaneEvents();

            t.buildOverlay();

            setTimeout(function () {
                if (t.disabled) {
                    t.setDisabled(true);
                }
                t.$c.trigger('tbwinit');
            });
        },

        addBtnDef: function (btnName, btnDef) {
            this.btnsDef[btnName] = btnDef;
        },

        buildEditor: function () {
            var t = this,
                prefix = t.o.prefix,
                html = '';

            t.$box = $('<div/>', {
                class: prefix + 'box ' + prefix + 'editor-visible ' + prefix + t.o.lang + ' trumbowyg'
            });

            // $ta = Textarea
            // $ed = Editor
            t.isTextarea = t.$ta.is('textarea');
            if (t.isTextarea) {
                html = t.$ta.val();
                t.$ed = $('<div/>');
                t.$box
                    .insertAfter(t.$ta)
                    .append(t.$ed, t.$ta);
            } else {
                t.$ed = t.$ta;
                html = t.$ed.html();

                t.$ta = $('<textarea/>', {
                    name: t.$ta.attr('id'),
                    height: t.height
                }).val(html);

                t.$box
                    .insertAfter(t.$ed)
                    .append(t.$ta, t.$ed);
                t.syncCode();
            }

            t.$ta
                .addClass(prefix + 'textarea')
                .attr('tabindex', -1)
            ;

            t.$ed
                .addClass(prefix + 'editor')
                .attr({
                    contenteditable: true,
                    dir: t.lang._dir || 'ltr'
                })
                .html(html)
            ;

            if (t.o.tabindex) {
                t.$ed.attr('tabindex', t.o.tabindex);
            }

            if (t.$c.is('[placeholder]')) {
                t.$ed.attr('placeholder', t.$c.attr('placeholder'));
            }

            if (t.$c.is('[spellcheck]')) {
                t.$ed.attr('spellcheck', t.$c.attr('spellcheck'));
            }

            if (t.o.resetCss) {
                t.$ed.addClass(prefix + 'reset-css');
            }

            if (!t.o.autogrow) {
                t.$ta.add(t.$ed).css({
                    height: t.height
                });
            }

            t.semanticCode();

            if (t.o.autogrowOnEnter) {
                t.$ed.addClass(prefix + 'autogrow-on-enter');
            }

            var ctrl = false,
                composition = false,
                debounceButtonPaneStatus,
                updateEventName = t.isIE ? 'keyup' : 'input';

            t.$ed
                .on('dblclick', 'img', t.o.imgDblClickHandler)
                .on('keydown', function (e) {
                    if ((e.ctrlKey || e.metaKey) && !e.altKey) {
                        ctrl = true;
                        var key = t.keys[String.fromCharCode(e.which).toUpperCase()];

                        try {
                            t.execCmd(key.fn, key.param);
                            return false;
                        } catch (c) {
                        }
                    }
                })
                .on('compositionstart compositionupdate', function () {
                    composition = true;
                })
                .on(updateEventName + ' compositionend', function (e) {
                    if (e.type === 'compositionend') {
                        composition = false;
                    } else if (composition) {
                        return;
                    }

                    var keyCode = e.which;

                    if (keyCode >= 37 && keyCode <= 40) {
                        return;
                    }

                    if ((e.ctrlKey || e.metaKey) && (keyCode === 89 || keyCode === 90)) {
                        t.$c.trigger('tbwchange');
                    } else if (!ctrl && keyCode !== 17) {
                        t.semanticCode(false, e.type === 'compositionend' && keyCode === 13);
                        t.$c.trigger('tbwchange');
                    } else if (typeof e.which === 'undefined') {
                        t.semanticCode(false, false, true);
                    }

                    setTimeout(function () {
                        ctrl = false;
                    }, 200);
                })
                .on('mouseup keydown keyup', function () {
                    clearTimeout(debounceButtonPaneStatus);
                    debounceButtonPaneStatus = setTimeout(function () {
                        t.updateButtonPaneStatus();
                    }, 50);
                })
                .on('focus blur', function (e) {
                    t.$c.trigger('tbw' + e.type);
                    if (e.type === 'blur') {
                        $('.' + prefix + 'active-button', t.$btnPane).removeClass(prefix + 'active-button ' + prefix + 'active');
                    }
                    if (t.o.autogrowOnEnter) {
                        if (t.autogrowOnEnterDontClose) {
                            return;
                        }
                        if (e.type === 'focus') {
                            t.autogrowOnEnterWasFocused = true;
                            t.autogrowEditorOnEnter();
                        }
                        else if (!t.o.autogrow) {
                            t.$ed.css({height: t.$ed.css('min-height')});
                            t.$c.trigger('tbwresize');
                        }
                    }
                })
                .on('cut', function () {
                    setTimeout(function () {
                        t.semanticCode(false, true);
                        t.$c.trigger('tbwchange');
                    }, 0);
                })
                .on('paste', function (e) {
                    if (t.o.removeformatPasted) {
                        e.preventDefault();

                        if (window.getSelection && window.getSelection().deleteFromDocument) {
                            window.getSelection().deleteFromDocument();
                        }

                        try {
                            // IE
                            var text = window.clipboardData.getData('Text');

                            try {
                                // <= IE10
                                t.doc.selection.createRange().pasteHTML(text);
                            } catch (c) {
                                // IE 11
                                t.doc.getSelection().getRangeAt(0).insertNode(t.doc.createTextNode(text));
                            }
                            t.$c.trigger('tbwchange', e);
                        } catch (d) {
                            // Not IE
                            t.execCmd('insertText', (e.originalEvent || e).clipboardData.getData('text/plain'));
                        }
                    }

                    // Call pasteHandlers
                    $.each(t.pasteHandlers, function (i, pasteHandler) {
                        pasteHandler(e);
                    });

                    setTimeout(function () {
                        t.semanticCode(false, true);
                        t.$c.trigger('tbwpaste', e);
                    }, 0);
                });

            t.$ta
                .on('keyup', function () {
                    t.$c.trigger('tbwchange');
                })
                .on('paste', function () {
                    setTimeout(function () {
                        t.$c.trigger('tbwchange');
                    }, 0);
                });

            t.$box.on('keydown', function (e) {
                if (e.which === 27 && $('.' + prefix + 'modal-box', t.$box).length === 1) {
                    t.closeModal();
                    return false;
                }
            });
        },

        //autogrow when entering logic
        autogrowEditorOnEnter: function () {
            var t = this;
            t.$ed.removeClass('autogrow-on-enter');
            var oldHeight = t.$ed[0].clientHeight;
            t.$ed.height('auto');
            var totalHeight = t.$ed[0].scrollHeight;
            t.$ed.addClass('autogrow-on-enter');
            if (oldHeight !== totalHeight) {
                t.$ed.height(oldHeight);
                setTimeout(function () {
                    t.$ed.css({height: totalHeight});
                    t.$c.trigger('tbwresize');
                }, 0);
            }
        },


        // Build button pane, use o.btns option
        buildBtnPane: function () {
            var t = this,
                prefix = t.o.prefix;

            var $btnPane = t.$btnPane = $('<div/>', {
                class: prefix + 'button-pane'
            });

            $.each(t.o.btns, function (i, btnGrp) {
                if (!$.isArray(btnGrp)) {
                    btnGrp = [btnGrp];
                }

                var $btnGroup = $('<div/>', {
                    class: prefix + 'button-group ' + ((btnGrp.indexOf('fullscreen') >= 0) ? prefix + 'right' : '')
                });
                $.each(btnGrp, function (i, btn) {
                    try { // Prevent buildBtn error
                        if (t.isSupportedBtn(btn)) { // It's a supported button
                            $btnGroup.append(t.buildBtn(btn));
                        }
                    } catch (c) {
                    }
                });
                $btnPane.append($btnGroup);
            });

            t.$box.prepend($btnPane);
        },


        // Build a button and his action
        buildBtn: function (btnName) { // btnName is name of the button
            var t = this,
                prefix = t.o.prefix,
                btn = t.btnsDef[btnName],
                isDropdown = btn.dropdown,
                hasIcon = btn.hasIcon != null ? btn.hasIcon : true,
                textDef = t.lang[btnName] || btnName,

                $btn = $('<button/>', {
                    type: 'button',
                    class: prefix + btnName + '-button ' + (btn.class || '') + (!hasIcon ? ' ' + prefix + 'textual-button' : ''),
                    html: t.hasSvg && hasIcon ?
                        '<svg><use xlink:href="' + t.svgPath + '#' + prefix + (btn.ico || btnName).replace(/([A-Z]+)/g, '-$1').toLowerCase() + '"/></svg>' :
                        t.hideButtonTexts ? '' : (btn.text || btn.title || t.lang[btnName] || btnName),
                    title: (btn.title || btn.text || textDef) + ((btn.key) ? ' (Ctrl + ' + btn.key + ')' : ''),
                    tabindex: -1,
                    mousedown: function () {
                        if (!isDropdown || $('.' + btnName + '-' + prefix + 'dropdown', t.$box).is(':hidden')) {
                            $('body', t.doc).trigger('mousedown');
                        }

                        if (t.$btnPane.hasClass(prefix + 'disable') && !$(this).hasClass(prefix + 'active') && !$(this).hasClass(prefix + 'not-disable')) {
                            return false;
                        }

                        t.execCmd((isDropdown ? 'dropdown' : false) || btn.fn || btnName, btn.param || btnName, btn.forceCss);

                        return false;
                    }
                });

            if (isDropdown) {
                $btn.addClass(prefix + 'open-dropdown');
                var dropdownPrefix = prefix + 'dropdown',
                    $dropdown = $('<div/>', { // the dropdown
                        class: dropdownPrefix + '-' + btnName + ' ' + dropdownPrefix + ' ' + prefix + 'fixed-top',
                        'data-dropdown': btnName
                    });
                $.each(isDropdown, function (i, def) {
                    if (t.btnsDef[def] && t.isSupportedBtn(def)) {
                        $dropdown.append(t.buildSubBtn(def));
                    }
                });
                t.$box.append($dropdown.hide());
            } else if (btn.key) {
                t.keys[btn.key] = {
                    fn: btn.fn || btnName,
                    param: btn.param || btnName
                };
            }

            if (!isDropdown) {
                t.tagToButton[(btn.tag || btnName).toLowerCase()] = btnName;
            }

            return $btn;
        },
        // Build a button for dropdown menu
        // @param n : name of the subbutton
        buildSubBtn: function (btnName) {
            var t = this,
                prefix = t.o.prefix,
                btn = t.btnsDef[btnName],
                hasIcon = btn.hasIcon != null ? btn.hasIcon : true;

            if (btn.key) {
                t.keys[btn.key] = {
                    fn: btn.fn || btnName,
                    param: btn.param || btnName
                };
            }

            t.tagToButton[(btn.tag || btnName).toLowerCase()] = btnName;

            return $('<button/>', {
                type: 'button',
                class: prefix + btnName + '-dropdown-button' + (btn.ico ? ' ' + prefix + btn.ico + '-button' : ''),
                html: t.hasSvg && hasIcon ? '<svg><use xlink:href="' + t.svgPath + '#' + prefix + (btn.ico || btnName).replace(/([A-Z]+)/g, '-$1').toLowerCase() + '"/></svg>' + (btn.text || btn.title || t.lang[btnName] || btnName) : (btn.text || btn.title || t.lang[btnName] || btnName),
                title: ((btn.key) ? ' (Ctrl + ' + btn.key + ')' : null),
                style: btn.style || null,
                mousedown: function () {
                    $('body', t.doc).trigger('mousedown');

                    t.execCmd(btn.fn || btnName, btn.param || btnName, btn.forceCss);

                    return false;
                }
            });
        },
        // Check if button is supported
        isSupportedBtn: function (b) {
            try {
                return this.btnsDef[b].isSupported();
            } catch (c) {
            }
            return true;
        },

        // Build overlay for modal box
        buildOverlay: function () {
            var t = this;
            t.$overlay = $('<div/>', {
                class: t.o.prefix + 'overlay'
            }).appendTo(t.$box);
            return t.$overlay;
        },
        showOverlay: function () {
            var t = this;
            $(window).trigger('scroll');
            t.$overlay.fadeIn(200);
            t.$box.addClass(t.o.prefix + 'box-blur');
        },
        hideOverlay: function () {
            var t = this;
            t.$overlay.fadeOut(50);
            t.$box.removeClass(t.o.prefix + 'box-blur');
        },

        // Management of fixed button pane
        fixedBtnPaneEvents: function () {
            var t = this,
                fixedFullWidth = t.o.fixedFullWidth,
                $box = t.$box;

            if (!t.o.fixedBtnPane) {
                return;
            }

            t.isFixed = false;

            $(window)
                .on('scroll.' + t.eventNamespace + ' resize.' + t.eventNamespace, function () {
                    if (!$box) {
                        return;
                    }

                    t.syncCode();

                    var scrollTop = $(window).scrollTop(),
                        offset = $box.offset().top + 1,
                        bp = t.$btnPane,
                        oh = bp.outerHeight() - 2;

                    if ((scrollTop - offset > 0) && ((scrollTop - offset - t.height) < 0)) {
                        if (!t.isFixed) {
                            t.isFixed = true;
                            bp.css({
                                position: 'fixed',
                                top: 0,
                                left: fixedFullWidth ? '0' : 'auto',
                                zIndex: 7
                            });
                            $([t.$ta, t.$ed]).css({marginTop: bp.height()});
                        }
                        bp.css({
                            width: fixedFullWidth ? '100%' : (($box.width() - 1) + 'px')
                        });

                        $('.' + t.o.prefix + 'fixed-top', $box).css({
                            position: fixedFullWidth ? 'fixed' : 'absolute',
                            top: fixedFullWidth ? oh : oh + (scrollTop - offset) + 'px',
                            zIndex: 15
                        });
                    } else if (t.isFixed) {
                        t.isFixed = false;
                        bp.removeAttr('style');
                        $([t.$ta, t.$ed]).css({marginTop: 0});
                        $('.' + t.o.prefix + 'fixed-top', $box).css({
                            position: 'absolute',
                            top: oh
                        });
                    }
                });
        },

        // Disable editor
        setDisabled: function (disable) {
            var t = this,
                prefix = t.o.prefix;

            t.disabled = disable;

            if (disable) {
                t.$ta.attr('disabled', true);
            } else {
                t.$ta.removeAttr('disabled');
            }
            t.$box.toggleClass(prefix + 'disabled', disable);
            t.$ed.attr('contenteditable', !disable);
        },

        // Destroy the editor
        destroy: function () {
            var t = this,
                prefix = t.o.prefix;

            if (t.isTextarea) {
                t.$box.after(
                    t.$ta
                        .css({height: ''})
                        .val(t.html())
                        .removeClass(prefix + 'textarea')
                        .show()
                );
            } else {
                t.$box.after(
                    t.$ed
                        .css({height: ''})
                        .removeClass(prefix + 'editor')
                        .removeAttr('contenteditable')
                        .removeAttr('dir')
                        .html(t.html())
                        .show()
                );
            }

            t.$ed.off('dblclick', 'img');

            t.destroyPlugins();

            t.$box.remove();
            t.$c.removeData('trumbowyg');
            $('body').removeClass(prefix + 'body-fullscreen');
            t.$c.trigger('tbwclose');
            $(window).off('scroll.' + t.eventNamespace + ' resize.' + t.eventNamespace);
        },


        // Empty the editor
        empty: function () {
            this.$ta.val('');
            this.syncCode(true);
        },


        // Function call when click on viewHTML button
        toggle: function () {
            var t = this,
                prefix = t.o.prefix;

            if (t.o.autogrowOnEnter) {
                t.autogrowOnEnterDontClose = !t.$box.hasClass(prefix + 'editor-hidden');
            }

            t.semanticCode(false, true);

            setTimeout(function () {
                t.doc.activeElement.blur();
                t.$box.toggleClass(prefix + 'editor-hidden ' + prefix + 'editor-visible');
                t.$btnPane.toggleClass(prefix + 'disable');
                $('.' + prefix + 'viewHTML-button', t.$btnPane).toggleClass(prefix + 'active');
                if (t.$box.hasClass(prefix + 'editor-visible')) {
                    t.$ta.attr('tabindex', -1);
                } else {
                    t.$ta.removeAttr('tabindex');
                }

                if (t.o.autogrowOnEnter && !t.autogrowOnEnterDontClose) {
                    t.autogrowEditorOnEnter();
                }
            }, 0);
        },

        // Open dropdown when click on a button which open that
        dropdown: function (name) {
            var t = this,
                d = t.doc,
                prefix = t.o.prefix,
                $dropdown = $('[data-dropdown=' + name + ']', t.$box),
                $btn = $('.' + prefix + name + '-button', t.$btnPane),
                show = $dropdown.is(':hidden');

            $('body', d).trigger('mousedown');

            if (show) {
                var o = $btn.offset().left;
                $btn.addClass(prefix + 'active');

                $dropdown.css({
                    position: 'absolute',
                    top: $btn.offset().top - t.$btnPane.offset().top + $btn.outerHeight(),
                    left: (t.o.fixedFullWidth && t.isFixed) ? o + 'px' : (o - t.$btnPane.offset().left) + 'px'
                }).show();

                $(window).trigger('scroll');

                $('body', d).on('mousedown.' + t.eventNamespace, function (e) {
                    if (!$dropdown.is(e.target)) {
                        $('.' + prefix + 'dropdown', d).hide();
                        $('.' + prefix + 'active', d).removeClass(prefix + 'active');
                        $('body', d).off('mousedown.' + t.eventNamespace);
                    }
                });
            }
        },


        // HTML Code management
        html: function (html) {
            var t = this;
            if (html != null) {
                t.$ta.val(html);
                t.syncCode(true);
                return t;
            }
            return t.$ta.val();
        },
        syncTextarea: function () {
            var t = this;
            t.$ta.val(t.$ed.text().trim().length > 0 || t.$ed.find('hr,img,embed,iframe,input').length > 0 ? t.$ed.html() : '');
        },
        syncCode: function (force) {
            var t = this;
            if (!force && t.$ed.is(':visible')) {
                t.syncTextarea();
            } else {
                // wrap the content in a div it's easier to get the innerhtml
                var html = $('<div>').html(t.$ta.val());
                //scrub the html before loading into the doc
                var safe = $('<div>').append(html);
                $(t.o.tagsToRemove.join(','), safe).remove();
                t.$ed.html(safe.contents().html());
            }

            if (t.o.autogrow) {
                t.height = t.$ed.height();
                if (t.height !== t.$ta.css('height')) {
                    t.$ta.css({height: t.height});
                    t.$c.trigger('tbwresize');
                }
            }
            if (t.o.autogrowOnEnter) {
                // t.autogrowEditorOnEnter();
                t.$ed.height('auto');
                var totalheight = t.autogrowOnEnterWasFocused ? t.$ed[0].scrollHeight : t.$ed.css('min-height');
                if (totalheight !== t.$ta.css('height')) {
                    t.$ed.css({height: totalheight});
                    t.$c.trigger('tbwresize');
                }
            }
        },

        // Analyse and update to semantic code
        // @param force : force to sync code from textarea
        // @param full  : wrap text nodes in <p>
        // @param keepRange  : leave selection range as it is
        semanticCode: function (force, full, keepRange) {
            var t = this;
            t.saveRange();
            t.syncCode(force);

            if (t.o.semantic) {
                t.semanticTag('b', 'strong');
                t.semanticTag('i', 'em');
                t.semanticTag('strike', 'del');

                if (full) {
                    var inlineElementsSelector = t.o.inlineElementsSelector,
                        blockElementsSelector = ':not(' + inlineElementsSelector + ')';

                    // Wrap text nodes in span for easier processing
                    t.$ed.contents().filter(function () {
                        return this.nodeType === 3 && this.nodeValue.trim().length > 0;
                    }).wrap('<span data-tbw/>');

                    // Wrap groups of inline elements in paragraphs (recursive)
                    var wrapInlinesInParagraphsFrom = function ($from) {
                        if ($from.length !== 0) {
                            var $finalParagraph = $from.nextUntil(blockElementsSelector).addBack().wrapAll('<p/>').parent(),
                                $nextElement = $finalParagraph.nextAll(inlineElementsSelector).first();
                            $finalParagraph.next('br').remove();
                            wrapInlinesInParagraphsFrom($nextElement);
                        }
                    };
                    wrapInlinesInParagraphsFrom(t.$ed.children(inlineElementsSelector).first());

                    t.semanticTag('div', 'p', true);

                    // Unwrap paragraphs content, containing nothing usefull
                    t.$ed.find('p').filter(function () {
                        // Don't remove currently being edited element
                        if (t.range && this === t.range.startContainer) {
                            return false;
                        }
                        return $(this).text().trim().length === 0 && $(this).children().not('br,span').length === 0;
                    }).contents().unwrap();

                    // Get rid of temporial span's
                    $('[data-tbw]', t.$ed).contents().unwrap();

                    // Remove empty <p>
                    t.$ed.find('p:empty').remove();
                }

                if (!keepRange) {
                    t.restoreRange();
                }

                t.syncTextarea();
            }
        },

        semanticTag: function (oldTag, newTag, copyAttributes) {
            $(oldTag, this.$ed).each(function () {
                var $oldTag = $(this);
                $oldTag.wrap('<' + newTag + '/>');
                if (copyAttributes) {
                    $.each($oldTag.prop('attributes'), function () {
                        $oldTag.parent().attr(this.name, this.value);
                    });
                }
                $oldTag.contents().unwrap();
            });
        },

        // Function call when user click on "Insert Link"
        createLink: function () {
            var t = this,
                documentSelection = t.doc.getSelection(),
                node = documentSelection.focusNode,
                url,
                title,
                target;

            while (['A', 'DIV'].indexOf(node.nodeName) < 0) {
                node = node.parentNode;
            }

            if (node && node.nodeName === 'A') {
                var $a = $(node);
                url = $a.attr('href');
                title = $a.attr('title');
                target = $a.attr('target');
                var range = t.doc.createRange();
                range.selectNode(node);
                documentSelection.removeAllRanges();
                documentSelection.addRange(range);
            }

            t.saveRange();

            t.openModalInsert(t.lang.createLink, {
                url: {
                    label: 'URL',
                    required: true,
                    value: url
                },
                title: {
                    label: t.lang.title,
                    value: title
                },
                text: {
                    label: t.lang.text,
                    value: t.getRangeText()
                },
                target: {
                    label: t.lang.target,
                    value: target
                }
            }, function (v) { // v is value
                var link = $(['<a href="', v.url, '">', v.text, '</a>'].join(''));
                if (v.title.length > 0) {
                    link.attr('title', v.title);
                }
                if (v.target.length > 0) {
                    link.attr('target', v.target);
                }
                t.range.deleteContents();
                t.range.insertNode(link[0]);
                return true;
            });
        },
        unlink: function () {
            var t = this,
                documentSelection = t.doc.getSelection(),
                node = documentSelection.focusNode;

            if (documentSelection.isCollapsed) {
                while (['A', 'DIV'].indexOf(node.nodeName) < 0) {
                    node = node.parentNode;
                }

                if (node && node.nodeName === 'A') {
                    var range = t.doc.createRange();
                    range.selectNode(node);
                    documentSelection.removeAllRanges();
                    documentSelection.addRange(range);
                }
            }
            t.execCmd('unlink', undefined, undefined, true);
        },
        insertImage: function () {
            var t = this;
            t.saveRange();
            t.openModalInsert(t.lang.insertImage, {
                url: {
                    label: 'URL',
                    required: true
                },
                alt: {
                    label: t.lang.description,
                    value: t.getRangeText()
                }
            }, function (v) { // v are values
                t.execCmd('insertImage', v.url);
                $('img[src="' + v.url + '"]:not([alt])', t.$box).attr('alt', v.alt);
                return true;
            });
        },
        fullscreen: function () {
            var t = this,
                prefix = t.o.prefix,
                fullscreenCssClass = prefix + 'fullscreen',
                isFullscreen;

            t.$box.toggleClass(fullscreenCssClass);
            isFullscreen = t.$box.hasClass(fullscreenCssClass);
            $('body').toggleClass(prefix + 'body-fullscreen', isFullscreen);
            $(window).trigger('scroll');
            t.$c.trigger('tbw' + (isFullscreen ? 'open' : 'close') + 'fullscreen');
        },


        /*
         * Call method of trumbowyg if exist
         * else try to call anonymous function
         * and finaly native execCommand
         */
        execCmd: function (cmd, param, forceCss, skipTrumbowyg) {
            var t = this;
            skipTrumbowyg = !!skipTrumbowyg || '';

            if (cmd !== 'dropdown') {
                t.$ed.focus();
            }

            try {
                t.doc.execCommand('styleWithCSS', false, forceCss || false);
            } catch (c) {
            }

            try {
                t[cmd + skipTrumbowyg](param);
            } catch (c) {
                try {
                    cmd(param);
                } catch (e2) {
                    if (cmd === 'insertHorizontalRule') {
                        param = undefined;
                    } else if (cmd === 'formatBlock' && t.isIE) {
                        param = '<' + param + '>';
                    }

                    t.doc.execCommand(cmd, false, param);

                    t.syncCode();
                    t.semanticCode(false, true);
                }

                if (cmd !== 'dropdown') {
                    t.updateButtonPaneStatus();
                    t.$c.trigger('tbwchange');
                }
            }
        },


        // Open a modal box
        openModal: function (title, content) {
            var t = this,
                prefix = t.o.prefix;

            // No open a modal box when exist other modal box
            if ($('.' + prefix + 'modal-box', t.$box).length > 0) {
                return false;
            }
            if (t.o.autogrowOnEnter) {
                t.autogrowOnEnterDontClose = true;
            }

            t.saveRange();
            t.showOverlay();

            // Disable all btnPane btns
            t.$btnPane.addClass(prefix + 'disable');

            // Build out of ModalBox, it's the mask for animations
            var $modal = $('<div/>', {
                class: prefix + 'modal ' + prefix + 'fixed-top'
            }).css({
                top: t.$btnPane.height()
            }).appendTo(t.$box);

            // Click on overlay close modal by cancelling them
            t.$overlay.one('click', function () {
                $modal.trigger(CANCEL_EVENT);
                return false;
            });

            // Build the form
            var $form = $('<form/>', {
                action: '',
                html: content
            })
                .on('submit', function () {
                    $modal.trigger(CONFIRM_EVENT);
                    return false;
                })
                .on('reset', function () {
                    $modal.trigger(CANCEL_EVENT);
                    return false;
                })
                .on('submit reset', function () {
                    if (t.o.autogrowOnEnter) {
                        t.autogrowOnEnterDontClose = false;
                    }
                });


            // Build ModalBox and animate to show them
            var $box = $('<div/>', {
                class: prefix + 'modal-box',
                html: $form
            })
                .css({
                    top: '-' + t.$btnPane.outerHeight() + 'px',
                    opacity: 0
                })
                .appendTo($modal)
                .animate({
                    top: 0,
                    opacity: 1
                }, 100);


            // Append title
            $('<span/>', {
                text: title,
                class: prefix + 'modal-title'
            }).prependTo($box);

            $modal.height($box.outerHeight() + 10);


            // Focus in modal box
            $('input:first', $box).focus();


            // Append Confirm and Cancel buttons
            t.buildModalBtn('submit', $box);
            t.buildModalBtn('reset', $box);


            $(window).trigger('scroll');

            return $modal;
        },
        // @param n is name of modal
        buildModalBtn: function (n, $modal) {
            var t = this,
                prefix = t.o.prefix;

            return $('<button/>', {
                class: prefix + 'modal-button ' + prefix + 'modal-' + n,
                type: n,
                text: t.lang[n] || n
            }).appendTo($('form', $modal));
        },
        // close current modal box
        closeModal: function () {
            var t = this,
                prefix = t.o.prefix;

            t.$btnPane.removeClass(prefix + 'disable');
            t.$overlay.off();

            // Find the modal box
            var $modalBox = $('.' + prefix + 'modal-box', t.$box);

            $modalBox.animate({
                top: '-' + $modalBox.height()
            }, 100, function () {
                $modalBox.parent().remove();
                t.hideOverlay();
            });

            t.restoreRange();
        },
        // Preformated build and management modal
        openModalInsert: function (title, fields, cmd) {
            var t = this,
                prefix = t.o.prefix,
                lg = t.lang,
                html = '';

            $.each(fields, function (fieldName, field) {
                var l = field.label,
                    n = field.name || fieldName,
                    a = field.attributes || {};

                var attr = Object.keys(a).map(function (prop) {
                    return prop + '="' + a[prop] + '"';
                }).join(' ');

                html += '<label><input type="' + (field.type || 'text') + '" name="' + n + '" value="' + (field.value || '').replace(/"/g, '&quot;') + '"' + attr + '><span class="' + prefix + 'input-infos"><span>' +
                    ((!l) ? (lg[fieldName] ? lg[fieldName] : fieldName) : (lg[l] ? lg[l] : l)) +
                    '</span></span></label>';
            });

            return t.openModal(title, html)
                .on(CONFIRM_EVENT, function () {
                    var $form = $('form', $(this)),
                        valid = true,
                        values = {};

                    $.each(fields, function (fieldName, field) {
                        var $field = $('input[name="' + fieldName + '"]', $form),
                            inputType = $field.attr('type');

                        if (inputType.toLowerCase() === 'checkbox') {
                            values[fieldName] = $field.is(':checked');
                        } else {
                            values[fieldName] = $.trim($field.val());
                        }
                        // Validate value
                        if (field.required && values[fieldName] === '') {
                            valid = false;
                            t.addErrorOnModalField($field, t.lang.required);
                        } else if (field.pattern && !field.pattern.test(values[fieldName])) {
                            valid = false;
                            t.addErrorOnModalField($field, field.patternError);
                        }
                    });

                    if (valid) {
                        t.restoreRange();

                        if (cmd(values, fields)) {
                            t.syncCode();
                            t.$c.trigger('tbwchange');
                            t.closeModal();
                            $(this).off(CONFIRM_EVENT);
                        }
                    }
                })
                .one(CANCEL_EVENT, function () {
                    $(this).off(CONFIRM_EVENT);
                    t.closeModal();
                });
        },
        addErrorOnModalField: function ($field, err) {
            var prefix = this.o.prefix,
                $label = $field.parent();

            $field
                .on('change keyup', function () {
                    $label.removeClass(prefix + 'input-error');
                });

            $label
                .addClass(prefix + 'input-error')
                .find('input+span')
                .append(
                    $('<span/>', {
                        class: prefix + 'msg-error',
                        text: err
                    })
                );
        },

        getDefaultImgDblClickHandler: function () {
            var t = this;

            return function () {
                var $img = $(this),
                    src = $img.attr('src'),
                    base64 = '(Base64)';

                if (src.indexOf('data:image') === 0) {
                    src = base64;
                }

                t.openModalInsert(t.lang.insertImage, {
                    url: {
                        label: 'URL',
                        value: src,
                        required: true
                    },
                    alt: {
                        label: t.lang.description,
                        value: $img.attr('alt')
                    }
                }, function (v) {
                    if (v.src !== base64) {
                        $img.attr({
                            src: v.src
                        });
                    }
                    $img.attr({
                        alt: v.alt
                    });
                    return true;
                });
                return false;
            };
        },

        // Range management
        saveRange: function () {
            var t = this,
                documentSelection = t.doc.getSelection();

            t.range = null;

            if (documentSelection.rangeCount) {
                var savedRange = t.range = documentSelection.getRangeAt(0),
                    range = t.doc.createRange(),
                    rangeStart;
                range.selectNodeContents(t.$ed[0]);
                range.setEnd(savedRange.startContainer, savedRange.startOffset);
                rangeStart = (range + '').length;
                t.metaRange = {
                    start: rangeStart,
                    end: rangeStart + (savedRange + '').length
                };
            }
        },
        restoreRange: function () {
            var t = this,
                metaRange = t.metaRange,
                savedRange = t.range,
                documentSelection = t.doc.getSelection(),
                range;

            if (!savedRange) {
                return;
            }

            if (metaRange && metaRange.start !== metaRange.end) { // Algorithm from http://jsfiddle.net/WeWy7/3/
                var charIndex = 0,
                    nodeStack = [t.$ed[0]],
                    node,
                    foundStart = false,
                    stop = false;

                range = t.doc.createRange();

                while (!stop && (node = nodeStack.pop())) {
                    if (node.nodeType === 3) {
                        var nextCharIndex = charIndex + node.length;
                        if (!foundStart && metaRange.start >= charIndex && metaRange.start <= nextCharIndex) {
                            range.setStart(node, metaRange.start - charIndex);
                            foundStart = true;
                        }
                        if (foundStart && metaRange.end >= charIndex && metaRange.end <= nextCharIndex) {
                            range.setEnd(node, metaRange.end - charIndex);
                            stop = true;
                        }
                        charIndex = nextCharIndex;
                    } else {
                        var cn = node.childNodes,
                            i = cn.length;

                        while (i > 0) {
                            i -= 1;
                            nodeStack.push(cn[i]);
                        }
                    }
                }
            }

            documentSelection.removeAllRanges();
            documentSelection.addRange(range || savedRange);
        },
        getRangeText: function () {
            return this.range + '';
        },

        updateButtonPaneStatus: function () {
            var t = this,
                prefix = t.o.prefix,
                tags = t.getTagsRecursive(t.doc.getSelection().focusNode),
                activeClasses = prefix + 'active-button ' + prefix + 'active';

            $('.' + prefix + 'active-button', t.$btnPane).removeClass(activeClasses);
            $.each(tags, function (i, tag) {
                var btnName = t.tagToButton[tag.toLowerCase()],
                    $btn = $('.' + prefix + btnName + '-button', t.$btnPane);

                if ($btn.length > 0) {
                    $btn.addClass(activeClasses);
                } else {
                    try {
                        $btn = $('.' + prefix + 'dropdown .' + prefix + btnName + '-dropdown-button', t.$box);
                        var dropdownBtnName = $btn.parent().data('dropdown');
                        $('.' + prefix + dropdownBtnName + '-button', t.$box).addClass(activeClasses);
                    } catch (e) {
                    }
                }
            });
        },
        getTagsRecursive: function (element, tags) {
            var t = this;
            tags = tags || (element && element.tagName ? [element.tagName] : []);

            if (element && element.parentNode) {
                element = element.parentNode;
            } else {
                return tags;
            }

            var tag = element.tagName;
            if (tag === 'DIV') {
                return tags;
            }
            if (tag === 'P' && element.style.textAlign !== '') {
                tags.push(element.style.textAlign);
            }

            $.each(t.tagHandlers, function (i, tagHandler) {
                tags = tags.concat(tagHandler(element, t));
            });

            tags.push(tag);

            return t.getTagsRecursive(element, tags).filter(function(tag) { return tag != null; });
        },

        // Plugins
        initPlugins: function () {
            var t = this;
            t.loadedPlugins = [];
            $.each($.trumbowyg.plugins, function (name, plugin) {
                if (!plugin.shouldInit || plugin.shouldInit(t)) {
                    plugin.init(t);
                    if (plugin.tagHandler) {
                        t.tagHandlers.push(plugin.tagHandler);
                    }
                    t.loadedPlugins.push(plugin);
                }
            });
        },
        destroyPlugins: function () {
            $.each(this.loadedPlugins, function (i, plugin) {
                if (plugin.destroy) {
                    plugin.destroy();
                }
            });
        }
    };
})(navigator, window, document, jQuery);


/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/trumbowyg/dist/ui/icons.svg?fe14a6066b297f1848cbaafa1efb22c5";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)(undefined);
// imports


// module
exports.push([module.i, "/**\n * Trumbowyg v2.8.1 - A lightweight WYSIWYG editor\n * Default stylesheet for Trumbowyg editor\n * ------------------------\n * @link http://alex-d.github.io/Trumbowyg\n * @license MIT\n * @author Alexandre Demode (Alex-D)\n *         Twitter : @AlexandreDemode\n *         Website : alex-d.fr\n */\n\n#trumbowyg-icons {\n  overflow: hidden;\n  visibility: hidden;\n  height: 0;\n  width: 0; }\n  #trumbowyg-icons svg {\n    height: 0;\n    width: 0; }\n\n.trumbowyg-box *,\n.trumbowyg-box *::before,\n.trumbowyg-box *::after {\n  box-sizing: border-box; }\n\n.trumbowyg-box svg {\n  width: 17px;\n  height: 100%;\n  fill: #222; }\n\n.trumbowyg-box,\n.trumbowyg-editor {\n  display: block;\n  position: relative;\n  border: 1px solid #DDD;\n  width: 100%;\n  min-height: 300px;\n  margin: 17px auto; }\n\n.trumbowyg-box .trumbowyg-editor {\n  margin: 0 auto; }\n\n.trumbowyg-box.trumbowyg-fullscreen {\n  background: #FEFEFE;\n  border: none !important; }\n\n.trumbowyg-editor,\n.trumbowyg-textarea {\n  position: relative;\n  box-sizing: border-box;\n  padding: 20px;\n  min-height: 300px;\n  width: 100%;\n  border-style: none;\n  resize: none;\n  outline: none;\n  overflow: auto; }\n  .trumbowyg-editor.trumbowyg-autogrow-on-enter,\n  .trumbowyg-textarea.trumbowyg-autogrow-on-enter {\n    transition: height 300ms ease-out; }\n\n.trumbowyg-box-blur .trumbowyg-editor *, .trumbowyg-box-blur .trumbowyg-editor::before {\n  color: transparent !important;\n  text-shadow: 0 0 7px #333; }\n  @media screen and (min-width: 0 \\0) {\n    .trumbowyg-box-blur .trumbowyg-editor *, .trumbowyg-box-blur .trumbowyg-editor::before {\n      color: rgba(200, 200, 200, 0.6) !important; } }\n  @supports (-ms-accelerator: true) {\n    .trumbowyg-box-blur .trumbowyg-editor *, .trumbowyg-box-blur .trumbowyg-editor::before {\n      color: rgba(200, 200, 200, 0.6) !important; } }\n\n.trumbowyg-box-blur .trumbowyg-editor img,\n.trumbowyg-box-blur .trumbowyg-editor hr {\n  opacity: 0.2; }\n\n.trumbowyg-textarea {\n  position: relative;\n  display: block;\n  overflow: auto;\n  border: none;\n  white-space: normal;\n  font-size: 14px;\n  font-family: \"Inconsolata\", \"Consolas\", \"Courier\", \"Courier New\", sans-serif;\n  line-height: 18px; }\n\n.trumbowyg-box.trumbowyg-editor-visible .trumbowyg-textarea {\n  height: 1px !important;\n  width: 25%;\n  min-height: 0 !important;\n  padding: 0 !important;\n  background: none;\n  opacity: 0 !important; }\n\n.trumbowyg-box.trumbowyg-editor-hidden .trumbowyg-textarea {\n  display: block; }\n\n.trumbowyg-box.trumbowyg-editor-hidden .trumbowyg-editor {\n  display: none; }\n\n.trumbowyg-box.trumbowyg-disabled .trumbowyg-textarea {\n  opacity: 0.8;\n  background: none; }\n\n.trumbowyg-editor[contenteditable=true]:empty:not(:focus)::before {\n  content: attr(placeholder);\n  color: #999;\n  pointer-events: none; }\n\n.trumbowyg-button-pane {\n  width: 100%;\n  min-height: 36px;\n  background: #ecf0f1;\n  border-bottom: 1px solid #d7e0e2;\n  margin: 0;\n  padding: 0 5px;\n  position: relative;\n  list-style-type: none;\n  line-height: 10px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 11; }\n  .trumbowyg-button-pane::after {\n    content: \" \";\n    display: block;\n    position: absolute;\n    top: 36px;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 1px;\n    background: #d7e0e2; }\n  .trumbowyg-button-pane .trumbowyg-button-group {\n    display: inline-block; }\n    .trumbowyg-button-pane .trumbowyg-button-group .trumbowyg-fullscreen-button svg {\n      color: transparent; }\n    .trumbowyg-button-pane .trumbowyg-button-group:not(:empty) + .trumbowyg-button-group::before {\n      content: \" \";\n      display: inline-block;\n      width: 1px;\n      background: #d7e0e2;\n      margin: 0 5px;\n      height: 35px;\n      vertical-align: top; }\n  .trumbowyg-button-pane button {\n    display: inline-block;\n    position: relative;\n    width: 35px;\n    height: 35px;\n    padding: 1px 6px !important;\n    margin-bottom: 1px;\n    overflow: hidden;\n    border: none;\n    cursor: pointer;\n    background: none;\n    vertical-align: middle;\n    transition: background-color 150ms, opacity 150ms; }\n    .trumbowyg-button-pane button.trumbowyg-textual-button {\n      width: auto;\n      line-height: 35px;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n  .trumbowyg-button-pane.trumbowyg-disable button:not(.trumbowyg-not-disable):not(.trumbowyg-active),\n  .trumbowyg-disabled .trumbowyg-button-pane button:not(.trumbowyg-not-disable):not(.trumbowyg-viewHTML-button) {\n    opacity: 0.2;\n    cursor: default; }\n  .trumbowyg-button-pane.trumbowyg-disable .trumbowyg-button-group::before,\n  .trumbowyg-disabled .trumbowyg-button-pane .trumbowyg-button-group::before {\n    background: #e3e9eb; }\n  .trumbowyg-button-pane button:not(.trumbowyg-disable):hover,\n  .trumbowyg-button-pane button:not(.trumbowyg-disable):focus,\n  .trumbowyg-button-pane button.trumbowyg-active {\n    background-color: #FFF;\n    outline: none; }\n  .trumbowyg-button-pane .trumbowyg-open-dropdown::after {\n    display: block;\n    content: \" \";\n    position: absolute;\n    top: 25px;\n    right: 3px;\n    height: 0;\n    width: 0;\n    border: 3px solid transparent;\n    border-top-color: #555; }\n  .trumbowyg-button-pane .trumbowyg-open-dropdown.trumbowyg-textual-button {\n    padding-left: 10px !important;\n    padding-right: 18px !important; }\n    .trumbowyg-button-pane .trumbowyg-open-dropdown.trumbowyg-textual-button::after {\n      top: 17px;\n      right: 7px; }\n  .trumbowyg-button-pane .trumbowyg-right {\n    float: right; }\n    .trumbowyg-button-pane .trumbowyg-right::before {\n      display: none !important; }\n\n.trumbowyg-dropdown {\n  width: 200px;\n  border: 1px solid #ecf0f1;\n  padding: 5px 0;\n  border-top: none;\n  background: #FFF;\n  margin-left: -1px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 3px;\n  z-index: 11; }\n  .trumbowyg-dropdown button {\n    display: block;\n    width: 100%;\n    height: 35px;\n    line-height: 35px;\n    text-decoration: none;\n    background: #FFF;\n    padding: 0 10px;\n    color: #333 !important;\n    border: none;\n    cursor: pointer;\n    text-align: left;\n    font-size: 15px;\n    transition: all 150ms; }\n    .trumbowyg-dropdown button:hover, .trumbowyg-dropdown button:focus {\n      background: #ecf0f1; }\n    .trumbowyg-dropdown button svg {\n      float: left;\n      margin-right: 14px; }\n\n/* Modal box */\n.trumbowyg-modal {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  max-width: 520px;\n  width: 100%;\n  height: 350px;\n  z-index: 11;\n  overflow: hidden;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.trumbowyg-modal-box {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  max-width: 500px;\n  width: calc(100% - 20px);\n  padding-bottom: 45px;\n  z-index: 1;\n  background-color: #FFF;\n  text-align: center;\n  font-size: 14px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 3px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n  .trumbowyg-modal-box .trumbowyg-modal-title {\n    font-size: 24px;\n    font-weight: bold;\n    margin: 0 0 20px;\n    padding: 15px 0 13px;\n    display: block;\n    border-bottom: 1px solid #EEE;\n    color: #333;\n    background: #fbfcfc; }\n  .trumbowyg-modal-box .trumbowyg-progress {\n    width: 100%;\n    height: 3px;\n    position: absolute;\n    top: 58px; }\n    .trumbowyg-modal-box .trumbowyg-progress .trumbowyg-progress-bar {\n      background: #2BC06A;\n      width: 0;\n      height: 100%;\n      transition: width 150ms linear; }\n  .trumbowyg-modal-box label {\n    display: block;\n    position: relative;\n    margin: 15px 12px;\n    height: 29px;\n    line-height: 29px;\n    overflow: hidden; }\n    .trumbowyg-modal-box label .trumbowyg-input-infos {\n      display: block;\n      text-align: left;\n      height: 25px;\n      line-height: 25px;\n      transition: all 150ms; }\n      .trumbowyg-modal-box label .trumbowyg-input-infos span {\n        display: block;\n        color: #69878f;\n        background-color: #fbfcfc;\n        border: 1px solid #DEDEDE;\n        padding: 0 7px;\n        width: 150px; }\n      .trumbowyg-modal-box label .trumbowyg-input-infos span.trumbowyg-msg-error {\n        color: #e74c3c; }\n    .trumbowyg-modal-box label.trumbowyg-input-error input,\n    .trumbowyg-modal-box label.trumbowyg-input-error textarea {\n      border: 1px solid #e74c3c; }\n    .trumbowyg-modal-box label.trumbowyg-input-error .trumbowyg-input-infos {\n      margin-top: -27px; }\n    .trumbowyg-modal-box label input {\n      position: absolute;\n      top: 0;\n      right: 0;\n      height: 27px;\n      line-height: 27px;\n      border: 1px solid #DEDEDE;\n      background: #fff;\n      font-size: 14px;\n      max-width: 330px;\n      width: 70%;\n      padding: 0 7px;\n      transition: all 150ms; }\n      .trumbowyg-modal-box label input:hover, .trumbowyg-modal-box label input:focus {\n        outline: none;\n        border: 1px solid #95a5a6; }\n      .trumbowyg-modal-box label input:focus {\n        background: #fbfcfc; }\n  .trumbowyg-modal-box .error {\n    margin-top: 25px;\n    display: block;\n    color: red; }\n  .trumbowyg-modal-box .trumbowyg-modal-button {\n    position: absolute;\n    bottom: 10px;\n    right: 0;\n    text-decoration: none;\n    color: #FFF;\n    display: block;\n    width: 100px;\n    height: 35px;\n    line-height: 33px;\n    margin: 0 10px;\n    background-color: #333;\n    border: none;\n    cursor: pointer;\n    font-family: \"Trebuchet MS\", Helvetica, Verdana, sans-serif;\n    font-size: 16px;\n    transition: all 150ms; }\n    .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit {\n      right: 110px;\n      background: #2bc06a; }\n      .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:hover, .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:focus {\n        background: #40d47e;\n        outline: none; }\n      .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:active {\n        background: #25a25a; }\n    .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset {\n      color: #555;\n      background: #e6e6e6; }\n      .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:hover, .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:focus {\n        background: #fbfbfb;\n        outline: none; }\n      .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:active {\n        background: #d5d5d5; }\n\n.trumbowyg-overlay {\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.5);\n  height: 100%;\n  width: 100%;\n  left: 0;\n  display: none;\n  top: 0;\n  z-index: 10; }\n\n/**\n * Fullscreen\n */\nbody.trumbowyg-body-fullscreen {\n  overflow: hidden; }\n\n.trumbowyg-fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  z-index: 99999; }\n  .trumbowyg-fullscreen.trumbowyg-box,\n  .trumbowyg-fullscreen .trumbowyg-editor {\n    border: none; }\n  .trumbowyg-fullscreen .trumbowyg-editor,\n  .trumbowyg-fullscreen .trumbowyg-textarea {\n    height: calc(100% - 37px) !important;\n    overflow: auto; }\n  .trumbowyg-fullscreen .trumbowyg-overlay {\n    height: 100% !important; }\n  .trumbowyg-fullscreen .trumbowyg-button-group .trumbowyg-fullscreen-button svg {\n    color: #222;\n    fill: transparent; }\n\n.trumbowyg-editor {\n  /*\n     * lset for resetCss option\n     */ }\n  .trumbowyg-editor object,\n  .trumbowyg-editor embed,\n  .trumbowyg-editor video,\n  .trumbowyg-editor img {\n    max-width: 100%; }\n  .trumbowyg-editor video,\n  .trumbowyg-editor img {\n    height: auto; }\n  .trumbowyg-editor img {\n    cursor: move; }\n  .trumbowyg-editor.trumbowyg-reset-css {\n    background: #FEFEFE !important;\n    font-family: \"Trebuchet MS\", Helvetica, Verdana, sans-serif !important;\n    font-size: 14px !important;\n    line-height: 1.45em !important;\n    white-space: normal !important;\n    color: #333; }\n    .trumbowyg-editor.trumbowyg-reset-css a {\n      color: #15c !important;\n      text-decoration: underline !important; }\n    .trumbowyg-editor.trumbowyg-reset-css div,\n    .trumbowyg-editor.trumbowyg-reset-css p,\n    .trumbowyg-editor.trumbowyg-reset-css ul,\n    .trumbowyg-editor.trumbowyg-reset-css ol,\n    .trumbowyg-editor.trumbowyg-reset-css blockquote {\n      box-shadow: none !important;\n      background: none !important;\n      margin: 0 !important;\n      margin-bottom: 15px !important;\n      line-height: 1.4em !important;\n      font-family: \"Trebuchet MS\", Helvetica, Verdana, sans-serif !important;\n      font-size: 14px !important;\n      border: none; }\n    .trumbowyg-editor.trumbowyg-reset-css iframe,\n    .trumbowyg-editor.trumbowyg-reset-css object,\n    .trumbowyg-editor.trumbowyg-reset-css hr {\n      margin-bottom: 15px !important; }\n    .trumbowyg-editor.trumbowyg-reset-css blockquote {\n      margin-left: 32px !important;\n      font-style: italic !important;\n      color: #555; }\n    .trumbowyg-editor.trumbowyg-reset-css ul,\n    .trumbowyg-editor.trumbowyg-reset-css ol {\n      padding-left: 20px !important; }\n    .trumbowyg-editor.trumbowyg-reset-css ul ul,\n    .trumbowyg-editor.trumbowyg-reset-css ol ol,\n    .trumbowyg-editor.trumbowyg-reset-css ul ol,\n    .trumbowyg-editor.trumbowyg-reset-css ol ul {\n      border: none;\n      margin: 2px !important;\n      padding: 0 !important;\n      padding-left: 24px !important; }\n    .trumbowyg-editor.trumbowyg-reset-css hr {\n      display: block;\n      height: 1px;\n      border: none;\n      border-top: 1px solid #CCC; }\n    .trumbowyg-editor.trumbowyg-reset-css h1,\n    .trumbowyg-editor.trumbowyg-reset-css h2,\n    .trumbowyg-editor.trumbowyg-reset-css h3,\n    .trumbowyg-editor.trumbowyg-reset-css h4 {\n      color: #111;\n      background: none;\n      margin: 0 !important;\n      padding: 0 !important;\n      font-weight: bold; }\n    .trumbowyg-editor.trumbowyg-reset-css h1 {\n      font-size: 32px !important;\n      line-height: 38px !important;\n      margin-bottom: 20px !important; }\n    .trumbowyg-editor.trumbowyg-reset-css h2 {\n      font-size: 26px !important;\n      line-height: 34px !important;\n      margin-bottom: 15px !important; }\n    .trumbowyg-editor.trumbowyg-reset-css h3 {\n      font-size: 22px !important;\n      line-height: 28px !important;\n      margin-bottom: 7px !important; }\n    .trumbowyg-editor.trumbowyg-reset-css h4 {\n      font-size: 16px !important;\n      line-height: 22px !important;\n      margin-bottom: 7px !important; }\n\n/*\n * Dark theme\n */\n.trumbowyg-dark .trumbowyg-textarea {\n  background: #111;\n  color: #ddd; }\n\n.trumbowyg-dark .trumbowyg-box {\n  border: 1px solid #343434; }\n  .trumbowyg-dark .trumbowyg-box.trumbowyg-fullscreen {\n    background: #111; }\n  .trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor *, .trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor::before {\n    text-shadow: 0 0 7px #ccc; }\n    @media screen and (min-width: 0 \\0 ) {\n      .trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor *, .trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor::before {\n        color: rgba(20, 20, 20, 0.6) !important; } }\n    @supports (-ms-accelerator: true) {\n      .trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor *, .trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor::before {\n        color: rgba(20, 20, 20, 0.6) !important; } }\n  .trumbowyg-dark .trumbowyg-box svg {\n    fill: #ecf0f1;\n    color: #ecf0f1; }\n\n.trumbowyg-dark .trumbowyg-button-pane {\n  background-color: #222;\n  border-bottom-color: #343434; }\n  .trumbowyg-dark .trumbowyg-button-pane::after {\n    background: #343434; }\n  .trumbowyg-dark .trumbowyg-button-pane .trumbowyg-button-group:not(:empty)::before {\n    background-color: #343434; }\n  .trumbowyg-dark .trumbowyg-button-pane .trumbowyg-button-group:not(:empty) .trumbowyg-fullscreen-button svg {\n    color: transparent; }\n  .trumbowyg-dark .trumbowyg-button-pane.trumbowyg-disable .trumbowyg-button-group::before {\n    background-color: #2a2a2a; }\n  .trumbowyg-dark .trumbowyg-button-pane button:not(.trumbowyg-disable):hover,\n  .trumbowyg-dark .trumbowyg-button-pane button:not(.trumbowyg-disable):focus,\n  .trumbowyg-dark .trumbowyg-button-pane button.trumbowyg-active {\n    background-color: #333; }\n  .trumbowyg-dark .trumbowyg-button-pane .trumbowyg-open-dropdown::after {\n    border-top-color: #fff; }\n\n.trumbowyg-dark .trumbowyg-fullscreen .trumbowyg-button-group .trumbowyg-fullscreen-button svg {\n  color: #ecf0f1;\n  fill: transparent; }\n\n.trumbowyg-dark .trumbowyg-dropdown {\n  border-color: #222;\n  background: #333;\n  box-shadow: rgba(0, 0, 0, 0.3) 0 2px 3px; }\n  .trumbowyg-dark .trumbowyg-dropdown button {\n    background: #333;\n    color: #fff !important; }\n    .trumbowyg-dark .trumbowyg-dropdown button:hover, .trumbowyg-dark .trumbowyg-dropdown button:focus {\n      background: #222; }\n\n.trumbowyg-dark .trumbowyg-modal-box {\n  background-color: #222; }\n  .trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-title {\n    border-bottom: 1px solid #555;\n    color: #fff;\n    background: #3c3c3c; }\n  .trumbowyg-dark .trumbowyg-modal-box label {\n    display: block;\n    position: relative;\n    margin: 15px 12px;\n    height: 27px;\n    line-height: 27px;\n    overflow: hidden; }\n    .trumbowyg-dark .trumbowyg-modal-box label .trumbowyg-input-infos span {\n      color: #eee;\n      background-color: #2f2f2f;\n      border-color: #222; }\n    .trumbowyg-dark .trumbowyg-modal-box label .trumbowyg-input-infos span.trumbowyg-msg-error {\n      color: #e74c3c; }\n    .trumbowyg-dark .trumbowyg-modal-box label.trumbowyg-input-error input,\n    .trumbowyg-dark .trumbowyg-modal-box label.trumbowyg-input-error textarea {\n      border-color: #e74c3c; }\n    .trumbowyg-dark .trumbowyg-modal-box label input {\n      border-color: #222;\n      color: #eee;\n      background: #333; }\n      .trumbowyg-dark .trumbowyg-modal-box label input:hover, .trumbowyg-dark .trumbowyg-modal-box label input:focus {\n        border-color: #626262; }\n      .trumbowyg-dark .trumbowyg-modal-box label input:focus {\n        background-color: #2f2f2f; }\n  .trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit {\n    background: #1b7943; }\n    .trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:hover, .trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:focus {\n      background: #25a25a; }\n    .trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:active {\n      background: #176437; }\n  .trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset {\n    background: #333;\n    color: #ccc; }\n    .trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:hover, .trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:focus {\n      background: #444; }\n    .trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:active {\n      background: #111; }\n\n.trumbowyg-dark .trumbowyg-overlay {\n  background-color: rgba(15, 15, 15, 0.6); }\n", ""]);

// exports


/***/ }),
/* 80 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(82);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 82 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        id: "addPostForm",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "myModalLabel"
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("span", { staticClass: "form-control-static text-center" }, [
                _vm.type == 1
                  ? _c(
                      "h4",
                      {
                        staticClass: "modal-title",
                        attrs: { id: "myModalLabel" }
                      },
                      [_vm._v(" اضافة خبر ")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.type == 2
                  ? _c(
                      "h4",
                      {
                        staticClass: "modal-title",
                        attrs: { id: "myModalLabel" }
                      },
                      [_vm._v(" اضافة درس او محاضرة ")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.type == 3
                  ? _c(
                      "h4",
                      {
                        staticClass: "modal-title",
                        attrs: { id: "myModalLabel" }
                      },
                      [_vm._v(" اضافة قصة ")]
                    )
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c(
                "form",
                {
                  attrs: { method: "POST", action: "/" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.onPostCreate($event)
                    },
                    keydown: function($event) {
                      _vm.addPostForm.errors.clear($event.target.name)
                    },
                    change: function($event) {
                      _vm.addPostForm.errors.clear($event.target.name)
                    },
                    input: function($event) {
                      _vm.addPostForm.errors.clear($event.target.name)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { staticClass: "label", attrs: { for: "locale" } },
                      [_vm._v("اللغة:")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.addPostForm.locale,
                            expression: "addPostForm.locale"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "locale", name: "locale" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.addPostForm,
                              "locale",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.locales, function(locale, key) {
                        return _c("option", { domProps: { value: key } }, [
                          _vm._v(_vm._s(locale.native))
                        ])
                      })
                    ),
                    _vm._v(" "),
                    _vm.addPostForm.errors.has("locale")
                      ? _c("span", {
                          staticClass: "alert-danger",
                          domProps: {
                            textContent: _vm._s(
                              _vm.addPostForm.errors.get("locale")
                            )
                          }
                        })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { staticClass: "label", attrs: { for: "title" } },
                      [_vm._v("العنوان:")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.addPostForm.title,
                          expression: "addPostForm.title"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "name", name: "title" },
                      domProps: { value: _vm.addPostForm.title },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.addPostForm,
                            "title",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.addPostForm.errors.has("title")
                      ? _c("span", {
                          staticClass: "alert-danger",
                          domProps: {
                            textContent: _vm._s(
                              _vm.addPostForm.errors.get("title")
                            )
                          }
                        })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "label",
                        { staticClass: "label", attrs: { for: "content" } },
                        [_vm._v("المحتوى:")]
                      ),
                      _vm._v(" "),
                      _c("trumbowyg", {
                        attrs: { name: "addPostForm.content" },
                        model: {
                          value: _vm.addPostForm.content,
                          callback: function($$v) {
                            _vm.$set(_vm.addPostForm, "content", $$v)
                          },
                          expression: "addPostForm.content"
                        }
                      }),
                      _vm._v(" "),
                      _vm.addPostForm.errors.has("content")
                        ? _c("span", {
                            staticClass: "alert-danger",
                            domProps: {
                              textContent: _vm._s(
                                _vm.addPostForm.errors.get("content")
                              )
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { staticClass: "label", attrs: { for: "published" } },
                      [_vm._v("حالة النشر:")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.addPostForm.published,
                          expression: "addPostForm.published",
                          modifiers: { number: true }
                        }
                      ],
                      attrs: { type: "radio", id: "published", value: "1" },
                      domProps: {
                        checked: _vm._q(_vm.addPostForm.published, _vm._n("1"))
                      },
                      on: {
                        change: function($event) {
                          _vm.$set(_vm.addPostForm, "published", _vm._n("1"))
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.addPostForm.published,
                          expression: "addPostForm.published",
                          modifiers: { number: true }
                        }
                      ],
                      attrs: { type: "radio", id: "published", value: "0" },
                      domProps: {
                        checked: _vm._q(_vm.addPostForm.published, _vm._n("0"))
                      },
                      on: {
                        change: function($event) {
                          _vm.$set(_vm.addPostForm, "published", _vm._n("0"))
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _vm.addPostForm.errors.has("published")
                      ? _c("span", {
                          staticClass: "alert-danger",
                          domProps: {
                            textContent: _vm._s(
                              _vm.addPostForm.errors.get("published")
                            )
                          }
                        })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          label: "name",
                          options: _vm.tags,
                          multiple: "",
                          id: "tags",
                          name: "tags[]"
                        },
                        on: {
                          input: function($event) {
                            _vm.addPostForm.errors.clear("tags")
                          }
                        },
                        model: {
                          value: _vm.addPostForm.tags,
                          callback: function($$v) {
                            _vm.$set(_vm.addPostForm, "tags", $$v)
                          },
                          expression: "addPostForm.tags"
                        }
                      }),
                      _vm._v(" "),
                      _vm.addPostForm.errors.has("tags")
                        ? _c("span", {
                            staticClass: "alert-danger",
                            domProps: {
                              textContent: _vm._s(
                                _vm.addPostForm.errors.get("tags")
                              )
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group text-center" }, [
                    _c(
                      "button",
                      {
                        staticClass: "button btn-lg btn-success",
                        attrs: { disabled: _vm.addPostForm.errors.any() }
                      },
                      [_vm._v("اضافة")]
                    )
                  ])
                ]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("نعم "),
      _c("i", {
        staticClass: "fa fa-check green",
        attrs: { "aria-hidden": "true" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("لا "),
      _c("i", {
        staticClass: "fa fa-close red",
        attrs: { "aria-hidden": "true" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "label", attrs: { for: "tags" } }, [
      _vm._v("التصنيفات: "),
      _c("span", { staticStyle: { color: "green" } }, [
        _vm._v("اختر التصنيف باللغة الاساسية لاضافته")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-212f9784", module.exports)
  }
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(85)
/* template */
var __vue_template__ = __webpack_require__(86)
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\admin\\components\\posts\\addPostTranslation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2804917a", Component.options)
  } else {
    hotAPI.reload("data-v-2804917a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_trumbowyg__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_trumbowyg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_trumbowyg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_trumbowyg_dist_ui_trumbowyg_css__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_trumbowyg_dist_ui_trumbowyg_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_trumbowyg_dist_ui_trumbowyg_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_select__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_select__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['locales', 'tags', 'type'],
    data: function data() {
        return {
            addPostTranslationForm: new Form({
                type: this.$props.type,
                locale: '',
                title: '',
                content: '',
                published: 1,
                tags: []
            }),
            post_id: ''
        };
    },

    methods: {
        onPostCreate: function onPostCreate() {
            this.addPostTranslationForm.post('/admincp/posts/' + this.post_id).then(function (response) {
                return eventBus.$emit('postAdded', response);
            });
        },
        addPostTranslationModal: function addPostTranslationModal(post, key) {
            this.addPostTranslationForm.locale = key;
            this.addPostTranslationForm.type = post.type;
            this.addPostTranslationForm.tags = post.tags;
            this.post_id = post.id;
            this.addPostTranslationForm.published = 1;
            $('#addPostTranslationForm').modal('show');
        }
    },
    components: {
        trumbowyg: __WEBPACK_IMPORTED_MODULE_0_vue_trumbowyg___default.a,
        vSelect: __WEBPACK_IMPORTED_MODULE_2_vue_select___default.a
    },
    mounted: function mounted() {
        var _this = this;

        eventBus.$on('addPostTranslation', function (post, key) {
            return _this.addPostTranslationModal(post, key);
        });
    }
});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        id: "addPostTranslationForm",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "myModalLabel"
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("span", { staticClass: "form-control-static text-center" }, [
                _vm.type == 1
                  ? _c(
                      "h4",
                      {
                        staticClass: "modal-title",
                        attrs: { id: "myModalLabel" }
                      },
                      [_vm._v(" اضافة ترجمة لخبر ")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.type == 2
                  ? _c(
                      "h4",
                      {
                        staticClass: "modal-title",
                        attrs: { id: "myModalLabel" }
                      },
                      [_vm._v(" اضافة ترجمة لدرس او محاضرة ")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.type == 3
                  ? _c(
                      "h4",
                      {
                        staticClass: "modal-title",
                        attrs: { id: "myModalLabel" }
                      },
                      [_vm._v(" اضافة ترجمة لقصة ")]
                    )
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c(
                "form",
                {
                  attrs: { method: "POST", action: "/" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.onPostCreate($event)
                    },
                    keydown: function($event) {
                      _vm.addPostTranslationForm.errors.clear(
                        $event.target.name
                      )
                    },
                    change: function($event) {
                      _vm.addPostTranslationForm.errors.clear(
                        $event.target.name
                      )
                    },
                    input: function($event) {
                      _vm.addPostTranslationForm.errors.clear(
                        $event.target.name
                      )
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { staticClass: "label", attrs: { for: "locale" } },
                      [_vm._v("اللغة:")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.addPostTranslationForm.locale,
                            expression: "addPostTranslationForm.locale"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "locale", name: "locale", disabled: "" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.addPostTranslationForm,
                              "locale",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.locales, function(locale, key) {
                        return _c("option", { domProps: { value: key } }, [
                          _vm._v(_vm._s(locale.native))
                        ])
                      })
                    ),
                    _vm._v(" "),
                    _vm.addPostTranslationForm.errors.has("locale")
                      ? _c("span", {
                          staticClass: "alert-danger",
                          domProps: {
                            textContent: _vm._s(
                              _vm.addPostTranslationForm.errors.get("locale")
                            )
                          }
                        })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { staticClass: "label", attrs: { for: "title" } },
                      [_vm._v("العنوان:")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.addPostTranslationForm.title,
                          expression: "addPostTranslationForm.title"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "name", name: "title" },
                      domProps: { value: _vm.addPostTranslationForm.title },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.addPostTranslationForm,
                            "title",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.addPostTranslationForm.errors.has("title")
                      ? _c("span", {
                          staticClass: "alert-danger",
                          domProps: {
                            textContent: _vm._s(
                              _vm.addPostTranslationForm.errors.get("title")
                            )
                          }
                        })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "label",
                        { staticClass: "label", attrs: { for: "content" } },
                        [_vm._v("المحتوى:")]
                      ),
                      _vm._v(" "),
                      _c("trumbowyg", {
                        attrs: { name: "addPostTranslationForm.content" },
                        model: {
                          value: _vm.addPostTranslationForm.content,
                          callback: function($$v) {
                            _vm.$set(_vm.addPostTranslationForm, "content", $$v)
                          },
                          expression: "addPostTranslationForm.content"
                        }
                      }),
                      _vm._v(" "),
                      _vm.addPostTranslationForm.errors.has("content")
                        ? _c("span", {
                            staticClass: "alert-danger",
                            domProps: {
                              textContent: _vm._s(
                                _vm.addPostTranslationForm.errors.get("content")
                              )
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { staticClass: "label", attrs: { for: "published" } },
                      [_vm._v("حالة النشر:")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.addPostTranslationForm.published,
                          expression: "addPostTranslationForm.published",
                          modifiers: { number: true }
                        }
                      ],
                      attrs: { type: "radio", id: "published", value: "1" },
                      domProps: {
                        checked: _vm._q(
                          _vm.addPostTranslationForm.published,
                          _vm._n("1")
                        )
                      },
                      on: {
                        change: function($event) {
                          _vm.$set(
                            _vm.addPostTranslationForm,
                            "published",
                            _vm._n("1")
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.addPostTranslationForm.published,
                          expression: "addPostTranslationForm.published",
                          modifiers: { number: true }
                        }
                      ],
                      attrs: { type: "radio", id: "published", value: "0" },
                      domProps: {
                        checked: _vm._q(
                          _vm.addPostTranslationForm.published,
                          _vm._n("0")
                        )
                      },
                      on: {
                        change: function($event) {
                          _vm.$set(
                            _vm.addPostTranslationForm,
                            "published",
                            _vm._n("0")
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _vm.addPostTranslationForm.errors.has("published")
                      ? _c("span", {
                          staticClass: "alert-danger",
                          domProps: {
                            textContent: _vm._s(
                              _vm.addPostTranslationForm.errors.get("published")
                            )
                          }
                        })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          label: "name",
                          options: _vm.tags,
                          multiple: "",
                          id: "tags",
                          name: "tags[]"
                        },
                        on: {
                          input: function($event) {
                            _vm.addPostTranslationForm.errors.clear("tags")
                          }
                        },
                        model: {
                          value: _vm.addPostTranslationForm.tags,
                          callback: function($$v) {
                            _vm.$set(_vm.addPostTranslationForm, "tags", $$v)
                          },
                          expression: "addPostTranslationForm.tags"
                        }
                      }),
                      _vm._v(" "),
                      _vm.addPostTranslationForm.errors.has("tags")
                        ? _c("span", {
                            staticClass: "alert-danger",
                            domProps: {
                              textContent: _vm._s(
                                _vm.addPostTranslationForm.errors.get("tags")
                              )
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group text-center" }, [
                    _c(
                      "button",
                      {
                        staticClass: "button btn-lg btn-success",
                        attrs: {
                          disabled: _vm.addPostTranslationForm.errors.any()
                        }
                      },
                      [_vm._v("اضافة الترجمة")]
                    )
                  ])
                ]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("نعم "),
      _c("i", {
        staticClass: "fa fa-check green",
        attrs: { "aria-hidden": "true" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("لا "),
      _c("i", {
        staticClass: "fa fa-close red",
        attrs: { "aria-hidden": "true" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "label", attrs: { for: "tags" } }, [
      _vm._v("التصنيفات: "),
      _c("span", { staticStyle: { color: "green" } }, [
        _vm._v("نفس التصنيفات لجميع ترجمات المنشور")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2804917a", module.exports)
  }
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(88)
/* template */
var __vue_template__ = __webpack_require__(89)
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\admin\\components\\posts\\editPost.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-559b3ebd", Component.options)
  } else {
    hotAPI.reload("data-v-559b3ebd", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_trumbowyg__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_trumbowyg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_trumbowyg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_trumbowyg_dist_ui_trumbowyg_css__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_trumbowyg_dist_ui_trumbowyg_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_trumbowyg_dist_ui_trumbowyg_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_select__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_select__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['locales', 'tags', 'type'],
    data: function data() {
        return {
            editPostForm: new Form({
                type: this.$props.type,
                locale: '',
                title: '',
                content: '',
                published: 1,
                tags: []
            }),
            post_id: ''
        };
    },

    methods: {
        onPostCreate: function onPostCreate() {
            this.editPostForm.patch('/admincp/posts/' + this.post_id).then(function (response) {
                return eventBus.$emit('postAdded', response);
            });
        },
        editPostModal: function editPostModal(post, translation) {
            this.editPostForm.type = post.type;
            this.editPostForm.tags = post.tags;
            this.editPostForm.locale = translation.locale;
            this.editPostForm.title = translation.title;
            this.editPostForm.content = translation.content;
            this.editPostForm.published = translation.published;
            this.post_id = post.id;
            $('#editPostForm').modal('show');
        }
    },
    components: {
        trumbowyg: __WEBPACK_IMPORTED_MODULE_0_vue_trumbowyg___default.a,
        vSelect: __WEBPACK_IMPORTED_MODULE_2_vue_select___default.a
    },
    mounted: function mounted() {
        var _this = this;

        eventBus.$on('editPost', function (post, translation) {
            return _this.editPostModal(post, translation);
        });
    }
});

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        id: "editPostForm",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "myModalLabel"
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("span", { staticClass: "form-control-static text-center" }, [
                _vm.type == 1
                  ? _c(
                      "h4",
                      {
                        staticClass: "modal-title",
                        attrs: { id: "myModalLabel" }
                      },
                      [_vm._v(" تعديل ترجمة لخبر ")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.type == 2
                  ? _c(
                      "h4",
                      {
                        staticClass: "modal-title",
                        attrs: { id: "myModalLabel" }
                      },
                      [_vm._v(" تعديل ترجمة لدرس او محاضرة ")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.type == 3
                  ? _c(
                      "h4",
                      {
                        staticClass: "modal-title",
                        attrs: { id: "myModalLabel" }
                      },
                      [_vm._v(" تعديل ترجمة لقصة ")]
                    )
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c(
                "form",
                {
                  attrs: { method: "POST", action: "/" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.onPostCreate($event)
                    },
                    keydown: function($event) {
                      _vm.editPostForm.errors.clear($event.target.name)
                    },
                    change: function($event) {
                      _vm.editPostForm.errors.clear($event.target.name)
                    },
                    input: function($event) {
                      _vm.editPostForm.errors.clear($event.target.name)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { staticClass: "label", attrs: { for: "locale" } },
                      [_vm._v("اللغة:")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.editPostForm.locale,
                            expression: "editPostForm.locale"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "locale", name: "locale", disabled: "" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.editPostForm,
                              "locale",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.locales, function(locale, key) {
                        return _c("option", { domProps: { value: key } }, [
                          _vm._v(_vm._s(locale.native))
                        ])
                      })
                    ),
                    _vm._v(" "),
                    _vm.editPostForm.errors.has("locale")
                      ? _c("span", {
                          staticClass: "alert-danger",
                          domProps: {
                            textContent: _vm._s(
                              _vm.editPostForm.errors.get("locale")
                            )
                          }
                        })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { staticClass: "label", attrs: { for: "title" } },
                      [_vm._v("العنوان:")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editPostForm.title,
                          expression: "editPostForm.title"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "name", name: "title" },
                      domProps: { value: _vm.editPostForm.title },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editPostForm,
                            "title",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.editPostForm.errors.has("title")
                      ? _c("span", {
                          staticClass: "alert-danger",
                          domProps: {
                            textContent: _vm._s(
                              _vm.editPostForm.errors.get("title")
                            )
                          }
                        })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "label",
                        { staticClass: "label", attrs: { for: "content" } },
                        [_vm._v("المحتوى:")]
                      ),
                      _vm._v(" "),
                      _c("trumbowyg", {
                        attrs: { name: "editPostForm.content" },
                        model: {
                          value: _vm.editPostForm.content,
                          callback: function($$v) {
                            _vm.$set(_vm.editPostForm, "content", $$v)
                          },
                          expression: "editPostForm.content"
                        }
                      }),
                      _vm._v(" "),
                      _vm.editPostForm.errors.has("content")
                        ? _c("span", {
                            staticClass: "alert-danger",
                            domProps: {
                              textContent: _vm._s(
                                _vm.editPostForm.errors.get("content")
                              )
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { staticClass: "label", attrs: { for: "published" } },
                      [_vm._v("حالة النشر:")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.editPostForm.published,
                          expression: "editPostForm.published",
                          modifiers: { number: true }
                        }
                      ],
                      attrs: { type: "radio", id: "published", value: "1" },
                      domProps: {
                        checked: _vm._q(_vm.editPostForm.published, _vm._n("1"))
                      },
                      on: {
                        change: function($event) {
                          _vm.$set(_vm.editPostForm, "published", _vm._n("1"))
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.editPostForm.published,
                          expression: "editPostForm.published",
                          modifiers: { number: true }
                        }
                      ],
                      attrs: { type: "radio", id: "published", value: "0" },
                      domProps: {
                        checked: _vm._q(_vm.editPostForm.published, _vm._n("0"))
                      },
                      on: {
                        change: function($event) {
                          _vm.$set(_vm.editPostForm, "published", _vm._n("0"))
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _vm.editPostForm.errors.has("published")
                      ? _c("span", {
                          staticClass: "alert-danger",
                          domProps: {
                            textContent: _vm._s(
                              _vm.editPostForm.errors.get("published")
                            )
                          }
                        })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          label: "name",
                          options: _vm.tags,
                          multiple: "",
                          id: "tags",
                          name: "tags[]"
                        },
                        on: {
                          input: function($event) {
                            _vm.editPostForm.errors.clear("tags")
                          }
                        },
                        model: {
                          value: _vm.editPostForm.tags,
                          callback: function($$v) {
                            _vm.$set(_vm.editPostForm, "tags", $$v)
                          },
                          expression: "editPostForm.tags"
                        }
                      }),
                      _vm._v(" "),
                      _vm.editPostForm.errors.has("tags")
                        ? _c("span", {
                            staticClass: "alert-danger",
                            domProps: {
                              textContent: _vm._s(
                                _vm.editPostForm.errors.get("tags")
                              )
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group text-center" }, [
                    _c(
                      "button",
                      {
                        staticClass: "button btn-lg btn-success",
                        attrs: { disabled: _vm.editPostForm.errors.any() }
                      },
                      [_vm._v("تعديل الترجمة")]
                    )
                  ])
                ]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("نعم "),
      _c("i", {
        staticClass: "fa fa-check green",
        attrs: { "aria-hidden": "true" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("لا "),
      _c("i", {
        staticClass: "fa fa-close red",
        attrs: { "aria-hidden": "true" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "label", attrs: { for: "tags" } }, [
      _vm._v("التصنيفات: "),
      _c("span", { staticStyle: { color: "green" } }, [
        _vm._v("نفس التصنيفات لجميع ترجمات المنشور")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-559b3ebd", module.exports)
  }
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.posts.length
        ? _c(
            "table",
            {
              staticClass: "table table-responsive table-bordered text-center"
            },
            [
              _c("thead", [
                _c(
                  "tr",
                  [
                    _vm._l(_vm.locales, function(locale) {
                      return _c("th", [
                        _vm._v(
                          "\n                        " +
                            _vm._s(locale.native) +
                            "\n                    "
                        )
                      ])
                    }),
                    _vm._v(" "),
                    _c("th")
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.posts, function(post) {
                  return _c(
                    "tr",
                    { key: post.id },
                    [
                      _vm._l(_vm.locales, function(locale, key) {
                        return _c(
                          "td",
                          [
                            _vm._l(post.translations, function(translation) {
                              return translation.locale == key
                                ? _c("span", [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(translation.title) +
                                        "\n                            "
                                    ),
                                    _c("div", { staticClass: "pull-left" }, [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-primary",
                                          on: {
                                            click: function($event) {
                                              _vm.editPost(post, translation)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "fa fa-pencil-square-o",
                                            attrs: { "aria-hidden": "true" }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-danger",
                                          on: {
                                            click: function($event) {
                                              _vm.deleteTranslation(translation)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-trash-o",
                                            attrs: { "aria-hidden": "true" }
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", [
                                      !translation.published
                                        ? _c("i", {
                                            staticClass: "fa fa-close red",
                                            attrs: { "aria-hidden": "true" }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      translation.published
                                        ? _c("i", {
                                            staticClass: "fa fa-check green",
                                            attrs: { "aria-hidden": "true" }
                                          })
                                        : _vm._e()
                                    ])
                                  ])
                                : _vm._e()
                            }),
                            _vm._v(" "),
                            !_vm.localeCheck(key, post)
                              ? _c("span", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-success",
                                      on: {
                                        click: function($event) {
                                          _vm.addTranslation(post, key)
                                        }
                                      }
                                    },
                                    [_vm._v("اضافة ترجمة")]
                                  )
                                ])
                              : _vm._e()
                          ],
                          2
                        )
                      }),
                      _vm._v(" "),
                      _c("td", [
                        _vm.type == 1
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                on: {
                                  click: function($event) {
                                    _vm.deletePost(post)
                                  }
                                }
                              },
                              [_vm._v("حذف الخبر")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.type == 2
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                on: {
                                  click: function($event) {
                                    _vm.deletePost(post)
                                  }
                                }
                              },
                              [_vm._v("حذف الدرس")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.type == 3
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                on: {
                                  click: function($event) {
                                    _vm.deletePost(post)
                                  }
                                }
                              },
                              [_vm._v("حذف القصة")]
                            )
                          : _vm._e()
                      ])
                    ],
                    2
                  )
                })
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("add-post", {
        attrs: { type: _vm.type, tags: _vm.tags, locales: _vm.locales }
      }),
      _vm._v(" "),
      _c("add-post-translation", {
        attrs: { type: _vm.type, tags: _vm.tags, locales: _vm.locales }
      }),
      _vm._v(" "),
      _c("edit-post", {
        attrs: { type: _vm.type, tags: _vm.tags, locales: _vm.locales }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7b2b6d24", module.exports)
  }
}

/***/ })
],[71]);