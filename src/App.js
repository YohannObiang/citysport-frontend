import './App.css';
import Topbar from './components/topbar';
import Searchbar from './components/searchbar';
import Marques from './components/marques';
import Chaussures from './components/chaussures';
import PersonList from './components/PersonList';


function App() {
  return (
    <div className="App">
      <Topbar/>
      <Searchbar/>
      <Marques/>
      <Chaussures/>
      <PersonList/>
    </div>
  );
}

export default App;
