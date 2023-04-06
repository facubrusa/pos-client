import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import AlertContext from "../../context/alerts/AlertContext";
import useProducts from "../../hooks/useProducts";
import ProductItem from "./ProductItem";

const ListProducts = () => {

  const { products, message, getProducts } = useProducts();

  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;
  
  useEffect(() => {
    if (message) {
      showAlert(message);
      return;
    }
    
    getProducts(1); // uncomment this line after develop
    // eslint-disable-next-line
  }, [message]);
  
  if (alert) {
    const icon: any = alert.icon;
    const title: string = alert.title;
    const text: string = alert.text;

    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }

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
