import Sketch, { interfaceDraw } from "../Components/Sketch";
import tooloud from "tooloud";

export default class Lines1 extends Sketch {
  private noiseScale: number;
  private lineWidth: number;
  private lineLength: number;
  constructor(props: any) {
    super(props);
    tooloud.Perlin.setSeed("onion");
    this.noiseScale = 2;
    this.lineWidth = 1;
    this.lineLength = 15;
  }
  draw(props: interfaceDraw) {
    const { context, width, height, frame } = props;
    if (context) {
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, width, height);

      let h: number = 100;
      let v: number = Math.floor(h * (height / width));

      let rx: number = width / h;
      let ry: number = height / v;

      const i: number = h * v;
      context.lineWidth = this.lineWidth;
      context.strokeStyle = `rgb(255,64,64)`;

      for (let x = 0; x < i; x++) {
        let _x: number = x % h;
        let _y: number = Math.floor(x / h);

        const xPos: number = 1 + frame * 0.1;
        const yPos: number = 1 + frame * 0.1;

        const angle: number = tooloud.Perlin.noise(
          (this.noiseScale * (xPos + _x)) / h,
          (this.noiseScale * (yPos + _y)) / v,
          0
        );

        context.beginPath();
        context.moveTo(
          _x * rx + rx * 0.5 - Math.sin(angle) * this.lineLength,
          _y * ry + ry * 0.5 - Math.cos(angle) * this.lineLength
        );

        context.lineTo(
          _x * rx + rx * 0.5 + Math.sin(angle) * this.lineLength,
          _y * ry + ry * 0.5 + Math.cos(angle) * this.lineLength
        );
        context.stroke();
      }
    }
  }
}
