import useProducts from '../../hooks/useProducts';
import SelectedPreferences from '../preferences/SelectedPreferences';
import ListGroupPreferences from '../preferences/ListGroupPreferences';

type Actions = 'add' | 'discount' | 'reset';

const ProductDetail = () => {

  const { product, cleanSelectedPreferences, changeProductQuantity } = useProducts();

  if (!product) return <div></div>;

  const { name, price, stock, selected_quantity, groups_preference } = product;
  const total = price * selected_quantity;
  
  const handleQuantity = (action: string): void => {
    if (action === 'add') {
      (stock > selected_quantity) ? changeQuantity('add') : alert('Exceeded available product stock');
    } else {
      if (selected_quantity > 1) changeQuantity('discount');
    }
  }

  const handleClose = (): void => {
    setTimeout(() => {
      cleanSelectedPreferences();
      changeQuantity('reset');
    }, 300); // execute after modal animation
  }

  const changeQuantity = (action: Actions) => {
    switch (action) {
      case 'add':
        product.selected_quantity++;
        break;
      case 'discount':
        product.selected_quantity--;
        break;
      case 'reset':
        product.selected_quantity = 1;
    }
    changeProductQuantity(product);
  }

  return (
    <div className="modal fade" id="detalleProducto" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" data-backdrop="static">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">Product Detail</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-5">
                <form>
                  <div className="form-group">
                    <label htmlFor="nombreProducto">Product Name</label>
                    <input type="text" className="form-control" id="nombreProducto" defaultValue={name} readOnly={true} />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="precioUnitario">Price</label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">$</span>
                        </div>
                        <input type="text" className="form-control input-product" id="precioUnitario" value={price} readOnly={true} />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="Total">Total</label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">$</span>
                        </div>
                        <input type="text" className="form-control input-product" id="Total" value={total} readOnly={true} />
                      </div>
                    </div>
                  </div>
                  <div className="d-block">
                    <label>Quantity</label>
                    <div className="controls">
                      <a href="#!" onClick={() => handleQuantity('discount')}><i className="fas fa-minus bg-danger"></i></a>
                      <input type="text" className="number" value={selected_quantity} readOnly={true} />
                      <a href="#!" onClick={() => handleQuantity('add')}><i className="fas fa-plus bg-success"></i></a>
                    </div>
                  </div>
                </form>
              </div>
              <SelectedPreferences />
              { groups_preference && <ListGroupPreferences groups_preference={groups_preference}/> }
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={handleClose}>Cancel</button>
            <button type="button" className="btn btn-primary"><i className="fas fa-check"></i> Add to order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ProductDetail;
