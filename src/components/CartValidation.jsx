import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link } from "react-router-dom";
import Validation from '../Pages/Validation';


const CartValidation = ({orderedShoes, SetOrderedShoes, SetNumberArticleInCart}) => {

  let arr = []
  for(let i = 0; i < orderedShoes.length; i++){
 

  
 arr.push(orderedShoes[i].prix)
 let add = function(arr) {
  return arr.reduce((a, b) => a + b, 0);
};

var sum = add(arr);
  console.log(sum)
  };
  const deleteAll = () => {

    localStorage.removeItem('panier')
    SetOrderedShoes([])
    SetNumberArticleInCart(0)
  }

  return ( 
    <div className="CartValidation">
      <h6>Total à payer: <span className='sum'>{sum}</span> FCFA</h6>
      <Stack direction="row" spacing={2}>

        <Button variant="outlined" sx={{marginTop: 'auto'}} startIcon={<DeleteIcon />} onClick={deleteAll}>
          Vider le panier
        </Button>
        <Link to="/panier/validation" >
          <Button variant="contained" color="success">
            Commander
          </Button>
        </Link>
      </Stack>
    </div>
   );
}
 
export default CartValidation;