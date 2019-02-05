import Sketch, { interfaceDraw } from "../Components/Sketch";
import tooloud from "tooloud";

export default class Lines1 extends Sketch {
  private noiseScale: number;
  private vScale: number;
  constructor(props: any) {
    super(props);
    tooloud.Perlin.setSeed("onion");
    this.noiseScale = 5;
    this.vScale = 40;
  }
  draw(props: interfaceDraw) {
    const { context, width, height, frame, image } = props;
    if (context) {
      if (image) {
        context.save();
        context.globalAlpha = 0.8;
        context.drawImage(
          image,
          0,
          0,
          width,
          height,
          -20,
          -20,
          width + 40,
          height + 40
        );
        context.restore();
      }
      let h: number = 50;
      let v: number = Math.floor(h * (height / width));

      let rx: number = width / h;
      let ry: number = height / v;

      const i: number = h * v;

      context.beginPath();

      for (let x = 0; x < i; x++) {
        let _x = x % h;
        let _y = Math.floor(x / v);

        if (_x === 0 && _y > 0) {
          context.lineTo(h * rx, (_y - 1) * ry);
          context.lineTo(h * rx, (_y - 1) * ry + ry * 2.5);
          context.lineTo(0, (_y - 1) * ry + ry * 2.5);
          context.strokeStyle = `hsl(${_y * 7},100%,50%)`;
          context.stroke();
          context.beginPath();
          context.moveTo(-20, _y * ry);
        }

        const n = tooloud.Perlin.noise(
          (this.noiseScale * (1 + _x)) / h,
          (this.noiseScale * (1 + _y)) / v,
          0
        );

        const angle = n * (Math.PI * 2);

        context.lineTo(
          _x * rx + Math.sin(angle) * Math.sin(frame * 0.02) * this.vScale,
          _y * ry + Math.cos(angle) * Math.cos(frame * 0.02) * this.vScale
        );
      }

      context.lineTo(h * rx, v * ry + ry * 0.5);
      context.lineTo(h * rx, v * ry + ry * 2.5);
      context.lineTo(0, v * ry + ry * 2.5);
      context.strokeStyle = `rgb(${v * 7},64,64)`;
      context.stroke();
    }
  }
}
