//menggabungkan objek state
import { combineReducers } from "redux";
import counter from "./counter";

//objek yang sudah digabung
export default combineReducers({ counter });
