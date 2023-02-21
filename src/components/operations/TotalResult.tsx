const TotalResult = () => {
  return ( 
    <>
      <div className="d-flex justify-content-between align-items-center alert alert-block alert-success pl-3 pr-3 pt-1 pb-1 m-0 radius0">
        <strong>Descuento</strong>
        <div id="totalDescuento" data-total="0"><strong>$0</strong></div>
      </div>
      <div className="d-flex justify-content-between align-items-center alert-block alert alert-dark total pl-3 pr-3 pt-1 pb-1 m-0 radius0">
        <strong>Total</strong>
        <div id="totalServicio" item-total="0"><strong>$25000</strong></div>
      </div>
      <div className="d-flex justify-content-between align-items-center pl-3 pr-3 pt-1 pb-1 m-0 radius0 w-100">
        <a href="javascript(void);" className="operations-block__item operations-block__item--small bg-success text-white w-100"><i className="fas fa-check text-white"></i><span className="text-white">Cerrar venta</span></a>
      </div>
    </>
  );
}
 
export default TotalResult;