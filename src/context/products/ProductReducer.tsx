import { ProductState } from '../../interfaces/interfaces';
import { ProductAction } from '../../types/types';

const CategoryReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case 'SELECT_PRODUCT':
      return {
        ...state,
        product: state.products.filter(product => product.id === action.payload.idProduct)[0] || null
      };
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      };
    case 'ADD_PREFERENCE':
      return {
        ...state,
        selectedpreferences: [...state.selectedpreferences, action.payload.preference]
      }
    case 'ADD_PRODUCT':
      return {
        ...state,
        selectedproducts: [...state.selectedproducts, action.payload.product]
      }
    case 'DISCOUNT_SELECTED_PREFERENCE':
      return {
        ...state,
        selectedpreferences: state.selectedpreferences.map((preference, index) => {
          if (index === action.payload.index) {
            preference.selected_quantity--;
            preference.current_stock++;
          }
          return preference;
        })
      }
    case 'DISCOUNT_SELECTED_PREFERENCES':
      return {
        ...state,
        selectedpreferences: state.selectedpreferences.map(preference => {
          preference.selected_quantity = 0;
          preference.stock = preference.current_stock;
          return preference;
        })
      }
    case 'REMOVE_PREFERENCE':
      return {
        ...state,
        selectedpreferences: state.selectedpreferences.filter((preference, index) => index !== action.payload.index)
      }
    case 'RESET_SELECTED_PREFERENCES':
      return {
        ...state,
        selectedpreferences: state.selectedpreferences.map((preference) => {
          preference.selected_quantity = 0;
          preference.current_stock = preference.stock;
          return preference;
        })
      }
    case 'CLEAN_SELECTED_PREFERENCES':
      return {
        ...state,
        selectedpreferences: []
      }
    case 'CHANGE_PRODUCT_QUANTITY':
      return {
        ...state,
        product: action.payload.product,
        selectedpreferences: []
      }
    case 'ERROR_PRODUCT':
      return {
        ...state,
        message: action.payload.alert
      }
    case 'CANCEL_SALE':
      return {
        ...state,
        selectedproducts: []
      }
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        selectedproducts: state.selectedproducts.filter((product, key) => key !== action.payload.index)
      }
    case 'LOAD_SELECTED_PRODUCTS':
      return {
        ...state,
        selectedproducts: action.payload.selectedproducts
      }
    default:
      return state;
  }
};

export default CategoryReducer;
