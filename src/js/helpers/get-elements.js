var qs = function(el, context) {
  context = context || document;
  context.querySelector(el);
};

var qsa = function(selector, context) {
  context = context || document;
  Array.prototype.slice.call(
    context.querySelectorAll(selector)
  );
};
