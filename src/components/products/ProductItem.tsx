import { Product } from '../../interfaces/interfaces';
import useProducts from '../../hooks/useProducts';

type Props = { product: Product }

const ProductItem = ({product} : Props) => {
  const { id, name, image } = product;

  const { selectProduct } = useProducts();

  const handleClick = (idProduct: number) => {
    selectProduct(idProduct);
  }

  return ( 
    <div 
      className="list-cards__block" 
      data-toggle="modal" 
      data-target="#detalleProducto"
      onClick={() => handleClick(id)}>
        <img src={image} alt="" />
        <h4>{name}</h4>
    </div>
  );
}
 
export default ProductItem;