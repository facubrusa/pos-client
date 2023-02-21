import { createContext } from 'react';
import { CategoriesContextProps } from '../../interfaces/interfaces';

const CategoryContext = createContext<CategoriesContextProps>({} as CategoriesContextProps);

export default CategoryContext;