import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useState, useEffect } from "react";



export default function Chaussures() {
  
    const [chaussures, setChaussures] = useState([]);
    const [chaussuress, setChaussuress] = useState([]);

    useEffect(() => {
      getChaussures();
    }, []);
  
    const getChaussures = async () => {
      var response = await axios.get("http://localhost:3001/api/chaussures");
      setChaussures(response.data);
      setChaussuress(response.data);

    };

  

  const [Pointures, setPointures] = React.useState(0);

  const handleChangePointures = (event) => {
    setPointures(event.target.value);
  };
  
  const [Marques, setMarques] = React.useState(0);

  const handleChangeMarques = (event) => {
    setMarques(event.target.value);
  };

  const filteredBrand = () => {
    if(Marques !== 0){
      if(Pointures === 0){
        var filteredData = chaussuress.filter(chaussure => chaussure.id_marque === Marques);
      setChaussures(filteredData);
      }
      else{
        var filteredData = chaussuress.filter(chaussure => chaussure.id_marque === Marques);
        var filteredShoes = filteredData.filter(chaussure => chaussure.pointure === Pointures);
        setChaussures(filteredShoes)
      }  
    }
    else{
      if(Pointures !== 0){
        var filteredShoes = chaussuress.filter(chaussure => chaussure.pointure === Pointures);
        setChaussures(filteredShoes)
      }
      else{
        setChaussures(chaussuress)
      }
    }
  }

  return (
    <div className='chaussuresBox' id='shoes'>
      
        <div className='Selects'>
          <Box sx={{ minWidth: 120, marginRight: 3, width: 200 }}>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Pointure</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Pointures}
              label="Age"
              onChange={handleChangePointures}
              >
              <MenuItem value={0}>Toutes</MenuItem>
              <MenuItem value={39}>39</MenuItem>
              <MenuItem value={40}>40</MenuItem>
              <MenuItem value={41}>41</MenuItem>
              <MenuItem value={45}>45</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={28}>28</MenuItem>


              </Select>
          </FormControl>
          </Box>
          <Box sx={{ minWidth: 120, marginRight: 3, width: 200  }}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Marques</InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Marques}
              label="Age"
              onChange={handleChangeMarques}
          >
              <MenuItem value={0}>Toutes</MenuItem>
              <MenuItem value={1}>Nike</MenuItem>
              <MenuItem value={2}>Adidas</MenuItem>
              <MenuItem value={3}>Asics</MenuItem>
              <MenuItem value={6}>Puma</MenuItem>
              <MenuItem value={5}>Converse</MenuItem>

          </Select>
          
          </FormControl>

          </Box>
          <Button size="small" onClick={filteredBrand}  > Filtrer</Button>

        </div>
        
        <div className='Chaussures'>
        {chaussures.map((chaussure, index) => {
          return(
          <Card sx={{ width: 280, marginBottom: 5 }}  key={chaussure.nom_chaussure} >
        <CardMedia
          component="img"
          height="140"
          image={chaussure.images}
          alt="Chaussure"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {chaussure.nom_chaussure}
          </Typography>
          <Typography variant="body2" color="text.secondary">

            Couleur:{chaussure.couleur} - Pointure:{chaussure.pointure}
          </Typography>
          <br></br>
          <Typography variant="h6">
          {chaussure.prix}FCFA
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" > Acheter</Button>
          <Button size="small"onClick={()=>getChaussures()}>Ajouter au panier</Button>
        </CardActions>
          </Card>)})}
        </div>
        
    </div>

  );
}
