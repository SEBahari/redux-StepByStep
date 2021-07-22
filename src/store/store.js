import { combineReducers, createStore } from "redux";

/********************************* import reducers *********************************/
import todoReducer from "./Todo.Reducer/Todo.Reducer";

/********************************* combine reducers *********************************/
const rootReducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(rootReducer);

export default store;