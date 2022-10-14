import React from "react";

import { HomePgDiv } from "../components/Div"
import nike from '../images/nike.jpg'




 function Home() {
    
    return (
     <>
            <div className="banner-image-home">
                
        <div className="about-nike">
          <h2 className="about-nike-text">NIKE</h2>
          <p>
            "The world's largest athletic apparel company, Nike is best known for its footwear, apparel, and equipment."
          </p>
        </div>
            </div>
<div style={{background: "smokey white"}}>
    <br />
    <h1 style={{textShadow:" 4px 4px 1px brown", fontFamily: "Rowdies, cursive"}}>BRANDED SHOES</h1>

    <h4 style={{textShadow:" 4px 4px 1px gray", fontFamily: "Rowdies, cursive"}}>The world's largest athletic apparel company, Nike is best known for its footwear, apparel, and equipment. Founded in 1964 as Blue Ribbon Sports, the company became Nike in 1971 after the Greek goddess of victory. One of the most valuable brands among sport businesses, Nike employs over 76,000 people worldwide </h4>
    <br />
</div>
<div style={{background: "lightgrey"}}>
<br />
<HomePgDiv src={nike} h4Text="NIKE BRAND" pText="The world's largest athletic apparel company, Nike is best known for its footwear, apparel, and equipment. Founded in 1964 as Blue Ribbon Sports, the company became Nike in 1971 after the Greek goddess of victory. One of the most valuable brands among sport businesses, Nike employs over 76,000 people worldwide." />
</div>
<div style={{background: "smokeywhite"}}>
    <h1 style={{textShadow:" 4px 4px 1px brown", fontFamily: "Rowdies, cursive"}}>UNIQUE NIKE SHOES</h1>
    <h4 style={{textShadow:" 4px 4px 1px gray", fontFamily: "Rowdies, cursive"}}>Nike products are made in factories that aren't actually owned by the company itself. Instead, contractors own the factories and Nike pays them to produce the goods. The Air Jordan 1 was made famous by basketball player Michael Jordan; however, Jordan hated the colors red and black when he first saw the shoes</h4>
    <br />
</div>


            </>

      
    )
}

export default Home
