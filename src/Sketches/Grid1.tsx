import Sketch, { interfaceDraw } from "../Components/Sketch";

export default class Grid1 extends Sketch {
  private cells: number;
  private margin: number;
  private lineWidth: number;
  private r: number;
  constructor(props: any) {
    super(props);
    this.cells = 6;
    this.margin = 5;
    this.lineWidth = 4;
    this.r = 0;
  }
  draw(options: interfaceDraw) {
    const { context, width, height, frame } = options;
    if (context) {
      const xPos = width / this.cells;
      const yPos = height / this.cells;

      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, width, height);

      for (let i = 0; i < this.cells * this.cells; i++) {
        const x = i % this.cells;
        const y = Math.floor(i / this.cells);
        context.beginPath();
        context.translate(x * xPos + xPos * 0.5, y * yPos + yPos * 0.5);
        context.rotate((frame * 0.5 * Math.PI) / 180);
        context.rect(
          (xPos - this.margin) * -0.5,
          (yPos - this.margin) * -0.5,
          xPos - this.margin,
          yPos - this.margin
        );
        context.fillStyle = "#FFFFFF";
        context.fill();
        context.strokeStyle = "#000000";
        context.lineWidth = this.lineWidth;
        context.stroke();
        context.resetTransform();

        context.beginPath();
        let offset = x * y * 10;
        context.translate(x * xPos + xPos * 0.5, y * yPos + yPos * 0.5);
        context.rotate((offset + (360 - frame * 2) * Math.PI) / 180);
        context.rect(
          xPos * -0.4 + xPos * 0.2,
          yPos * -0.4 + yPos * 0.2,
          xPos * 0.4,
          yPos * 0.4
        );
        context.fillStyle = "#ff0000";
        context.fill();
        context.strokeStyle = "#00ff00";
        context.stroke();
        context.resetTransform();
      }
    }
  }
}
