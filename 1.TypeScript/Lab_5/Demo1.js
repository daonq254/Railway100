// Destructuring: Phá vỡ cấu trúc
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var account = {
    id: 1,
    name: "daonq",
    balance: 1000,
};
// Hãy tách giá trị của mỗi thuộc tính của account ra các biến riêng biệt
// let v_id= account.id;
// let v_name= account.name;
// let v_balance= account.balance;
// Viết theo destructuring
var v_id = account.id, v_name = account.name, v_balance = account.balance;
console.log("id: ".concat(v_id, ", name: ").concat(v_name, ", balance: ").concat(v_balance));
// Mảng
var name_railway = ["daonq", "Giang", "Hào"];
// let student1 = name_railway[0];
// let student2 = name_railway[1];
// let student3 = name_railway[2];
// Viết theo destructuring
var student1 = name_railway[0], student2 = name_railway[1], student3 = name_railway[2];
console.log("student1: ".concat(student1, ", student2: ").concat(student2, ", student3: ").concat(student3));
// ... spread operator: toán tử trải
// let mentors = {
//     id: 1,
//     name: "daonq",
//     balance: 1000,
//     address: "Hà Nội",
//     age: 30
// }
var mentors = __assign(__assign({}, account), { address: "Hà Nội", age: 30 });
console.log(mentors);
