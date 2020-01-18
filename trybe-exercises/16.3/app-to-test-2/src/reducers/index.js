import { combineReducers } from "redux";
import ua from './ua';
import ip from './ip';

export default combineReducers({ ip, ua });
