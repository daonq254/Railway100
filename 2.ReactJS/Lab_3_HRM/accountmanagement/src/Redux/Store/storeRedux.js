import { createStore } from "redux";
import RootReducers from "../Reducer/rootReducer";

const storeRedux = createStore(RootReducers);

export default storeRedux;


