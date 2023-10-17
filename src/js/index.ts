import "phaser";
import LoaderScene from "./scenes/LoaderScene";
import GameScene from "./scenes/GameScene";
import PlayScene from "./scenes/PlayScene";
import PreloadScene from "./scenes/PreloadScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1000,
  height: 340,
  zoom: 1,
  input: {
    keyboard: true,
    gamepad: true,
  },
  render: {
    pixelArt: true,
    antialias: false,
    antialiasGL: false,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: {
        y: 500,
      },
    },
  },
  scene: [PreloadScene, PlayScene],
};

window.addEventListener("load", () => new Phaser.Game(config));
