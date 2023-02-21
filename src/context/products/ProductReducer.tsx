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
    case 'DISCOUNT_SELECTED_QUANTITY_PREFERENCE':
      return {
        ...state,
        selectedpreferences: state.selectedpreferences.map((preference, index) => {
          if (index === action.payload.index) preference.selected_quantity--;
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
    default:
      return state;
  }
};

export default CategoryReducer;
