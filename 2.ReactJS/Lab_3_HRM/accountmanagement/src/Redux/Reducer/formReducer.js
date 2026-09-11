// Bước 3: Khai báo các State cần quản lý
let initialState = {
    showForm: true
}

// Bước 2 tạo Reducer
export let formReducer = (state = initialState, action) => {

    switch (action.type) {
        // case SHOW_FORM:
        //     // 
        //     // 
        //     return {
        //         ...state,
        //         showForm: true
        //     }

        // case CLOSE_FORM:
        //     // 
        //     // 
        //     return {
        //         ...state,
        //         showForm: false
        //     }

        default:
            return state;
    }
}