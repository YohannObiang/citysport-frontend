import './App.css';
import Topbar from './components/topbar';

import React, { useState, useEffect} from "react";
import axios from 'axios';
import HomePage from './Pages/Home';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Cart from './Pages/Cart';


const getDatafromLS = () => {
  const data = localStorage.getItem('panier');
  if(data){
    return JSON.parse(data)
  }
  else{
    return[]
  }
}

 

function App() {



  const [SearchTerm, setSearchTerm] = useState("");
  const [allShoes, setallShoes] = useState([]);
  const [chaussures, setChaussures] = useState([]);
  const [filteredDataSearch, setfilteredDataSearch] = useState([]);

  useEffect(() => {
    getChaussures();
  }, []);

  const getChaussures = async () => {
    var response = await axios.get("https://mocki.io/v1/ffed7ee3-16a2-4c78-9708-0f42dfe94649");
    setallShoes(response.data);
    setChaussures(response.data);

  };




  const handleSearchTerm = () => {
    
    if(SearchTerm.length > 0){
    console.log(SearchTerm)
    var filteredShoes = allShoes.filter(chaussure => chaussure.nom_chaussure.toLowerCase().includes(SearchTerm.toLowerCase()));
    console.log(filteredShoes)
    setfilteredDataSearch(filteredShoes)
    setChaussures(filteredShoes)
  }
    else{
      getChaussures()
    }
  };

  const [orderedShoes, SetOrderedShoes] = useState(getDatafromLS());
  const [NumberArticleInCart, SetNumberArticleInCart] = useState(orderedShoes.length);
  localStorage.setItem('panier', JSON.stringify(orderedShoes))
  
  const articleInCart = () => {
    SetNumberArticleInCart(orderedShoes.length)
  }
  


  return (
    <div className="App">

      <BrowserRouter>
      <Topbar NumberArticleInCart= {NumberArticleInCart}/>
      <Routes>
        <Route path="/" element={<HomePage 
        handleSearchTerm = {handleSearchTerm} 
        setSearchTerm ={setSearchTerm}
        SetNumberArticleInCart= {SetNumberArticleInCart} 
        orderedShoes = {orderedShoes} 
        SetOrderedShoes={SetOrderedShoes} 
        SearchTerm = {SearchTerm} 
        filteredDataSearch = {filteredDataSearch} 
        chaussures = {chaussures} 
        setChaussures = {setChaussures} 
        />} />
         <Route path="/panier" element={<Cart 
        orderedShoes = {orderedShoes} 
        />} /> 
      </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
