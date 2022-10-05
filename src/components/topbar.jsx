import React from "react";
import citysport from "../logo/citysport.png"
import "../App.css";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link } from "react-router-dom";

const Topbar = ({NumberArticleInCart}) => {
    return ( 
        <div className="navbar">
            <Link to="/">
            <img src={citysport} alt="citysport" className="citysport" />
            </Link>
            <Link to="/panier">
            <Stack direction="row" spacing={1}>
                
                <IconButton color="primary" aria-label="add to shopping cart" id= 'cartbtn'>
                    {NumberArticleInCart}
                    <AddShoppingCartIcon sx={{fontSize: 35}}/>
                </IconButton>
                
            </Stack>
            </Link>
            
            
            {/* <Outlet /> */}
        </div>
     );
}
 
export default Topbar;