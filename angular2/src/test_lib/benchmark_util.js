System.register(["angular2/src/facade/dom", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var DOM,
      document,
      location,
      NumberWrapper,
      BaseException,
      isBlank;
  function getIntParameter(name) {
    return NumberWrapper.parseInt(getStringParameter(name), 10);
  }
  function getStringParameter(name) {
    var els = DOM.querySelectorAll(document, ("input[name=\"" + name + "\"]"));
    var value;
    var el;
    for (var i = 0; i < els.length; i++) {
      el = els[i];
      var type = DOM.type(el);
      if ((type !== 'radio' && type !== 'checkbox') || DOM.getChecked(el)) {
        value = DOM.getValue(el);
        break;
      }
    }
    if (isBlank(value)) {
      throw new BaseException(("Could not find and input field with name " + name));
    }
    return value;
  }
  function bindAction(selector, callback) {
    var el = DOM.querySelector(document, selector);
    DOM.on(el, 'click', function(_) {
      callback();
    });
  }
  $__export("getIntParameter", getIntParameter);
  $__export("getStringParameter", getStringParameter);
  $__export("bindAction", bindAction);
  return {
    setters: [function($__m) {
      DOM = $__m.DOM;
      document = $__m.document;
      location = $__m.location;
    }, function($__m) {
      NumberWrapper = $__m.NumberWrapper;
      BaseException = $__m.BaseException;
      isBlank = $__m.isBlank;
    }],
    execute: function() {
      Object.defineProperty(getIntParameter, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(getStringParameter, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(bindAction, "parameters", {get: function() {
          return [[assert.type.string], [Function]];
        }});
    }
  };
});

//# sourceMappingURL=src/test_lib/benchmark_util.map

//# sourceMappingURL=../../src/test_lib/benchmark_util.js.map