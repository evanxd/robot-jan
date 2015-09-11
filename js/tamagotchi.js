'use strict';

(function(exports) {
  var ORIGIN = 'app://fxos-tamagotchi.gaiamobile.org/manifest.webapp';
  var SPRITE_ID = 'fxos-tamagotchi';
  var CLICK_INTERVAL = 250;
  var HOLD_INTERVAL = 350;

  function Tamagotchi(stage) {
    this._stage = stage;
    this._sprite = document.createElement('button');
    this._container = document.createElement('div');
    this._init();
  }

  Tamagotchi.prototype = {
    _stage: null,
    _sprite: null,

    _init: function() {
      this._registerEvents();
      this._render();
    },

    _registerEvents: function() {
      // var sprite = this._sprite;
      // var timerID;
      // var touchStartTimeStamp;
      navigator.mozApps.mgmt.addEventListener('enabledstatechange',
        this._handle_enabledstatechange.bind(this));
      // sprite.addEventListener('touchstart', function() {
      //   touchStartTimeStamp = new Date();
      //   timerID = setTimeout(function() {
      //     navigator.vibrate(50);
      //     window.dispatchEvent(new CustomEvent('holdhome'));
      //   }, HOLD_INTERVAL);
      // });
      // sprite.addEventListener('touchend', function() {
      //   var time = new Date() - touchStartTimeStamp;
      //   if (time < CLICK_INTERVAL) {
      //     navigator.vibrate(50);
      //     // window.dispatchEvent(new CustomEvent('home'));
      //   }
      //   if (time < HOLD_INTERVAL) {
      //     clearTimeout(timerID);
      //     timerID = -1;
      //   }
      // });
      // sprite.addEventListener('touchmove', function(evt) {
      //   var clientX = evt.touches[0].clientX - (sprite.offsetWidth / 2);
      //   var clientY = evt.touches[0].clientY - (sprite.offsetHeight / 2);
      //   sprite.style.bottom = null;
      //   sprite.style.top = clientY + 'px';
      //   sprite.style.left = clientX + 'px';
      // });
    },

    _handle_enabledstatechange: function(evt) {
      var app = evt.application;
      if (app.manifestURL !== ORIGIN) {
        return;
      }
      !app.enabled && this._destroy();
    },

    _render: function() {
      var sprite = this._sprite;
      var container = this._container;
      sprite.id = SPRITE_ID;
      this._stage.appendChild(sprite);
      container.id = 'menu-container';
      this._stage.appendChild(container);
      var left = (screen.width / 2) - 36;
      var style = `
        position: fixed;
        padding: 0.3rem;
        bottom: 0;
        left: ${left}px;
        z-index: 2147483647;
        border-radius: 1rem;
        box-shadow: 0.1rem 0.1rem 0.1rem #000000;
        background-color: rgba(255, 255, 255, 0.5);
        color: #000000;
        font-size: 2rem;
      `;
      sprite.setAttribute('style', style);
    },

    _destroy: function() {
      var sprite = this._sprite;
      var container = this._container;
      sprite.parentNode.removeChild(sprite);
      container.parentNode.removeChild(container);
    }
  };

  exports.Tamagotchi = Tamagotchi;
}(window));
