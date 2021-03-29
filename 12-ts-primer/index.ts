let loading = false;
let x:number = 6;
let color = "red";

let list: (number | string )[] = [1, 2, 3, "string"];
let list2: Array<number> = [1, 2, 3];

let tuple: [string, number];

tuple = ["121212", 22];

let value:any = 2;
(value as number).toFixed();

function add(x: number, y: number): number {
  return x + y;
}

add(1, 2);