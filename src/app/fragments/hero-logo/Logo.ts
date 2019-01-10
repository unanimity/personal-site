class Point {
  public x: number;
  public y: number;
  constructor(X: number, Y: number) {
    this.x = X;
    this.y = Y;
  }
}

// class Vector extends Point {
//   constructor(X:number,Y:number)
//   {
//     super(x,y);
//   }
// }


export class Logo {
  canvas;
   direction = new Point(10, 10);
  disperce = 30; // radian
  renge = 30; // px circle range

    init (DOM_ID: string) {
      this.canvas =  document.getElementById(DOM_ID);

    }

    test () {

      let ctx = this.canvas.getContext('2d');

      ctx.fillStyle = 'green';
      this.triangle(new Point(10, 5), new Point(30, 100), new Point (70, 30));
      this.grid_triangle(new Point(30, 100), new Point (70, 30));
    }


    rotation (V: Point, alpha: number) {
      alpha = 180 * alpha / 3.1415;
      let R = new Point (
        (Math.round(V.x * Math.cos(alpha) + V.y * Math.sin(alpha))),
        (Math.round(V.y * Math.cos(alpha) + V.x * Math.sin(alpha)))
        );
        this.p_log('R', R);
      return R;
    }
    grid_triangle(A: Point, B: Point) {
      let C = new Point (70, 30);
      let AB = new Point (B.x - A.x, B.y - A.y);
      let A_direction = new Point (A.x - this.direction.x, A.y - this.direction.y);
        console.log('Math=' + Math.cos(3));


      C = this.rotation(AB, 270);
      this.p_log('A', A);
      this.p_log('B', B);
      this.p_log('C', C);


      this.triangle(A, B, C);
    }


    triangle (A: Point, B: Point, C: Point ) {
      let ctx = this.canvas.getContext('2d');
      ctx.fillStyle = 'red';
      ctx.moveTo(A.x, A.y);
      ctx.lineTo(B.x, B.y);
      ctx.stroke();
      ctx.moveTo(B.x, B.y);
      ctx.lineTo(C.x, C.y);
      ctx.stroke();
      ctx.moveTo(C.x, C.y);
      ctx.lineTo(A.x, A.y);
      console.log('C.x' + C.x);
      ctx.stroke();
    }
    p_log(S: string, V: Point) {
      console.log(S + '= [' + V.x + ';' + V.y + '] \n');

    }
}
