import './App.css';
import Candy from './components/tabs/Candy';
import CancelSale from './components/modals/CancelSale';
import SaleList from './components/operations/SaleList';
import TotalResult from './components/operations/TotalResult';

function App() {
  return (
    <div className="container-fluid block-content">
      <div className="row pleft55">
        <div className="col-12 col-lg-9 p-0 bg-white">
          <Candy />
        </div>

        <div className="col-12 col-lg-3 p-0 bg-white">
          <div className="total-results">
            <div className="total-results__header">
              <a data-toggle="modal" data-target="#CancelarVenta" className="square-icon square-icon--large btn-danger" href='#!'>Cancelar</a>
            </div>
            <div className="total-results__scroll-buttons">
              <a href="#!"><i className="fas fa-arrow-circle-up"></i></a>
              <a href="#!"><i className="fas fa-arrow-circle-down"></i></a>
              <span><strong>Fecha:</strong> 12/09/2019 17:46&nbsp;&nbsp;&nbsp;<strong>Nº:</strong> 1</span>
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
  );
}

export default App;
