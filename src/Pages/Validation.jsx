import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import axios from 'axios';
import { ToastBody } from 'react-bootstrap';


const Validation = ({orderedShoes}) => {


  const [nom, setNom] = React.useState("")
  const handleChangeNom = (e) => {
    let value = e.target.value
    setNom(value)
  }

  const [Prenom, setPrenom] = React.useState("")
  const handleChangePrenom = (e) => {
    let value = e.target.value
    setPrenom(value)
  }
  
  const [telephone, setTelephone] = React.useState("")
  const handleChangeTelephone = (e) => {
    let value = e.target.value
    setTelephone(value)
  }
  const [email, setEmail] = React.useState("")
  const handleChangeEmail = (e) => {
    let value = e.target.value
    setEmail(value)
  }
  const [adresse, setAdresse] = React.useState("")
  const [id_Chaussures, setId_Chaussures] = React.useState([])
  const handleChangeAdresse = (e) => {
    let value = e.target.value
    setAdresse(value)
  }
  var today = new Date();
  var date = today.getDate() +'-'+parseInt(today.getMonth()+1) +'-'+today.getUTCFullYear();
  var time = today.getHours() +':'+today.getMinutes()+':'+today.getSeconds();
  var dateTime = date+' '+time

  console.log(orderedShoes)
  
  const order = {
                    id_chaussures: `${id_Chaussures}`,
                    date: dateTime,
                    nom: nom,
                    Prenom: Prenom,
                    telephone: telephone,
                    email: email,
                    adresse: adresse,
                    statut: "En traitement"
                  };
  const post = () =>{axios.post('http://localhost:3001/api/commandes/ajout', order)
console.log(order);
setId_Chaussures([])
  for( let i = 0; i <= orderedShoes.length; i++){
    console.log(orderedShoes[i].id_Chaussures)
  
    id_Chaussures.push(orderedShoes[i].id_Chaussures)
    console.log(id_Chaussures)
  }
}

  return ( 
    <div className='validation'>

      <h2>Detail de livraison</h2>
      <br></br>
      <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25vw' },
        }}
        noValidate
        autoComplete="off"
        className='search'
        >
        <TextField id="search" label="Nom" variant="outlined" onChange ={handleChangeNom}/>
        </Box>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25vw' },
        }}
        noValidate
        autoComplete="off"
        className='search'
        >
        <TextField id="search" label="Prenom" variant="outlined" onChange ={handleChangePrenom}/>
        </Box>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25vw' },
        }}
        noValidate
        autoComplete="off"
        className='search'
        >
        <TextField id="search" onChange ={handleChangeTelephone} label="Numero de telephone" variant="outlined" />
        </Box>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25vw' },
        }}
        noValidate
        autoComplete="off"
        className='search'
        >
        <TextField id="search" label="Email" variant="outlined" onChange ={handleChangeEmail}/>
        </Box>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25vw' },
        }}
        Required
        noValidate
        autoComplete="off"
        className='search'
        >
        <TextField id="search" label="Adresse/Quartier" variant="outlined"  onChange ={handleChangeAdresse}/>
        </Box>
        
          <Button className='searchbtn' variant="contained" onClick={post} endIcon={<ShoppingCartCheckoutIcon />} sx={{m:2}} >
            Aller au paiement
          </Button>
    </div>
   );
}
 
export default Validation;