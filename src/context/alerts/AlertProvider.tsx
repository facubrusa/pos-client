import { useReducer } from 'react';

import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';

import { AlertState } from '../../interfaces/interfaces';

interface props {
    children: JSX.Element | JSX.Element[]
}

const AlertProvider = ( { children } : props) => {
    const initialState: AlertState = { 
        alert: null
    };

    const [ alertState, dispatch] = useReducer(AlertReducer, initialState);

    // Functions
    const showAlert = (alert: AlertState["alert"]) : void => {
        if (alert) {
            dispatch({
                type: 'SHOW_ALERT',
                payload: {
                    alert
                }
            });

            // Clean alert after 1ms
            setTimeout(() => {
                dispatch({
                    type: 'HIDE_ALERT',
                    payload: {}
                });
            }, 100); 
        }
    }

    return (
        <AlertContext.Provider
            value={{
                alert: alertState["alert"],
                showAlert
            }}
        >
            { children }
        </AlertContext.Provider>
    );

}

export default AlertProvider;