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



export default function Chaussures({chaussures, setChaussures, orderedShoes, SetNumberArticleInCart}) {
  
    const [allShoes, setallShoes] = useState([]);
    


    useEffect(() => {
      getChaussures();
    });
  
    const getChaussures = async () => {
      var response = await axios.get("https://mocki.io/v1/ffed7ee3-16a2-4c78-9708-0f42dfe94649");
      setallShoes(response.data);
    };

  const [Pointures, setPointures] = React.useState(0);

  const [Sizes, setSizes] = React.useState([]);
  useEffect(() => {
    getSizes();
  }, []);

  const getSizes = async () => {
    var response = await axios.get("https://mocki.io/v1/ffed7ee3-16a2-4c78-9708-0f42dfe94649");
    setSizes(response.data);
  };
  
  const [Brands, setBrands] = React.useState([]);
  useEffect(() => {
    getBrands();
  }, []);

  const getBrands = async () => {
    var response = await axios.get("https://mocki.io/v1/1a49f10e-a78c-4a01-ad9b-cca3c486c972");
    setBrands(response.data);
  };

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
        var filteredData = allShoes.filter(chaussure => chaussure.id_marque === Marques);
      setChaussures(filteredData);
      }
      else{
        var filtereddata = allShoes.filter(chaussure => chaussure.id_marque === Marques);
        var filteredShoes = filtereddata.filter(chaussure => chaussure.pointure === Pointures);
        setChaussures(filteredShoes)
      }  
    }
    else{
      if(Pointures !== 0){
        var filteredshoes = allShoes.filter(chaussure => chaussure.pointure === Pointures);
        setChaussures(filteredshoes)
      }
      else{
        setChaussures(allShoes)
      }
    }
  }




  //Ajouter un element au panier


  const deleteStudent=(id_Chaussures)=>{
    const filteredStudents=chaussures.filter((element,index)=>{
      return element.id_Chaussures === id_Chaussures});
      orderedShoes.push(filteredStudents[0])
      SetNumberArticleInCart(orderedShoes.length)
      console.log(orderedShoes)


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
              value={Pointures}
              label="Age"
              onChange={handleChangePointures}
              >
              <MenuItem value={0}>Toutes</MenuItem>
              {Sizes.map((item) => {
                return(
                  <MenuItem key={item.pointure} value={item.pointure}>{item.pointure}</MenuItem>
              )})}
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
              {Brands.map((item) => {
                return(
                  <MenuItem key={item.marque} value={item.id_marque}>{item.marque}</MenuItem>
              )})}
              
          </Select>
          
          </FormControl>

          </Box>
          <Button size="small" onClick={filteredBrand}  > Filtrer</Button>

        </div>
        
        <div className='Chaussures'>
        
        {chaussures.map((chaussure) => {
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
          <Button size="small"onClick={()=>deleteStudent(chaussure.id_Chaussures)} >Ajouter au panier</Button>
        </CardActions>
          </Card>)})}
        </div>
        
    </div>

  );
}
