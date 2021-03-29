// let loading = false;
// let x:number = 6;
// let color = "red";

// let list: (number | string )[] = [1, 2, 3, "string"];
// let list2: Array<number> = [1, 2, 3];

// let tuple: [string, number];

// tuple = ["121212", 22];

// let value:any = 2;
// (value as number).toFixed();

// function add(x: number, y: number): number {
//   return x + y;
// }

// add(1, 2);

// type Shape = {
//   color: string;
//   size?: number;
// }

// function newShape(options: Shape): void {
//   console.log(options.color);
//   console.log(options.size?.toFixed());
// }

// newShape({color: "123"});

// type TriangleTypes = "equilateral" | "isosceles" | "right-angled";

// type Triangle = {
//   type: TriangleTypes;
//   onCreate: (type: TriangleTypes) => void;
// } & Shape;

// function newTriangle(options: Triangle) {
//   console.log(options);
//   options.onCreate(options.type);
// }

// newTriangle({color: "red", type: "equilateral", onCreate: (type) => {
//   console.log(type === "equilateral")
// }})

function generic<T>(arg: T): T {
  return arg;
}

// const [loading, setLoading] = useState<boolean>(false);
// setLoading("asas")