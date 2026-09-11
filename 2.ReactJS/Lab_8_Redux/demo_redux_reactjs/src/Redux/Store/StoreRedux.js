// Bước 1 tạo Store của redux
import { createStore } from 'redux';
import RootReducer from '../Reducers/rootReducer';
export let store = createStore(RootReducer)