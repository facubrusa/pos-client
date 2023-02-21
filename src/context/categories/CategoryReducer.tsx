import { CategoryState } from '../../interfaces/interfaces';
import { CategoryAction } from '../../types/types';

const CategoryReducer = (state: CategoryState, action: CategoryAction): CategoryState => {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      return {
        ...state,
        category: state.categories.filter(category => category.id === action.payload.idCategory)[0] || null
      };
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
};

export default CategoryReducer;
