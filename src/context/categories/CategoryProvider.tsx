import { useReducer } from 'react';

import CategoryContext from './CategoryContext';
import CategoryReducer from './CategoryReducer';

// import clientAxios from '../../config/Axios';
import { CategoryState } from '../../interfaces/interfaces';

interface props {
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: CategoryState = {
    categories : [],
    category: null
}

const CategoryProvider = ( { children } : props) => {

    // Dispatch for ejecute actions
    const [ categoryState, dispatch ] = useReducer(CategoryReducer, INITIAL_STATE);
    
    const getCategories = (): void => {
        try {
            // const response = await clientAxios.get('/api/categories');
            const listCategories: CategoryState["categories"] = [
                {
                    id: 1,
                    name: 'SWEETS',
                    active: 1,
                    image: '',
                    background_color: '#000000'
                },
                /* {
                    id: 2,
                    name: 'ICE CREAMS',
                    active: 1,
                    image: '',
                    background_color: '#000000'
                },
                {
                    id: 3,
                    name: 'POPCORN',
                    active: 1,
                    image: '',
                    background_color: '#000000'
                }, */
                {
                    id: 4,
                    name: 'DRINKS',
                    active: 1,
                    image: '',
                    background_color: '#000000'
                },
            ];
            dispatch({
                type: 'GET_CATEGORIES',
                payload: listCategories
            });
        } catch (error) {
            console.error(error);
            /* const alert = {
                msg: 'Ops! Something failed',
                category: 'alert-error'
            };
            dispatch({
                type: ERROR_PROJECT,
                payload: alert
            }); */
        }
    }

    const selectCategory = (idCategory: number): void => {
        dispatch({
            type: 'SELECT_CATEGORY',
            payload: {
                idCategory
            }
        });
    }

    return (
        <CategoryContext.Provider
            value={{
                categoryState,
                getCategories,
                selectCategory
            }}
        >
            { children }
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;