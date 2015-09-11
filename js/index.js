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

    function changeButtonText() {
      button.textContent = menu.opened ? 'Close' : 'Menu';
    }

    var button = document.getElementById('fxos-tamagotchi');
    var container = document.getElementById('menu-container');
    var menu = new CircularMenu(container);
    menu.marginAngle = 2;
    menu.addItem('aa', 'AAAAAAAAAAAAAAA');
    menu.addItem('bb', 'BBBBBBBBBBBBBBB');
    menu.addItem('cc', 'CCCCCCCCCCCCCCC');
    menu.addItem('dd', 'DDDDDDDDDDDDDDD');
    menu.addItem('ee', 'EEEEEEEEEEEEEEE');
    menu.render();

    changeButtonText();

    button.addEventListener('click', function() {
      console.log('click button');
      if (menu.opened) {
        menu.close().then(changeButtonText);
      } else {
        menu.open().then(changeButtonText);
      }
    });
    console.log('Add-on init');
  }

  // For debugging tamagotchi in runtime.
  exports.tamagotchi = tamagotchi;
}(window));
