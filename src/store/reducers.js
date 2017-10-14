import { combineReducers } from 'redux';
import { HomeReducer as home } from '../routes/Home/modules/home';
 const makeRootReducers = () => {

    return combineReducers({
        home
    });
}
export default makeRootReducers;