import { useReducer } from 'react';

import ProductContext from './ProductContext';
import ProductReducer from './ProductReducer';

// import clientAxios from '../../config/Axios';
import { Preference, ProductState } from '../../interfaces/interfaces';

interface props {
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: ProductState = {
    products: [],
    product: null,
    selectedpreferences: []
}

const ProductProvider = ( { children } : props) => {

    // Dispatch for ejecute actions
    const [ productState, dispatch ] = useReducer(ProductReducer, INITIAL_STATE);
    
    const getProducts = (idCategory: number) : void => {
        try {
            // const response = await clientAxios.get('/api/products', { params: { idCategory }});
            const listProducts: ProductState["products"] = [
                {
                    id: 1,
                    name: 'CHOCOLATE',
                    description: '',
                    barcode: 'COD1',
                    price: 10,
                    active: 1,
                    stock: 10,
                    image: '',
                    background_color: '#ffffff',
                    category_id: 1,
                    selected_quantity: 1,
                    groups_preference: [
                        {
                            id: 1,
                            max_quantity: 1,
                            name: 'Group Sweets 1',
                            minimum_required: 0,
                            preferences: [
                                {
                                    id: 1,
                                    name: 'SWEET',
                                    added: 10,
                                    active: 1,
                                    stock: 5,
                                    max_quantity_selectable: 1,
                                    selected_quantity: 0,
                                    group_preference_id: 1
                                },
                                {
                                    id: 2,
                                    name: 'SALTY',
                                    added: 20,
                                    active: 1,
                                    stock: 5,
                                    max_quantity_selectable: 1,
                                    selected_quantity: 0,
                                    group_preference_id: 1
                                },
                                {
                                    id: 3,
                                    name: 'MIXED',
                                    added: 30,
                                    active: 1,
                                    stock: 5,
                                    max_quantity_selectable: 1,
                                    selected_quantity: 0,
                                    group_preference_id: 1
                                }
                            ]
                        },
                        {
                            id: 2,
                            max_quantity: -1,
                            name: 'Group 2',
                            minimum_required: 1,
                            preferences: [
                                {
                                    id: 1,
                                    name: 'SWEET 2',
                                    added: 10,
                                    active: 1,
                                    stock: 5,
                                    max_quantity_selectable: 1,
                                    selected_quantity: 0,
                                    group_preference_id: 2
                                },
                                {
                                    id: 2,
                                    name: 'SALTY 2',
                                    added: 20,
                                    active: 1,
                                    stock: 5,
                                    max_quantity_selectable: 1,
                                    selected_quantity: 0,
                                    group_preference_id: 2
                                },
                                {
                                    id: 3,
                                    name: 'MIXED 2',
                                    added: 30,
                                    active: 1,
                                    stock: 5,
                                    max_quantity_selectable: 1,
                                    selected_quantity: 0,
                                    group_preference_id: 2
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'MENTOPLUS',
                    description: '',
                    barcode: 'COD2',
                    price: 20,
                    active: 1,
                    stock: 10,
                    image: '',
                    background_color: '#ffffff',
                    category_id: 1,
                    selected_quantity: 1
                },
                {
                    id: 3,
                    name: 'ROCKETS',
                    description: '',
                    barcode: 'COD3',
                    price: 30,
                    active: 1,
                    stock: 10,
                    image: '',
                    background_color: '#ffffff',
                    category_id: 1,
                    selected_quantity: 1
                },
                {
                    id: 4,
                    name: 'WATER',
                    description: '',
                    barcode: 'COD4',
                    price: 40,
                    active: 1,
                    stock: 10,
                    image: '',
                    background_color: '#000000',
                    category_id: 4,
                    selected_quantity: 1
                },
                {
                    id: 5,
                    name: 'AQUARIUS',
                    description: '',
                    barcode: 'COD5',
                    price: 50,
                    active: 1,
                    stock: 10,
                    image: '',
                    background_color: '#000000',
                    category_id: 4,
                    selected_quantity: 1
                }
            ];

            const listFiltered = listProducts.filter(product => product.category_id === idCategory);
            
            dispatch({
                type: 'GET_PRODUCTS',
                payload: listFiltered
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

    const selectProduct = (idProduct: number): void => {
        dispatch({
            type: 'SELECT_PRODUCT',
            payload: {
                idProduct
            }
        });
    }

    const addPreference = (preference: Preference): void => {
        preference.selected_quantity++;
        dispatch({
            type: 'ADD_PREFERENCE',
            payload: {
                preference
            }
        });
    }

    const removePreference = (index: number): void => {
        dispatch({
            type: 'DISCOUNT_SELECTED_QUANTITY_PREFERENCE',
            payload: {
                index
            }
        });
        dispatch({
            type: 'REMOVE_PREFERENCE',
            payload: {
                index
            }
        });
    }

    const cleanSelectedPreferences = (): void => {
        dispatch({
            type: 'RESET_SELECTED_PREFERENCES'
        });
        dispatch({
            type: 'CLEAN_SELECTED_PREFERENCES'
        });
    }

    const changeProductQuantity = (product: ProductState["product"]): void => {
        if (product) {
            dispatch({
                type: 'CHANGE_PRODUCT_QUANTITY',
                payload: {
                    product
                }
            });
        }
    }

    return (
        <ProductContext.Provider
            value={{
                productState,
                getProducts,
                selectProduct,
                addPreference,
                removePreference,
                cleanSelectedPreferences,
                changeProductQuantity
            }}
        >
            { children }
        </ProductContext.Provider>
    )
}

export default ProductProvider;