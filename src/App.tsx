import './App.css';
import Candy from './components/tabs/Candy';
import CancelSale from './components/modals/CancelSale';
import SaleList from './components/operations/SaleList';
import TotalResult from './components/operations/TotalResult';
import ProductProvider from './context/products/ProductProvider';
import AlertProvider from './context/alerts/AlertProvider';
import CategoryProvider from './context/categories/CategoryProvider';
import ProductDetail from './components/products/ProductDetail';

function App() {
  const date = new Date();

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const dateFormated = `${day}/${month}/${year} ${hours}:${minutes}`;

  return (
    <AlertProvider>
    <ProductProvider>
      <CategoryProvider>
        <div className="container-fluid block-content">
          <div className="row pleft55">
            <div className="col-12 col-lg-9 p-0 bg-white">
              <Candy />
              <ProductDetail />
            </div>

            <div className="col-12 col-lg-3 p-0 bg-white">
              <div className="total-results">
                <div className="total-results__header">
                  <a data-toggle="modal" data-target="#CancelarVenta" className="square-icon square-icon--large btn-danger" href='#!'>Cancelar</a>
                </div>
                <div className="total-results__scroll-buttons">
                  <a href="#!"><i className="fas fa-arrow-circle-up"></i></a>
                  <a href="#!"><i className="fas fa-arrow-circle-down"></i></a>
                  <span><strong>Fecha:</strong> {dateFormated} &nbsp;&nbsp;&nbsp;<strong>Nº:</strong> 1</span>
                </div>
                  <div className="total-results__list-products">
                    <SaleList />
                  </div>
                  <div className="total-results__footer">
                    <TotalResult />
                  </div>
              </div>
            </div>
          </div>

          {/* Modals */}
          <CancelSale />      
        </div>
        </CategoryProvider>
      </ProductProvider>
    </AlertProvider>
  );
}

export default App;
