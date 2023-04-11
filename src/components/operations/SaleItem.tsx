import { useRef } from "react";
import { SelectedProduct } from "../../interfaces/interfaces";
import Popover from "./Popover";
import useProducts from "../../hooks/useProducts";

type Props = { product: SelectedProduct, index: number }

const SaleItem = ({product, index} : Props) => {
  const { name, price, quantity, added, preferences } = product;

  const total = quantity * price + added;

  const { removeProduct } = useProducts();

  const liTag = useRef<HTMLLIElement>(null);

  const showOptions = () => {
    liTag.current?.classList.toggle('options-edit--product--show');
  }

  return ( 
    <li className="list-options--candy d-flex justify-content-between align-items-center mb-1" ref={liTag} onClick={showOptions}>
      <span className="list-options__number text-danger">{quantity}</span>
      <Popover position="bottom" preferences={preferences}>
        <div className="list-options__description d-flex justify-content-between align-items-center flex-wrap">
          <h5>{name}</h5>
          <span>Golosinas</span>
          <span className="font-weight-bold text-danger">${total}</span>
        </div>
      </Popover>
      <div className="options-edit--product">
        <a href="#!" onClick={() => removeProduct(index)}><i className="fas fa-trash-alt"></i></a>
      </div>
    </li>
  );
}
 
export default SaleItem;