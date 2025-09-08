import React from 'react';
import Marquee from "react-fast-marquee";
import sponsorImage1 from '../../public/sponsor/01.png';
import sponsorImage2 from '../../public/sponsor/02.png';
import sponsorImage3 from '../../public/sponsor/03.png';
import sponsorImage4 from '../../public/sponsor/04.png';
import sponsorImage5 from '../../public/sponsor/05.png';
import sponsorImage6 from '../../public/sponsor/06.png';

const Brand = () => {
    return (
        <Marquee>
            <img src={sponsorImage1.src} alt="Sponsor 1" style={{ margin: "3rem" }} />
            <img src={sponsorImage2.src} alt="Sponsor 2" style={{ margin: "3rem" }} />
            <img src={sponsorImage3.src} alt="Sponsor 3" style={{ margin: "3rem" }} />
            <img src={sponsorImage4.src} alt="Sponsor 4" style={{ margin: "3rem" }} />
            <img src={sponsorImage5.src} alt="Sponsor 5" style={{ margin: "3rem" }} />
            <img src={sponsorImage6.src} alt="Sponsor 6" style={{ margin: "3rem" }} />
        </Marquee>
    );
}

export default Brand;