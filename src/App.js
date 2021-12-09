import './App.css';
import NavBar from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer'
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>   
      {/* <ItemListContainer greeting="Aca van a ir mis productos"></ItemListContainer> */}
      <ItemDetailContainer filtro={2}/>
      <Footer/>
    </div>
  );
}

export default App;
