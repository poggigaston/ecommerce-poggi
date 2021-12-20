import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './Routes/Rutas';
import ItemDetailContainer from './components/ItemDetailContainer';
// import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Rutas /> */}
      {/* <ItemListContainer greeting="Aca van a ir mis productos"></ItemListContainer> */}
      <ItemDetailContainer />
      {/* <Footer/>  */}
    </div>
  );
}

export default App;
