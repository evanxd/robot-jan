'use strict';

(function() {
  var css = `
div#menu-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 250px;
}

.circular-menu .circular-menu-item .circular-menu-item-anchor {
  background: #81bae5;
  background: -webkit-radial-gradient(transparent 35%, #81bae5 35%);
  background: -moz-radial-gradient(transparent 35%, #81bae5 35%);
  background: radial-gradient(transparent 35%, #81bae5 35%);
}

.cn-button {
  position: absolute;
  top: 100px;
  left: 100px;
  z-index: 11;
  width: 200px;
  height: 200px;
  border: none;
  border-radius: 50%;
  background: none;
  background-color: #fff;
  color: #52be7f;
  text-align: center;
  font-weight: 700;
  font-size: 1.5em;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-backface-visibility: hidden;
}

.circular-menu {
  z-index: 0;
  border-radius: 60%;
  background: transparent;

  -webkit-transition: transform .2s, visibility .2s;
  -moz-transition: transform .2s, visibility .2s;
  transition: transform .2s, visibility .2s;

  -webkit-transform: scale(0.1);
  -moz-transform: scale(0.1);
  -ms-transform: scale(0.1);
  transform: scale(0.1);

  pointer-events: none;
  overflow: hidden;
  visibility: hidden;
}

.circular-menu.opening,
.circular-menu.opened {
  z-index: 65536;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  visibility: visible;
}

.circular-menu:after {
  content: " ";
  display: block;
  width: 50%;
  height: 50%;
  position: absolute;
  left: 25%;
  top:25%;
  border-radius: 60%;
  z-index:10;
  color: transparent;
}

.circular-menu .circular-menu-item {
  position: absolute;
  top: 0%;
  left: 0%;
  overflow: hidden;
  width: 50%;
  height: 50%;
  -webkit-transition: transform .2s;
  -moz-transition: transform .2s;
  transition: transform .2s;
  transform-origin: 100% 100%;
}

.circular-menu .circular-menu-item .circular-menu-item-anchor {
  position: absolute;
  display: block;
  width: 200%;
  height: 200%;
  border-radius: 60%;
  color: #fff;
  text-align: center;
  text-decoration: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  /*line-height: 80px;*/
}

/* only opened can have pointer event */
.circular-menu.opened {
  pointer-events: auto;
}

.circular-menu.opened .circular-menu-item,
.circular-menu.opened .circular-menu-item .circular-menu-item-anchor {
  pointer-events: auto;
  pointer-events: auto;
  cursor: pointer;
  cursor: hand;
}
`;
  var head = document.head;
  var style = document.createElement('style');

  style.id = 'fxos-tamagotchi-style';
  style.type = 'text/css';
  style.textContent = css;
  head.appendChild(style);
  console.log('inject css');
}());
