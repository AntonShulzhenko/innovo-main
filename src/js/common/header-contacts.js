(function() {
  var mobileContainer   = document.querySelector('.mobile');
  var mobileLink        = mobileContainer.querySelector('.mobile__link');
  var close             = mobileContainer.querySelector('.mobile__close');
  var headerContacts    = document.querySelector('.header__contacts');
  var location          = headerContacts.querySelector('.contacts__item_address');
  var phone             = headerContacts.querySelector('.contacts__item_phone');
  var overlay           = document.querySelector('.overlay');
  var mobAddress        = document.querySelector('.mob-address a');
  var tlOpen            = new TimelineMax();
  var tlClose           = new TimelineMax();
  var animationDuration = 0.4;
  var timingFunction    = 'Power1.easeInOut';
  var winWidth            = window.innerWidth;

  function setMobileAddress() {
    var text = location.querySelector('.contacts__text').innerHTML;
    var href = 'http://maps.google.com?q=' + text;
    var small = '<small>построить маршрут</small>';
    mobAddress.innerHTML = text + small;
    mobAddress.setAttribute('href', href);
  }

  function init() {
    winWidth = window.innerWidth;
  }

  function setLink(el) {
    var text = el.querySelector('.contacts__text').innerHTML;
    var href = 'javascript:void(0)';
    var descr;
    var small;

    if(el.classList.contains('contacts__item_phone')) {
      href = 'tel:' + text;
      descr = 'позвонить';
    } else if(el.classList.contains('contacts__item_address')) {
      href = 'http://maps.google.com?q=' + text;
      descr = 'построить маршрут';
    }

    small = '<small>' + descr + '</small>';

    mobileLink.innerHTML = text + small;
    mobileLink.setAttribute('href', href);
  }

  function clearLink() {
    mobileLink.innerHTML = '';
    mobileLink.setAttribute('href', '');
  }

  function onOpen() {
    tlOpen
      .to(mobileLink, 0, {opacity: 0})
      .to(overlay, 0, {display: 'block', ease: timingFunction})
      .to(overlay, animationDuration, {opacity: 1, ease: timingFunction})
      .to(mobileContainer, animationDuration, {x: 0, opacity: 1, ease: timingFunction})
      .to(mobileLink, animationDuration, {opacity: 1})
      .to(close, 0.2, {opacity: 1});

    setLink(this);

    disableScroll();
  }

  function onClose() {
    tlClose
      .to(mobileContainer, 0.2, {opacity: 0, x: winWidth, ease: timingFunction})
      .to(close, 0, {opacity: 0})
      .to(mobileLink, 0, {opacity: 0})
      .to(overlay, 0.2, {opacity: 0, ease: timingFunction})
      .to(overlay, 0, {display: 'none', ease: timingFunction});

    enableScroll();

    setTimeout(function() {
      clearLink();
    }, 250);
  }

  function bindEvents() {
    location.addEventListener('click', onOpen);
    phone.addEventListener('click', onOpen);
    overlay.addEventListener('click', onClose);
    close.addEventListener('click', onClose);
  }

  init();

  if(winWidth > 1025) return;

  bindEvents();

  setMobileAddress();
}());
