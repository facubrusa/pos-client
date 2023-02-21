import { createContext } from 'react';
import { ProductContextProps } from '../../interfaces/interfaces';

const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);

export default ProductContext;