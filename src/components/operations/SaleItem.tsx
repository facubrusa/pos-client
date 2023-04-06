import { SelectedProduct } from "../../interfaces/interfaces";

type Props = { product: SelectedProduct }

const SaleItem = ({product} : Props) => {
  const { id, name, price, quantity, added, preferences } = product;

  const total = quantity * price + added;

  return ( 
    <li className="list-options--candy d-flex justify-content-between align-items-center mb-1">
      <span className="list-options__number text-danger">{quantity}</span>
      <div className="list-options__description d-flex justify-content-between align-items-center flex-wrap">
        <h5>{name}</h5>
        <span>Golosinas</span>
        <span className="font-weight-bold text-danger">${total}</span>
      </div>
      <div className="options-edit--product">
        <a href="#!"><i className="fas fa-edit"></i></a>
        <a href="#!"><i className="fas fa-trash-alt"></i></a>
      </div>
    </li>
  );
}
 
export default SaleItem;