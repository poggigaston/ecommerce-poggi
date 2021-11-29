import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>   
      <ItemListContainer greeting="Aca van a ir mis productos">
      </ItemListContainer>
    </div>
  );
}

export default App;
