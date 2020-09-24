import React from "react"
import logo from "../Images/logo2.png"
import Image_1 from "../Images/Image_1.jpg"
import Image_2 from "../Images/Image_2.jpg"
import Appstore from "../Images/Appstore.png"
import Googlestore from "../Images/Googlestore.png"
import { FaFacebookSquare, FaInstagram, FaRebel } from 'react-icons/fa';
import { Link } from "gatsby";

export default function Home() {
    return (
        <div className={"wrapper"}>
            <div className={"logoImage"}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={"firstImage"} style={{ backgroundImage: `url(${Image_2})` }}>
                <div className={"container"}>
                    <Link to="/menu">
                        <button>Menu</button>
                    </Link>
                </div>
            </div>
            <div className={"secondImage"} style={{ backgroundImage: `url(${Image_1})` }}>
                <div className={"container"}>
                    <Link to="/menu">
                        <button>Menu</button>
                    </Link>
                </div>
            </div>
            <div className={"bookSeat"}>
                <p>Book a seat here</p>
                <div className={"faRebel"}><FaRebel /></div>
                <span className={"bookinghamStyle"}>bookingham</span>
                <div className={"icons"}>
                    <img src={Appstore} className={"appStore"} alt='appStoreLogo'/>
                    <img src={Googlestore} className={"googleStore"} alt='googleStoreLogo'/>
                </div>
            </div>
            <div className={"contactFooter"}>
                <div className={"logoImageWrapper"}>
                    <div className={"logoImage"}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className={"socialIcons"}>
                        <div className={"sizeIcon"}><FaFacebookSquare /> </div>
                        <div className={"sizeIcon"}><FaInstagram /></div>
                        <div className={"findUs"}>
                            <div>Find us on</div>
                            <div className={"socialIconsAlign"}>facebook.<span>Instagram</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

