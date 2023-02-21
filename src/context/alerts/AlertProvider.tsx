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
    const showAlert = (msg: string, category: string) : void => {
        dispatch({
            type: 'SHOW_ALERT',
            payload: {
                msg,
                category
            }
        });

        // Hide alert after 5s
        setTimeout(() => {
            dispatch({
                type: 'HIDE_ALERT',
                payload: {}
            });
        }, 4000);
    }

    return (
        <AlertContext.Provider
            value={{
                alertState,
                showAlert
            }}
        >
            { children }
        </AlertContext.Provider>
    );

}

export default AlertProvider;