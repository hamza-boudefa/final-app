import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { addNewUserReducer, getUserDetailsReducer, loginReducer} from "./reducers/userReducers";
import { addNewProductReducer, deleteProductReducer, getProductReducer } from "./reducers/productReducer";


const reducer=combineReducers({
    addNewUser:addNewUserReducer,
    loginDetails:loginReducer,
    getUserDetails:getUserDetailsReducer,
    getProduct:getProductReducer,
    addNewProduct:addNewProductReducer,
    deleteProduct:deleteProductReducer

   
})

const fromLocalStorage=localStorage.getItem('cred') ? JSON.parse(localStorage.getItem('cred')) : null

const initState={
    loginDetails:{user:fromLocalStorage}
}


const store=createStore(reducer,initState,composeWithDevTools(applyMiddleware(thunk)))


export default store