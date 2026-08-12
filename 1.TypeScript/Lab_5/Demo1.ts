// Destructuring: Phá vỡ cấu trúc

let account = {
  id: 1,
  name: "daonq",
  balance: 1000,
};

// Hãy tách giá trị của mỗi thuộc tính của account ra các biến riêng biệt

// let v_id= account.id;
// let v_name= account.name;
// let v_balance= account.balance;

// Viết theo destructuring
let { id: v_id, name: v_name, balance: v_balance } = account;
console.log(`id: ${v_id}, name: ${v_name}, balance: ${v_balance}`);

// Mảng
let name_railway = ["daonq", "Giang", "Hào"];

// let student1 = name_railway[0];
// let student2 = name_railway[1];
// let student3 = name_railway[2];

// Viết theo destructuring
let [student1, student2, student3] = name_railway;
console.log(`student1: ${student1}, student2: ${student2}, student3: ${student3}`);

// ... spread operator: toán tử trải
// let mentors = {
//     id: 1,
//     name: "daonq",
//     balance: 1000,
//     address: "Hà Nội",
//     age: 30
// }

let mentors = {
  ...account,
  address: "Hà Nội",
  age: 30,
};

console.log(mentors);
