import React from "react";

import { HomePgDiv } from "../components/Div"
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'




function Service(){


     

    return(
        <>
        <div className="bg-secondary bg-gradient">
            <br />
           <HomePgDiv src={img1} h4Text="NIKE BRAND" pText="The world's largest athletic apparel company, Nike is best known for its footwear, apparel, and equipment. Founded in 1964 as Blue Ribbon Sports, the company became Nike in 1971 after the Greek goddess of victory. One of the most valuable brands among sport businesses, Nike employs over 76,000 people worldwide." />
            <HomePgDiv src={img2} h4Text="NIKE AIRMAX" pText="*4﻿ The co-founder of Nike, Phil Knight, and his son Travis Knight, along with the holding companies and trusts they control, own more than 97% of outstanding Class A shares. 5﻿ This allows the Knight family to exercise effective control of Nike even though it is a publicly traded business."  />
            <HomePgDiv src={img3} h4Text="NIKE HARDER" pText="Nike and adidas are the two biggest sportswear companies. Nike's scale is a big advantage, adidas doesn't even come close. adidas looks cheaper than Nike and has been a better growth story, but there is a reason for Nike's high valuation. Nike is better managed than adidas and has a stronger brand" />
            <HomePgDiv src={img4} h4Text="NIKE TENNIS" pText="It was founded in 1964 as Blue Ribbon Sports by Bill Bowerman, a track-and-field coach at the University of Oregon, and his former student Phil Knight. They opened their first retail outlet in 1966 and launched the Nike brand shoe in 1972. The company was renamed Nike, Inc., in 1978 and went public two years later."   />
            <HomePgDiv src={img5} h4Text="NIKE SATAN " pText="Nike. In Greek mythology, Nike is the Winged Goddess of Victory. The logo is derived from goddess' wing,'swoosh', which symbolises the sound of speed, movement, power and motivation.."/>
     
            <HomePgDiv src={img6} h4Text="NIKE BUILT" pText="Nike retains title as world's most valuable apparel brand while luxury brands boom after COVID-19 | Press Release | Brand Finance."   />
            <br />
            </div>
        </>

    )
}

export default Service
