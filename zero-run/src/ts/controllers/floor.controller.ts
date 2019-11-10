import Game from "@controllers/game.controller";
import GameObject from "@global/game-object.class";

import * as floorAsset from "@values/floor.assets.json";
import {renderParallax} from "@utils/render.util";

class Floor extends GameObject {
  private x: number = 0;
  private speed: number = 8;

  public constructor() {
    super(floorAsset.path);
  };

  public render = () => {
    this.x = renderParallax(
      this.ctx,
      this.asset,
      this.speed,
      this.x,
      (this.canvas.height - 20),
      this.canvas.width,
      this.asset.height,
    );
  };

}

export default Floor;
