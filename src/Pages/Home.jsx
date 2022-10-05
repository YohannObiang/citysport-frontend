import Searchbar from '../components/searchbar';
import Marques from '../components/marques';
import Chaussures from '../components/chaussures';
import React from "react";

function HomePage({handleSearchTerm, 
               setSearchTerm, 
               SetNumberArticleInCart,
               orderedShoes,
               SetOrderedShoes,
               SearchTerm,
               filteredDataSearch,
               chaussures,
               setChaussures
}){
    return(
        <div>
      <Searchbar 
      handleSearchTerm = {handleSearchTerm} 
      setSearchTerm ={setSearchTerm}/>
      <Marques/>
      <Chaussures 
      SetNumberArticleInCart= {SetNumberArticleInCart} 
      orderedShoes = {orderedShoes} 
      SetOrderedShoes={SetOrderedShoes} 
      SearchTerm = {SearchTerm} 
      filteredDataSearch = {filteredDataSearch} 
      chaussures = {chaussures} 
      setChaussures = {setChaussures} 
      />
        </div>
    );
}

export default HomePage