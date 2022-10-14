import React from "react";
import {BrowserRouter as Router,Route,Routes,Link} from
   "react-router-dom";

  
import Home from "../screens/Home"  
import Contact from "../screens/Contact" 
import About from "../screens/About"  
import Service from "../screens/Service"  
import Profile from "../screens/profile"  
import Dashboard from "../screens/dashboard"  
import NotFound from "../screens/NotFound" 



import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material';

import logo from "../images/logo.jpg";
// import appbar from "../images/appbar.jpg";

export default function AppRouter() {
  return (
    <Router>

<AppBar position="static" style={{ backgroundColor: "black", boxShadow: "0 0.0625rem 0.5rem 0 rgb(0 0 0 / 4%), 0 0.0625rem 0.3125rem 0 rgb(0 0 0 / 4%)" }}>

<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    
    {/* Navbar line 1 */}
    <Box sx={{ width: "80%", height: "80p%" }}>
        {/* <Toolbar sx={{ display: 'flex', justifyContent: "space-between", flexWrap: "wrap" }}>
            <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                <Typography variant="caption">Language </Typography><ExpandMoreIcon />
                <Typography mx={4} variant="caption">Sign Up for Email</Typography>
                <Typography variant="caption">Careers</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                <SearchIcon />
                <Typography mr={4} variant="caption">Search</Typography>

                <FmdGoodOutlinedIcon />
                <Link to="Locate">
                    <Typography mr={4} color={"#216BAE"} variant="caption">Change your location</Typography>
                </Link>

                <Button className="button" variant="contained">Order Now</Button>
            </Box>
        </Toolbar> */}

        {/* Navbar line 2 */}
        <Toolbar sx={{ display: 'flex' , flexWrap: "wrap" }}>
            {/* <Box className="nav-link">
                <Link to="/" style={{ display: 'flex', justifyContent: "center", alignItems: "center", color: "#000", textDecoration: "none" }}>
                Our Menu<ExpandMoreIcon />
                </Link>
            </Box> */}
            <img style={{
               marginBottom: "10px",
               borderRadius: "20px",
               borderBottom: "3px solid white"}} src={logo} width="170px" alt="Logo" />
          
            <Link  to='Home' className="nav-link" style={{color: "white"}}>HOME</Link>
            <Link to='About' className="nav-link" style={{color: "white"}}>ABOUT</Link>
            <Link to='Contact' className="nav-link" style={{color: "white"}}>CONTACT</Link>
            <Link to='Service'className="nav-link" style={{color: "white"}}>SERVICES</Link>
        </Toolbar>
        {/* <img style={{
               marginBottom: "10px",
               borderRadius: "20px",
               borderBottom: "3px solid white"}} src={appbar} width="100%" /> */}
    </Box>
</Box>
</AppBar>
        <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="About" element={<About />} />
            <Route path="Service" element={<Service />} />
            <Route path="dashboard/*" element={<Dashboard />} />
            <Route path="profile/:userName" element={<Profile />} />


            <Route path="*" element={<NotFound />} />

           
        </Routes>
 
    </Router>
  );
}

