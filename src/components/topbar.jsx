import React from "react";
import citysport from "../logo/citysport.png"
import "../App.css";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Topbar = () => {
    return ( 
        <div className="navbar">
            <img src={citysport} alt="citysport" className="citysport" />
            <Stack direction="row" spacing={1}>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon sx={{fontSize: 35}}/>
                </IconButton>
            </Stack>
        </div>
     );
}
 
export default Topbar;