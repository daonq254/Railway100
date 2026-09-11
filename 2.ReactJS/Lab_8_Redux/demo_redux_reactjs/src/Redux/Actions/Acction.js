import { ADD_ACCOUNT, CLOSE_FORM, SHOW_FORM } from "../Constants/ActionType";

export let actionShowInputForm = () => {
    return {
        type: SHOW_FORM
    }
}

export let actionCloseInputForm = () => {
    return {
        type: CLOSE_FORM
    }
}

// export let actionAddAccount1 = {
//     type: ADD_ACCOUNT,
//     account: {
//         id: 1,
//         username: "daonq1",
//         fullname: "NguyenDao1"
//     }
// }


// export let actionAddAccount2 = {
//     type: ADD_ACCOUNT,
//     account: {
//         id: 2,
//         username: "daonq2",
//         fullname: "NguyenDao2"
//     }
// }

export let actionAddAccount = (account_new) => {
    return {
        type: ADD_ACCOUNT,
        account: account_new
    }
}