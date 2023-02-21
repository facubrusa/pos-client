import { useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import ProductItem from "./ProductItem";

const ListProducts = () => {

  const { products, getProducts } = useProducts();
  useEffect(() => {
    getProducts(1); // uncomment this line after
    // eslint-disable-next-line
  }, []);
  
  return (
    <div className="list-cards list-cards--movie">
      { products.length > 0 ? 
        products.map(product => 
          <ProductItem 
            key={product.id} 
            product={product}
          />
        ) : '' }
    </div>
  );
}
 
export default ListProducts;