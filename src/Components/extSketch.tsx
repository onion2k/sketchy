import Sketch from "./Sketch";

export default class extendedSketch extends Sketch {
  renderSketch() {
    if (this.state.context) {
      this.state.context.fillStyle = "rgb(255,64,64)";
      this.state.context.fillRect(0, 0, 800, 800);
    }
  }
}
