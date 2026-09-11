import { combineReducers } from "redux";
import { formReducer } from './formReducer';

const RootReducers = combineReducers({
    // Add your reducers here
    formState: formReducer
});

export default RootReducers;


