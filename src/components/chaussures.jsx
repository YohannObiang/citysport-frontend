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
import jordan from './jordan.jpg';
import axios from 'axios';
import React, { useState, useEffect } from "react";



export default function Chaussures() {
  
    const [chaussures, setChaussures] = useState([]);
  
    useEffect(() => {
      getChaussures();
    }, []);
  
    const getChaussures = async () => {
      const response = await axios.get("http://localhost:3000/api/chaussures");
      setChaussures(response.data);
    };

  

  const [Pointure, setPointure] = React.useState('');

  const handleChangePointures = (event) => {
    setPointure(event.target.value);
  };
  const [Marques, setMarques] = React.useState('');

  const handleChangeMarques = (event) => {
    setMarques(event.target.value);
  };

  return (
    <div className='chaussuresBox' id='shoes'>
        <div className='Selects'>
          <Box sx={{ minWidth: 120, marginRight: 3, width: 200 }}>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Pointure</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Pointure}
              label="Age"
              onChange={handleChangePointures}
              >
              <MenuItem value={10}>Toutes</MenuItem>

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
              <MenuItem value={10}>Toutes</MenuItem>

          </Select>
          </FormControl>
          </Box>
        </div>
        
        <div className='Chaussures'>
        {chaussures.map((chaussure, index) => {
          return(
          <Card sx={{ width: 280, marginBottom: 5 }}  key={chaussure.nom_chaussure}>
        <CardMedia
          component="img"
          height="140"
          image={chaussure.images}
          alt="jordan"
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
          {chaussure.prix}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Acheter</Button>
          <Button size="small">Ajouter au panier</Button>
        </CardActions>
          </Card>)})}
        </div>
        
    </div>

  );
}
