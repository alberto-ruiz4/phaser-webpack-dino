
import Phaser from 'phaser';

import PlayScene from './js/scenes/PlayScene';
import PreloadScene from './js/scenes/PreloadScene';

const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 340,
  pixelArt: true,
  transparent: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  scene: [PreloadScene, PlayScene]
};

new Phaser.Game(config);
