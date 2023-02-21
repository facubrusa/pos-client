import { useContext } from 'react';
import CategoryContext from '../context/categories/CategoryContext';

const useCategories = () => {
  const { categoryState, getCategories, selectCategory } = useContext(CategoryContext);
  const { categories } = categoryState;
  return {
    categories,
    getCategories,
    selectCategory
  }
}
 
export default useCategories;