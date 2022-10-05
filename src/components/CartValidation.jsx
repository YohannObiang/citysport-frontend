import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const CartValidation = ({orderedShoes}) => {

  let arr = []
  for(let i = 0; i < orderedShoes.length; i++){
 

  
 arr.push(orderedShoes[i].prix)
 let add = function(arr) {
  return arr.reduce((a, b) => a + b, 0);
};

var sum = add(arr);
  console.log(sum)
  };

  return ( 
    <div className="CartValidation">
      <h6>Total à payer: <span className='sum'>{sum}</span> FCFA</h6>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="success">
          Commander
        </Button>
      </Stack>
    </div>
   );
}
 
export default CartValidation;