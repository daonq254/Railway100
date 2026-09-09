console.log("Demo Redux Core!!");

import { createStore } from "redux";

// Bước 3: Khai báo các State cần quản lý
let initialState = {
    showForm: false,
    listAccount: []
}

// Bước 2 tạo Reducer
let reducer = (state = initialState, action) => {

    switch (action.type) {
        case "SHOW_FORM":
            // 
            // 
            return {
                ...state,
                showForm: true
            }

        case "CLOSE_FORM":
            // 
            // 
            return {
                ...state,
                showForm: false
            }

        default:
            return state;
    }
}

// Bước 1 tạo Store của redux
let store = createStore(reducer)

// Bước 4: Khai báo Action
let actionShowInputForm = {
    type: "SHOW_FORM"
}
// Demo khi người dùng nhấn nút Create Account để ẩn hiện InputForm
console.log("State showForm trước khi được thay đổi bởi Redux: ", store.getState());  // false

store.dispatch(actionShowInputForm);

console.log("State showForm trước khi được thay đổi bởi Redux: ", store.getState()); // true


// Bước 4: Khai báo Action
let actionCloseInputForm = {
    type: "CLOSE_FORM"
}
store.dispatch(actionCloseInputForm);

console.log("State showForm trước khi được thay đổi bởi Redux: ", store.getState()); // false
