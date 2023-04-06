import useProducts from "../../hooks/useProducts";
import SaleItem from "./SaleItem";

const SaleList = () => {

  const { selectedproducts } = useProducts();
  
  return ( 
    <ul className="list-options">
      { selectedproducts.length > 0 ? selectedproducts.map((product, key) => <SaleItem key={key} product={product} />) : ''}
    </ul>
  );
}
 
export default SaleList;