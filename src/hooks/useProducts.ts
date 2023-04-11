import { useContext } from "react";
import ProductContext from "../context/products/ProductContext";

const useProducts = () => {
  const {
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
    removeProduct,
  } = useContext(ProductContext);
  return {
    ...productState,
    getProducts,
    selectProduct,
    addPreference,
    removePreference,
    cleanSelectedPreferences,
    changeProductQuantity,
    setMessage,
    addProduct,
    cancelSale,
    removeProduct,
  };
};

export default useProducts;
