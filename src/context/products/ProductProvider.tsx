import { useReducer, useEffect } from 'react';

import ProductContext from './ProductContext';
import ProductReducer from './ProductReducer';

// import clientAxios from '../../config/Axios';
import {
  Preference,
  ProductState,
  SelectedProduct,
} from '../../interfaces/interfaces';

interface props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: ProductState = {
  products: [],
  product: null,
  selectedpreferences: [],
  selectedproducts: [],
  message: null,
};

const loadSelectedProducts = () => {
  const selectedProducts = localStorage.getItem('selectedproducts');
  return selectedProducts ? JSON.parse(selectedProducts) : [];
};

const discountStock = (filterProducts: ProductState['products']): ProductState['products'] => {
  const selectedProducts = loadSelectedProducts();
  const groupSelectedProducts = groupProductsById(selectedProducts);
  groupSelectedProducts.forEach((selected: SelectedProduct) => {
    if (selected) {
      const product = filterProducts.find((p) => p.id === selected.id);
      if (product && product.stock >= selected.quantity) {
        product.stock -= selected.quantity;
      } else {
        console.log(`Not enough stock for product with id ${selected.id}`);
      }
    }
  });

  return filterProducts;
};

const groupProductsById = (products: any) => {
  const groupedProducts = products.reduce((acc: ProductState['selectedproducts'], product: SelectedProduct): ProductState['selectedproducts'] => {
      if (product) {
        const found = acc.find((p) => p.id === product.id);
        if (found) {
          found.quantity += product.quantity;
        } else {
          acc.push(product);
        }
      }
      return acc;
    }, []);
  return groupedProducts;
};

const ProductProvider = ({ children }: props) => {
  // Dispatch for ejecute actions
  const [productState, dispatch] = useReducer(ProductReducer, INITIAL_STATE);

  useEffect(() => {
    productState.selectedproducts = loadSelectedProducts();
    // eslint-disable-next-line
  }, [productState.selectedproducts]);

  const getProducts = (idCategory: number): void => {
    try {
      // const response = await clientAxios.get('/api/products', { params: { idCategory }});
      const listProducts: ProductState['products'] = [
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
              obligatory: true,
              preferences: [
                {
                  id: 1,
                  name: 'SWEET',
                  added: 10,
                  active: 1,
                  stock: 5,
                  current_stock: 5,
                  max_quantity_selectable: 1,
                  selected_quantity: 0,
                  group_preference_id: 1,
                },
                {
                  id: 2,
                  name: 'SALTY',
                  added: 20,
                  active: 1,
                  stock: 1,
                  current_stock: 1,
                  max_quantity_selectable: 1,
                  selected_quantity: 0,
                  group_preference_id: 1,
                },
                {
                  id: 3,
                  name: 'MIXED',
                  added: 30,
                  active: 1,
                  stock: 0,
                  current_stock: 0,
                  max_quantity_selectable: 1,
                  selected_quantity: 0,
                  group_preference_id: 1,
                },
              ],
            },
            {
              id: 2,
              max_quantity: 1,
              name: 'Group 2',
              obligatory: false,
              preferences: [
                {
                  id: 1,
                  name: 'SWEET 2',
                  added: 10,
                  active: 1,
                  stock: 5,
                  current_stock: 5,
                  max_quantity_selectable: 1,
                  selected_quantity: 0,
                  group_preference_id: 2,
                },
                {
                  id: 2,
                  name: 'SALTY 2',
                  added: 20,
                  active: 1,
                  stock: 5,
                  current_stock: 5,
                  max_quantity_selectable: 1,
                  selected_quantity: 0,
                  group_preference_id: 2,
                },
                {
                  id: 3,
                  name: 'MIXED 2',
                  added: 30,
                  active: 1,
                  stock: 5,
                  current_stock: 5,
                  max_quantity_selectable: 1,
                  selected_quantity: 0,
                  group_preference_id: 2,
                },
              ],
            },
            {
              id: 3,
              max_quantity: -1,
              name: 'Group 3',
              obligatory: false,
              preferences: [
                {
                  id: 1,
                  name: 'SWEET 3',
                  added: 10,
                  active: 1,
                  stock: 5,
                  current_stock: 5,
                  max_quantity_selectable: 1,
                  selected_quantity: 0,
                  group_preference_id: 3,
                },
                {
                  id: 2,
                  name: 'SALTY 3',
                  added: 20,
                  active: 1,
                  stock: 5,
                  current_stock: 5,
                  max_quantity_selectable: 1,
                  selected_quantity: 0,
                  group_preference_id: 3,
                },
                {
                  id: 3,
                  name: 'MIXED 3',
                  added: 30,
                  active: 1,
                  stock: 5,
                  current_stock: 5,
                  max_quantity_selectable: 1,
                  selected_quantity: 0,
                  group_preference_id: 3,
                },
              ],
            },
          ],
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
          selected_quantity: 1,
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
          selected_quantity: 1,
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
          selected_quantity: 1,
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
          selected_quantity: 1,
        },
      ];

      let filterProducts = listProducts.filter(product => product.category_id === idCategory);
			// console.log(filterProducts);
			filterProducts = discountStock(filterProducts);
			console.log(filterProducts);

      dispatch({
        type: 'GET_PRODUCTS',
        payload: filterProducts,
      });
    } catch (error) {
      console.error(error);
      const message = {
        icon: 'error',
        title: 'Oops!',
        text: 'Something failed :c',
      };
      setMessage(message);
    }
  };

  const selectProduct = (idProduct: number): void => {
    dispatch({
      type: 'SELECT_PRODUCT',
      payload: {
        idProduct,
      },
    });
  };

  const addPreference = (preference: Preference): void => {
    preference.selected_quantity++;
    preference.current_stock--;
    dispatch({
      type: 'ADD_PREFERENCE',
      payload: {
        preference,
      },
    });
  };

  const removePreference = (index: number): void => {
    dispatch({
      type: 'DISCOUNT_SELECTED_PREFERENCE',
      payload: {
        index,
      },
    });
    dispatch({
      type: 'REMOVE_PREFERENCE',
      payload: {
        index,
      },
    });
  };

  const cleanSelectedPreferences = (): void => {
    dispatch({
      type: 'RESET_SELECTED_PREFERENCES',
    });
    dispatch({
      type: 'CLEAN_SELECTED_PREFERENCES',
    });
  };

  const changeProductQuantity = (product: ProductState['product']): void => {
    if (product) {
      dispatch({
        type: 'CHANGE_PRODUCT_QUANTITY',
        payload: {
          product,
        },
      });
    }
  };

  const setMessage = (alert: ProductState['message']): void => {
    if (alert) {
      dispatch({
        type: 'ERROR_PRODUCT',
        payload: {
          alert,
        },
      });
    }
  };

  const addProduct = (product: SelectedProduct): void => {
    if (product && typeof product === 'object') {
      dispatch({
        type: 'DISCOUNT_SELECTED_PREFERENCES',
      });
      dispatch({
        type: 'ADD_PRODUCT',
        payload: {
          product,
        },
      });
      saveProduct(product);
    }
  };

  const saveProduct = (product: SelectedProduct): void => {
    const newSelectedProducts = [...productState.selectedproducts, product];
    localStorage.setItem('selectedproducts', JSON.stringify(newSelectedProducts));
  };

  const cancelSale = (): void => {
    localStorage.removeItem('selectedproducts');
    dispatch({
      type: 'CANCEL_SALE',
    });
  };

  return (
    <ProductContext.Provider
      value={{
        productState,
        getProducts,
        selectProduct,
        addPreference,
        removePreference,
        cleanSelectedPreferences,
        changeProductQuantity,
        setMessage,
        addProduct,
        cancelSale,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
