import './App.css';
import Topbar from './components/topbar';
import Searchbar from './components/searchbar';
import Marques from './components/marques';
import Chaussures from './components/chaussures';


function App() {
  return (
    <div className="App">
      <Topbar/>
      <Searchbar/>
      <Marques/>
      <Chaussures/>
    </div>
  );
}

export default App;
