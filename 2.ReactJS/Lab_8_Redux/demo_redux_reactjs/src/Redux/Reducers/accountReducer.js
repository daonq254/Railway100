import { ADD_ACCOUNT } from "../Constants/ActionType";

// Bước 3: Khai báo các State cần quản lý
let initialState = {
    listAccount: []
}

// Bước 2 tạo Reducer
export let accountReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ACCOUNT:
            // action.account
            // 

            return {
                ...state,
                listAccount: [...state.listAccount, action.account]
            }

        default:
            return state;
    }
}