import { AlertState } from "../../interfaces/interfaces";
import { AlertAction } from "../../types/types";

const AlertReducer = (state: AlertState, action: AlertAction): AlertState => {
    switch(action.type){
        case 'SHOW_ALERT':
            return {
                ...state,
                alert: action.payload
            }
        case 'HIDE_ALERT':
            return {
                ...state,
                alert: null
            }
        default:
            return state;
    }
}

export default AlertReducer;