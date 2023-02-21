import { Category, Preference, Product } from "../interfaces/interfaces";

export type CategoryAction = 
| { type: 'SELECT_CATEGORY', payload: { idCategory: number } }
| { type: 'GET_CATEGORIES', payload: Category[] }

export type AlertAction = 
| { type: 'SHOW_ALERT', payload: { msg: string, category: string } }
| { type: 'HIDE_ALERT', payload: {} }

export type ProductAction = 
| { type: 'SELECT_PRODUCT', payload: { idProduct: number } }
| { type: 'ADD_PREFERENCE', payload: { preference: Preference } }
| { type: 'REMOVE_PREFERENCE', payload: { index: number } }
| { type: 'CLEAN_SELECTED_PREFERENCES' }
| { type: 'RESET_SELECTED_PREFERENCES' }
| { type: 'DISCOUNT_SELECTED_QUANTITY_PREFERENCE', payload: { index: number } }
| { type: 'GET_PRODUCTS', payload: Product[] }
| { type: 'CHANGE_PRODUCT_QUANTITY', payload: { product: Product } }
