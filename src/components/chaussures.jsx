import * as React from 'react';
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


export default function Chaussures() {
  const [Pointure, setPointure] = React.useState('');

  const handleChangePointures = (event) => {
    setPointure(event.target.value);
  };
  const [Marques, setMarques] = React.useState('');

  const handleChangeMarques = (event) => {
    setMarques(event.target.value);
  };

  return (
    <div>
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
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={jordan}
        alt="jordan"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        NIKE AIR JORDAN 1
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Acheter</Button>
        <Button size="small">Ajouter au panier</Button>
      </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={jordan}
        alt="jordan"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        NIKE AIR JORDAN 1
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Acheter</Button>
        <Button size="small">Ajouter au panier</Button>
      </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={jordan}
        alt="jordan"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        NIKE AIR JORDAN 1
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Acheter</Button>
        <Button size="small">Ajouter au panier</Button>
      </CardActions>
        </Card>
        </div>
    </div>

  );
}
