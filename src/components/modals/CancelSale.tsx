const CancelSale = () => {
  return ( 
    <div className="modal fade" tabIndex={-1} role="dialog" id="CancelarVenta">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Cancelar venta</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>¿Está seguro que desea cancelar la venta en curso?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn red" data-dismiss="modal">No</button>
            <button type="button" className="btn green">Si</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default CancelSale;