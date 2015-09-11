'use strict';

(function(exports) {
  var ORIGIN = 'app://1d60e1eb-b8bb-4443-8d19-e31bb961c460/manifest.webapp';
  var SPRITE_ID = 'fxos-tamagotchi';
  var CLICK_INTERVAL = 250;
  var HOLD_INTERVAL = 350;
  var MOVE_THRESHOLD = 5;

  function Tamagotchi(stage) {
    this._stage = stage;
    this._sprite = document.createElement('img');
    this._sprite.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABkCAYAAABO6zhfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDI4OEQ0NUM0RjJDMTFFNTk4MTM5QzM4MzIyMDhEMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDI4OEQ0NUQ0RjJDMTFFNTk4MTM5QzM4MzIyMDhEMjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQTJDMDlGRjRFREYxMUU1OTgxMzlDMzgzMjIwOEQyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQTJDMEEwMDRFREYxMUU1OTgxMzlDMzgzMjIwOEQyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Psg5RTsAABGUSURBVHja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';
    this._container = document.createElement('div');
    this._init();
  }

  Tamagotchi.prototype = {
    _stage: null,
    _sprite: null,

    _init: function() {
      this._render();
      this._registerEvents();
    },

    _registerEvents: function() {
      var sprite = this._sprite;
      var container = this._container;
      var taskManager = document.querySelector('#taskManager');
      var screenOff = document.querySelector('#screenOff');
      var timerID;
      var touchStartTimeStamp;
      var touchPosition;
      var moved = false;
      var longPressed = false;

      navigator.mozApps.mgmt.addEventListener('enabledstatechange',
        this._handle_enabledstatechange.bind(this));
      sprite.addEventListener('touchstart', (evt) => {
        touchPosition = {
          'x': evt.touches[0].clientX,
          'y': evt.touches[0].clientY
        };
        moved = false;
        longPressed = false;
        touchStartTimeStamp = new Date();
        timerID = setTimeout(() => {
          var menu = this._menu;
          if (!menu.opened && ! moved) {
            navigator.vibrate(50);
            menu.open().then(() => {});
            longPressed = true;
          }
        }, HOLD_INTERVAL);
      });
      sprite.addEventListener('touchend', () => {
        if (moved || longPressed) {
          return;
        }
        var menu = this._menu;
        var time = new Date() - touchStartTimeStamp;
        if (time < CLICK_INTERVAL) {
          navigator.vibrate(50);
          if (menu.opened) {
            menu.close();
          } else {
            window.dispatchEvent(new CustomEvent('home'));
          }
        }
        if (time < HOLD_INTERVAL) {
          clearTimeout(timerID);
          timerID = -1;
        }
      });
      sprite.addEventListener('touchmove', function(evt) {
        var diffX = touchPosition.x - evt.touches[0].clientX
        var diffY = touchPosition.y - evt.touches[0].clientY
        if (Math.abs(diffX) <= MOVE_THRESHOLD &&
            Math.abs(diffY) <= MOVE_THRESHOLD) {
          return;
        }
        touchPosition = {
          'x': evt.touches[0].clientX,
          'y': evt.touches[0].clientY
        };
        moved = true;
        var spriteTop = sprite.offsetTop - diffY;
        var spriteLeft = sprite.offsetLeft - diffX;
        console.log('spriteTop: ', sprite.offsetTop);
        console.log('diffY: ', diffY);
        sprite.style.bottom = null;
        sprite.style.top = spriteTop + 'px';
        sprite.style.left = spriteLeft + 'px';
        container.style.top = (spriteTop - 83) + 'px';
        container.style.left = (spriteLeft - 61) + 'px';
      });

      taskManager.addEventListener('click', function() {
        window.dispatchEvent(new CustomEvent('holdhome'));
      });

      screenOff.addEventListener('click', function() {
        window.dispatchEvent(new CustomEvent('sleep'));
      });
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
        left: ${left}px;
        bottom: 0;
        z-index: 2147483647;
      `;
      sprite.setAttribute('style', style);
      sprite.setAttribute('data-z-index-level', 'fullscreen-layout-software-home-button');
      this._menu = new CircularMenu(container);
      var menu = this._menu;
      menu.marginAngle = 2;
      menu.addItem('taskManager', 'Task Manager');
      menu.addItem('bb', '');
      menu.addItem('cc', '');
      menu.addItem('dd', '');
      menu.addItem('screenOff', 'Screen Off');
      menu.render();
      container.setAttribute('data-z-index-level', 'fullscreen-layout-software-home-button');
    },

    _destroy: function() {
      var style = document.querySelector('#fxos-tamagotchi-style');
      var sprite = this._sprite;
      var container = this._container;
      sprite.parentNode.removeChild(sprite);
      container.parentNode.removeChild(container);
      style.parentNode.removeChild(style);
    }
  };

  exports.Tamagotchi = Tamagotchi;
}(window));
