// Khai báo hàm trong jS
// Cách 1:
// function sum(a: number, b: number): number {
//   return a + b;
// }

// Cách 2: Tạo 1 biến tham chiếu đến hàm
// let v_sum = function (a: number, b: number): number {
//   return a + b;
// }

// Cách 3: Sử dụng arrow function
// let v_sum_arrow =(a:number, b:number) =>{
//      logic
//      logic
//     return a + b;
// }
let v_sum_arrow =(a:number, b:number) => a+b;



let resutl =v_sum_arrow(5, 10);
console.log(`The sum of 5 and 10 is: ${resutl}`);