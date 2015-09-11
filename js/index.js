/* global Tamagotchi */
'use strict';

(function(exports) {
  var tamagotchi;

  if (document.readyState !== 'loading') {
    init();
  } else {
    document.addEventListener('readystatechange', function() {
      document.readyState === 'interactive' && init();
    });
  }

  function init() {
    var screen = document.querySelector('#screen');
    tamagotchi = new Tamagotchi(screen);
    console.log('Add-on init');
  }

  // For debugging tamagotchi in runtime.
  exports.tamagotchi = tamagotchi;
}(window));
