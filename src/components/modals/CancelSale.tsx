import useProducts from '../../hooks/useProducts';
const CancelSale = () => {
  const { cancelSale } = useProducts();

  return ( 
    <div className="modal fade" tabIndex={-1} role="dialog" id="CancelarVenta">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Cancel Sale</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>¿Are you sure you want to cancel the sale in progress??</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn red" data-dismiss="modal">No</button>
            <button
              type="button" className="btn green" data-dismiss="modal"onClick={cancelSale}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default CancelSale;