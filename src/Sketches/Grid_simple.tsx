import Sketch, { interfaceDraw } from "../Components/Sketch";

export default class Grid1 extends Sketch {
  private cells: number;
  constructor(props: any) {
    super(props);
    this.cells = 25;
  }
  draw(props: interfaceDraw) {
    const { context, width, height, frame } = props;
    if (context) {
      let h: number = this.cells;
      let v: number = Math.floor(h * (height / width));

      let rx: number = width / h;
      let ry: number = height / v;

      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, width, height);

      const i: number = h * v;

      context.fillStyle = "#ff0000";

      for (let counter = 0; counter < i; counter++) {
        const x = counter % h;
        const y = Math.floor(counter / v);

        context.beginPath();
        context.arc(x * rx + rx * 0.5, y * ry + ry * 0.5, 5, 0, Math.PI * 2);
        context.fill();
      }
    }
  }
}
