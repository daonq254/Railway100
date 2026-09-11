import { combineReducers } from "redux";
import { formReducer } from "./formReducer";
import { accountReducer } from "./accountReducer";


let RootReducer = combineReducers({
    formState: formReducer,
    accountState: accountReducer
});

export default RootReducer;


