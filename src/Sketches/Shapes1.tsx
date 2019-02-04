import Sketch, { interfaceDraw } from "../Components/Sketch";
import tooloud from "tooloud";

export default class Lines1 extends Sketch {
  private noiseScale: number;
  constructor(props: any) {
    super(props);
    tooloud.Perlin.setSeed("onion");
    this.noiseScale = 2;
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

      for (let x = 0; x < i; x++) {
        let _x = x % h;
        let _y = Math.floor(x / v);

        const n = tooloud.Perlin.noise(
          (this.noiseScale * (1 + _x)) / h,
          (this.noiseScale * (1 + _y)) / v,
          0
        );

        const angle = n * (Math.PI * 2) + frame * 0.05;

        context.fillStyle = `rgb(64,64,64)`;
        context.beginPath();
        context.arc(
          _x * rx + rx * 0.5,
          _y * ry + ry * 0.5,
          rx * 0.4,
          angle * Math.PI,
          angle * Math.PI + Math.PI,
          false
        );
        context.fill();

        context.fillStyle = `rgb(192,192,192)`;
        context.beginPath();
        context.arc(
          _x * rx + rx * 0.5,
          _y * ry + ry * 0.5,
          rx * 0.4,
          angle * Math.PI,
          angle * Math.PI + Math.PI,
          true
        );
        context.fill();
      }
    }
  }
}
