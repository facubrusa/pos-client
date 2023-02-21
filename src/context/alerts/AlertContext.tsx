import { createContext } from 'react';
import { AlertContextProps } from '../../interfaces/interfaces';

const AlertContext = createContext<AlertContextProps>({} as AlertContextProps);

export default AlertContext;