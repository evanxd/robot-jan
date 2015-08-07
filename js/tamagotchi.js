'use strict';

(function(exports) {
  var ORIGIN = 'app://fxos-tamagotchi.gaiamobile.org/manifest.webapp';
  var SPRITE_ID = 'fxos-tamagotchi';

  function Tamagotchi(stage) {
    this._stage = stage;
    this._render();
    navigator.mozApps.mgmt.addEventListener('enabledstatechange', this);
  }

  Tamagotchi.prototype = {
    _stage: null,

    handleEvent: function(evt) {
      var app = evt.application;
      if (app.manifestURL !== ORIGIN) {
        return;
      }
      switch(evt.type) {
        case 'enabledstatechange':
          !app.enabled && this._destroy();
          break;
      }
    },

    _render: function() {
      var sprite = document.createElement('div');
      sprite.innerHTML = 'ʕ◕ᴥ◕ʔ';
      var style = `
        position: fixed;
        bottom: 0;
        padding: 0.3rem;
        z-index: 2147483647;
        border-radius: 1rem;
        box-shadow: 0.1rem 0.1rem 0.1rem #000000;
        background-color: rgba(255, 255, 255, 0.5);
        color: #000000;
        font-size: 2rem;
      `
      sprite.setAttribute('style', style);
      sprite.setAttribute('id', SPRITE_ID);
      this._stage.appendChild(sprite);
    },

    _destroy: function() {
      var sprite = document.querySelector('#' + SPRITE_ID);
      sprite.parentNode.removeChild(sprite);
    }
  };

  exports.Tamagotchi = Tamagotchi;
}(window));
