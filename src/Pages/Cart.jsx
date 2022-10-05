import React from "react";
import OrdersList from "../components/OrdersList";
import CartValidation from "../components/CartValidation";
const getDatafromLS = () => {
    const data = localStorage.getItem('panier');
    if(data){
      return JSON.parse(data)
    }
    else{
      return[]
    }
  }
const Cart = ({orderedShoes, setOrderedShoes}) => {

    const deleteStudent=(nom_chaussure)=>{
        const filteredStudents=orderedShoes.filter((element,index)=>{
          return element.nom_chaussure !== nom_chaussure})
          setOrderedShoes(filteredStudents);

      };

    const deleteAll= () => {
        localStorage.clear()
        setOrderedShoes(getDatafromLS)
    }

    return ( 
        <div>
            <OrdersList orderedShoes = {orderedShoes}/>
            <CartValidation orderedShoes = {orderedShoes}/>
        </div>
     );
}
 
export default Cart;