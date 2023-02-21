const SaleList = () => {
  return ( 
    <ul className="list-options">
      <li className="list-options--candy d-flex justify-content-between align-items-center mb-1">
        <span className="list-options__number text-danger">1</span>
        <div className="list-options__description d-flex justify-content-between align-items-center flex-wrap">
          <h5>BONoBON</h5>
          <span>Golosinas</span>
          <span className="font-weight-bold text-danger">$1000.00</span>
        </div>
        <div className="options-edit--product">
          <a href="#!"><i className="fas fa-edit"></i></a>
          <a href="#!"><i className="fas fa-trash-alt"></i></a>
        </div>
      </li>
      <li className="list-options--candy list-options--delete d-flex justify-content-between align-items-center">
        <span className="list-options__number text-danger">5</span>
        <div className="list-options__description d-flex justify-content-between align-items-center flex-wrap">
          <h5>CHOC MANI</h5>
          <span>Golosinas</span>
          <span className="font-weight-bold text-danger">$3000.00</span>
        </div>
        <div className="options-edit--product">
          <a href="#!"><i className="fas fa-edit"></i></a>
          <a href="#!"><i className="fas fa-trash-alt"></i></a>
        </div>
      </li>
    </ul>
  );
}
 
export default SaleList;