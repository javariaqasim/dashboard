import React from "react";
import '../App.css';

import { Container, Box, Grid, Divider, Typography } from '@mui/material';
import Logo from "../images/logo.jpg";
import AppStore from "../images/app_store_badge.png";
import GooglePlay from "../images/google_play_badge.png";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <>
            <footer>
                <Container>
                    <Box py={3} sx={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>

                        <ul>
                            <li className="li-header" style={{color: "brown"}}>ABOUT US</li>
                            <li>Mission</li>
                            <li>History</li>
                            <li>Leadership</li>
                            <li>Values</li>
                        
                        </ul>

                        <ul>
                            <li className="li-header" style={{color: "brown"}}>SERVICES</li>
                            <li>Sitemap</li>
                            <li>Our team</li>
                            <li>Parties</li>
                            <li>PlayPlaces</li>
                            
                        </ul>

                        <ul>
                            <li className="li-header" style={{color: "brown"}}>COMMUNITY</li>
                            <li>Terms</li>
                            <li>Refrence </li>
                            <li>Privacy</li>
                            <li>Brand</li>
                           
                        </ul>

                        <ul>
                            <li className="li-header" style={{color: "brown"}}>CONTACT US</li>
                            <li>Message</li>
                            <li>Phone</li>
                            <li>Feedback</li>
                            <li>Asked Questions</li>
                        </ul>
                    </Box>

                    <Box py={3} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex" }}>

                            <a href="">
                                <FacebookOutlinedIcon style={{ fontSize: "16px" }} />
                            </a>

                            <a href="">
                                <TwitterIcon style={{ fontSize: "16px" }} />
                            </a>

                            <a href="">
                                <YouTubeIcon style={{ fontSize: "16px" }} />
                            </a>

                            <a href="">
                                <InstagramIcon style={{ fontSize: "16px" }} />
                            </a>

                        </div>

                        <div>
                            <img src={AppStore} />
                            <img src={GooglePlay} />
                        </div>

                    </Box>
                    <Divider />


                    <Box py={3} my={5} sx={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                        <Box width="80%" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexWrap: "wrap" }}>

                            <li style={{marginRight: "50px", marginBottom: "20px"}}>HOME</li>
                            <li style={{marginRight: "50px", marginBottom: "20px"}}>ABOUT US</li>
                            <li style={{marginRight: "50px", marginBottom: "20px"}}>CONTACT US</li>
                            <li style={{marginRight: "50px", marginBottom: "20px"}}>SERVICES</li>
                            <Box style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                            <img  style={{
                            marginBottom: "10px",
                            borderRadius: "20px",
                            borderBottom: "3px solid white"}} src={Logo} width="170px" />
                            <Typography ml={10} width="60%" variant="p">© copyright - 2022 NIKE All Rights Reserved</Typography>
                        </Box>
                        </Box>
                    </Box>
                </Container>
            </footer>
        </>
    )
}