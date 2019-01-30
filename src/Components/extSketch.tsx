import Sketch from "./Sketch";

export default class extendedSketch extends Sketch {
  renderSketch(context: CanvasRenderingContext2D) {
    if (context) {
      context.fillStyle = "rgb(255,64,64)";
      context.fillRect(0, 0, 800, 800);

      const x = Math.sin(this.frame * 0.05);

      context.fillStyle = "rgb(64,64,64)";
      context.beginPath();
      context.arc(400 - x * 200, 400, 20, 0, Math.PI * 2);
      context.fill();
    }
  }
}
