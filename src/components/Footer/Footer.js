import React from "react";
import "./footer.scss";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
	var date = new Date().getFullYear();
    return (
        <section className="footer__section">
            <StaticImage 
                src="../../images/Seal_Red.png" 
                alt="Notary Seal in Red"
                layout="fixed"
                width={100} />
        </section>
    )
}

export default Footer