var loader = (function() {
  var ldr = document.getElementById('loader');
  var loaderProgress = document.querySelector('.loader__inner', ldr);
  var progressBar = document.querySelector('.pace-progress');
  var progressValue;

  var intervalID = setInterval(function() {
    progressValue = progressBar.dataset.progressText;
    loaderProgress.style.width = progressValue;
  }, 50);


  Pace.on('hide', function() {
    ldr.classList.add('fadeOut');

    clearInterval(intervalID);

    setTimeout(function() {
      ldr.classList.add('hidden');
    }, 500);
  });
})();
