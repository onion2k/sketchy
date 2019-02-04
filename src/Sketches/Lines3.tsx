import Sketch, { interfaceDraw } from "../Components/Sketch";
import tooloud from "tooloud";

export default class Lines1 extends Sketch {
  private noiseScale: number;
  private lineWidth: number;
  private lineLength: number;
  private rSpeed: number;
  private rSpeed2: number;
  constructor(props: any) {
    super(props);
    tooloud.Perlin.setSeed("onion");
    this.noiseScale = 2;
    this.lineWidth = 2;
    this.lineLength = 16;
    this.rSpeed = 0.1;
    this.rSpeed2 = 0.025;
  }
  draw(props: interfaceDraw) {
    const { context, width, height, frame } = props;
    if (context) {
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, width, height);

      let h: number = 50;
      let v: number = Math.floor(h * (height / width));

      let rx: number = width / h;
      let ry: number = height / v;

      const i: number = h * v;
      context.lineWidth = this.lineWidth;
      context.strokeStyle = `rgb(255,64,64)`;

      for (let x = 0; x < i; x++) {
        let _x: number = x % h;
        let _y: number = Math.floor(x / h);

        const xPos: number = 1;
        const yPos: number = 1;

        const angle: number = tooloud.Perlin.noise(
          (this.noiseScale * (xPos + _x)) / h,
          (this.noiseScale * (yPos + _y)) / v,
          0
        );

        const a = angle * Math.PI * 2;
        const sinAngle = Math.sin(a + frame * this.rSpeed) * this.lineLength;
        const cosAngle = Math.cos(a + frame * this.rSpeed) * this.lineLength;

        // const a2 = n * Math.PI * 2 * 2;
        const sinAngle2 =
          Math.sin(a + frame * this.rSpeed2 * angle) * this.lineLength;
        const cosAngle2 =
          Math.cos(a + frame * this.rSpeed2 * angle) * this.lineLength;

        context.beginPath();
        context.moveTo(_x * rx, _y * ry);

        let hue = 256 * angle;
        context.strokeStyle = `hsl(${hue},100%,50%)`;

        context.lineTo(_x * rx + sinAngle, _y * ry + cosAngle);
        context.lineTo(
          _x * rx + sinAngle + sinAngle2,
          _y * ry + cosAngle + cosAngle2
        );
        context.stroke();
      }
    }
  }
}
