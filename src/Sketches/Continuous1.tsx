import Sketch, { interfaceDraw } from "../Components/Sketch";
import tooloud from "tooloud";

export default class Lines1 extends Sketch {
  private noiseScale: number;
  private lineWidth: number;
  private vScale: number;
  constructor(props: any) {
    super(props);
    tooloud.Perlin.setSeed("onion");
    this.noiseScale = 4;
    this.lineWidth = 2;
    this.vScale = 15;
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

      context.beginPath();

      for (let x = 0; x < i; x++) {
        let _x = x % h;
        let _y = Math.floor(x / v);

        if (_x === 0) {
          context.stroke();
          context.beginPath();
        }

        const n = tooloud.Perlin.noise(
          (this.noiseScale * (1 + _x)) / h,
          (this.noiseScale * (1 + _y)) / v,
          0
        );

        const angle = n * (Math.PI * 2);

        context.lineTo(
          _x * rx + rx * 0.5 + Math.sin(angle) * this.vScale,
          _y * ry + ry * 0.5 + Math.cos(angle) * this.vScale
        );
      }

      context.stroke();
    }
  }
}
