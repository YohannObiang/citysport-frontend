import React from "react";
import OrdersList from "../components/OrdersList";
import CartValidation from "../components/CartValidation";

const Cart = ({orderedShoes, SetOrderedShoes, getDatafromLS, SetNumberArticleInCart}) => {

    const deleteStudent=(nom_chaussure)=>{
        const filteredStudents=orderedShoes.filter((element,index)=>{
          return element.nom_chaussure !== nom_chaussure})
          SetOrderedShoes(filteredStudents);

      };


    return ( 
        <div>
            <OrdersList SetNumberArticleInCart= {SetNumberArticleInCart} orderedShoes = {orderedShoes} SetOrderedShoes = {SetOrderedShoes}/>
            <CartValidation SetNumberArticleInCart= {SetNumberArticleInCart} getDatafromLS = {getDatafromLS} orderedShoes = {orderedShoes} SetOrderedShoes = {SetOrderedShoes}/>
            
        </div>
     );
}
 
export default Cart;