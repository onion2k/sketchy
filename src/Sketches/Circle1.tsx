import Sketch, { interfaceDraw } from "../Components/Sketch";
import tooloud from "tooloud";

export default class Grid1 extends Sketch {
  private noiseScale: number;
  private cells: number;
  private margin: number;
  private lineWidth: number;
  private r: number;
  constructor(props: any) {
    super(props);
    tooloud.Perlin.setSeed("onion");
    this.cells = 6;
    this.margin = 5;
    this.lineWidth = 4;
    this.noiseScale = 3;
    this.r = 0;
  }
  draw(props: interfaceDraw) {
    const { context, width, height, frame, image } = props;
    if (context) {
      let h: number = 40;
      let v: number = Math.floor(h * (height / width));

      let rx: number = width / h;
      let ry: number = height / v;

      if (image) {
        context.save();
        context.globalAlpha = 0.95;
        context.translate(
          h * 0.5 * rx + Math.sin(frame * 0.1) * 5,
          v * 0.5 * ry + Math.sin(frame * 0.1) * 5
        );
        context.rotate((Math.sin(frame * 0.2) * Math.PI) / 180);
        context.drawImage(
          image,
          0,
          0,
          width,
          height,
          width * -0.5 + -8,
          height * -0.5 + -8,
          width + 16,
          height + 16
        );
        context.restore();
        context.resetTransform();
      }

      const i: number = h * v;

      for (let counter = 0; counter < i; counter++) {
        const x = counter % h;
        const y = Math.floor(counter / v);
        context.beginPath();
        context.arc(
          x * rx + rx * 0.5 + Math.sin(frame * 0.1) * 5,
          y * ry + ry * 0.5 + Math.cos(frame * 0.1) * 5,
          3,
          0,
          Math.PI * 2
        );

        const angle: number = tooloud.Perlin.noise(
          (this.noiseScale * x) / h,
          (this.noiseScale * y) / v,
          0
        );

        let hue = 360 * angle;
        context.fillStyle = `hsl(${hue},100%,50%)`;
        context.fill();
      }
    }
  }
}
