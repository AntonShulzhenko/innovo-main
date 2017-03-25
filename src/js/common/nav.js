(function() {
  var nav = document.querySelector('.nav');
  var btn = document.querySelector('.menu-btn');
  var top = document.querySelector('.top');

  function toggleClass(el, className) {
    if(!el) return;
    if(!el.classList.contains(className)) {
      disableScroll();
    } else {
      enableScroll();
    }
    el.classList.toggle(className);
  }

  if(window.innerWidth < 900) {
    nav.addEventListener('click', function(e) {
      if(e.target.classList.contains('nav__link')) {
        toggleClass(nav, 'is-active');
        toggleClass(btn, 'is-active');
        toggleClass(top, 'is-active');
      }
    });

    btn.addEventListener('click', function(e) {
      toggleClass(nav, 'is-active');
      toggleClass(btn, 'is-active');
      toggleClass(top, 'is-active');
    });
  }
}());
