import ListCategories from '../categories/ListCategories';
import CategoryProvider from '../../context/categories/CategoryProvider';
import ListProducts from '../products/ListProducts';
import ProductProvider from '../../context/products/ProductProvider';
import ProductDetail from '../products/ProductDetail';

const Candy = () => {
  return ( 
    <ProductProvider>
      <CategoryProvider>
        <div className="tab-pane">
          <div className="row">
            <div className="col-sm-12">
              <div className="wrap-cards mb-3">
                <div className="top__cards d-flex align-items-center justify-content-between">
                  <h3><i className="fas fa-mug-hot"></i> Categories</h3>
                </div>
                  <ListCategories />
              </div>
              <div className="wrap-cards">
                <div className="top__cards d-flex align-items-center justify-content-between">
                  <h3><i className="fas fa-mug-hot"></i> Products</h3>
                </div>
                  <ListProducts />
              </div>
            </div>
          </div>
        </div>
        <ProductDetail />
      </CategoryProvider>
    </ProductProvider>
  );
}
 
export default Candy;