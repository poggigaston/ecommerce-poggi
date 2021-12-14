import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './Routes/Rutas';
// import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Rutas />
      {/* <ItemListContainer greeting="Aca van a ir mis productos"></ItemListContainer> */}
      {/* <ItemDetailContainer filtro={0}/> */}
      {/* <Footer/>  */}
    </div>
  );
}

export default App;
