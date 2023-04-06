import useProducts from '../../hooks/useProducts';
import SelectedPreferences from '../preferences/SelectedPreferences';
import ListGroupPreferences from '../preferences/ListGroupPreferences';
import { SelectedProduct } from '../../interfaces/interfaces';
import { useRef } from 'react';

type Actions = 'add' | 'discount' | 'reset';

const ProductDetail = () => {

  const { product, selectedpreferences, cleanSelectedPreferences, changeProductQuantity, setMessage, addProduct } = useProducts();

  const closeModalBtn = useRef<HTMLButtonElement>(null);

  if (!product) return <div></div>;

  let totalPref = 0;
  if (selectedpreferences.length > 0) {
    selectedpreferences.forEach(preference => {
      totalPref += preference.added;
    });
  }

  const { id, name, price, stock, selected_quantity, groups_preference } = product;
  const total = price * selected_quantity + totalPref;
  
  const handleQuantity = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, action: string): void => {
    e.preventDefault();
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
    cleanSelectedPreferences();
    changeProductQuantity(product);
  }

  const verifyProduct = (): void => {
    const isValid = validatePreferences();
    if (!isValid) {
      const message = {
        icon: 'error',
        title: 'Oops!',
        text: 'Preferences incompleted or something is wrong'
      };
      setMessage(message);
      return;
    } else {
      const data: SelectedProduct = {
        id,
        name,
        price,
        quantity : selected_quantity,
        added: totalPref,
        preferences: selectedpreferences
      };
      addProduct(data);
      // Close modal
      if (closeModalBtn.current) closeModalBtn.current.click();
    }
  }

  const validatePreferences = (): boolean => {
    let isValid = true;
    let countPrefSelected = 0, countPrefObligatory = 0, countGroupObligatory = 0, maxPrefSelected = 0;
    if (groups_preference) {
      groups_preference.forEach(group_preference => {
        let countMax = group_preference.max_quantity > 0 ? group_preference.max_quantity : 1;
        maxPrefSelected = selected_quantity * countMax;
        if (group_preference.obligatory) {
          countGroupObligatory += selected_quantity * countMax;
        }
        group_preference.preferences.forEach(preference => {
          countPrefSelected += preference.selected_quantity;
          if (group_preference.obligatory) countPrefObligatory += preference.selected_quantity;
        });
        if (group_preference.max_quantity !== -1 && countPrefSelected > maxPrefSelected) {
          isValid = false;
        }
        countPrefSelected = 0;
      });

      if (countGroupObligatory > 0 && countPrefObligatory < selected_quantity) {
        isValid = false;
      }
    }
    return isValid;
  }
  
  return (
    <div className="modal fade" id="detalleProducto" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" data-backdrop="static">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Product Detail</h5>
            <button ref={closeModalBtn} type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-5">
                <form>
                  <div className="form-group">
                    <label htmlFor="nombreProducto">Product Name</label>
                    <input type="text" className="form-control" defaultValue={name} readOnly={true} />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="precioUnitario">Price</label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">$</span>
                        </div>
                        <input type="text" className="form-control input-product" value={price} readOnly={true} />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="Total">Total</label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">$</span>
                        </div>
                        <input type="text" className="form-control input-product" value={total} readOnly={true} />
                      </div>
                    </div>
                  </div>
                  <div className="d-block">
                    <label>Quantity</label>
                    <div className="controls">
                      <a href="#!" onClick={(e) => handleQuantity(e, 'discount')}>
                        <i className="fas fa-minus bg-danger"></i>
                      </a>
                      <input type="text" className="number" value={selected_quantity} readOnly={true} />
                      <a href="#!" onClick={(e) => handleQuantity(e, 'add')}>
                        <i className="fas fa-plus bg-success"></i>
                      </a>
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
            <button type="button" className="btn btn-primary" onClick={verifyProduct}><i className="fas fa-check"></i> Add to order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ProductDetail;
