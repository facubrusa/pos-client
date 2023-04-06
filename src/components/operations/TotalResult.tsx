import useProducts from '../../hooks/useProducts';
const TotalResult = () => {

  const { selectedproducts } = useProducts();
  let discount = 0, total = 0;
  if (selectedproducts.length > 0) {
    selectedproducts.forEach(product => {
      total += (product.price * product.quantity) + product.added;
    });
  }

  return ( 
    <>
      <div className="d-flex justify-content-between align-items-center alert alert-block alert-success pl-3 pr-3 pt-1 pb-1 m-0 radius0">
        <strong>Discount</strong>
        <div data-total="0"><strong>${discount}</strong></div>
      </div>
      <div className="d-flex justify-content-between align-items-center alert-block alert alert-dark total pl-3 pr-3 pt-1 pb-1 m-0 radius0">
        <strong>Total</strong>
        <div item-total="0"><strong>${total}</strong></div>
      </div>
      <div className="d-flex justify-content-between align-items-center pl-3 pr-3 pt-1 pb-1 m-0 radius0 w-100">
        <a href="javascript(void);" className="operations-block__item operations-block__item--small bg-success text-white w-100">
          <i className="fas fa-check text-white"></i>
          <span className="text-white">Close Sale</span>
        </a>
      </div>
    </>
  );
}
 
export default TotalResult;