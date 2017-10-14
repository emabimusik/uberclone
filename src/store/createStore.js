import { createStore, applyMiddleware, compose } from "redux";
import createSocketIoMiddleware from 'redux-socket.io';
import thunk from "redux-thunk";
import io from "socket.io-client/dist/socket.io";

import makeRootReducer from './reducers';
import { createLogger } from "redux-logger";
let  socket = io('http://localhost:3000',{jsonp:false});
let socketIoMiddleware = createSocketIoMiddleware(socket,'server/');
const log = createLogger({
    diff: true, collapsed: true
});
// a function that can create our store and persiste the data
export default (initialState = {}) => {

    //================================================
    // Middleware Configuaration
    //============================================
    const middleware = [thunk, log,socketIoMiddleware];
    //================================================
    // Store enhancers
    //============================================
    const enhancers = [];
    //================================================
    //Store Inatallation
    //============================================

    const store = createStore (

        makeRootReducer(),
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancers
        )


    );
    return store;

}