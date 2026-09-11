console.log("Demo Redux Core!!");

import { createStore } from "redux";
import { ADD_ACCOUNT, CLOSE_FORM, SHOW_FORM } from "./Constants/ActionType";
import RootReducer from "./Reducers/rootReducer";

// // Bước 3: Khai báo các State cần quản lý
// let initialState = {
//     showForm: false,
//     listAccount: []
// }

// // Bước 2 tạo Reducer
// let reducer = (state = initialState, action) => {

//     switch (action.type) {
//         case SHOW_FORM:
//             // 
//             // 
//             return {
//                 ...state,
//                 showForm: true
//             }

//         case CLOSE_FORM:
//             // 
//             // 
//             return {
//                 ...state,
//                 showForm: false
//             }

//         case "ADD_ACCOUNT":
//             // action.account
//             // 

//             return {
//                 ...state,
//                 listAccount: [...state.listAccount, action.account]
//             }

//         default:
//             return state;
//     }
// }

// Bước 1 tạo Store của redux
let store = createStore(RootReducer)

// Bước 4: Khai báo Action
let actionShowInputForm = {
    type: SHOW_FORM
}
// Demo khi người dùng nhấn nút Create Account để ẩn hiện InputForm
console.log("State showForm trước khi được thay đổi bởi Redux: ", store.getState());  // false

store.dispatch(actionShowInputForm);

console.log("State showForm trước khi được thay đổi bởi Redux: ", store.getState()); // true


// Bước 4: Khai báo Action
let actionCloseInputForm = {
    type: CLOSE_FORM
}
store.dispatch(actionCloseInputForm);

console.log("State showForm trước khi được thay đổi bởi Redux: ", store.getState()); // false

// Khai báo action để thêm Account vào listAccount
let actionAddAccount1 = {
    type: ADD_ACCOUNT,
    account: {
        id: 1,
        username: "daonq1",
        fullname: "NguyenDao1"
    }
}

let actionAddAccount2 = {
    type: ADD_ACCOUNT,
    account: {
        id: 2,
        username: "daonq2",
        fullname: "NguyenDao2"
    }
}
store.dispatch(actionAddAccount1);
store.dispatch(actionAddAccount2);
console.log("State listAccount sau khi được thay đổi bởi Redux: ", store.getState()); // false