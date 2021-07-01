import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { StaticImage } from "gatsby-plugin-image";
import { push as Menu } from "react-burger-menu";
import PropTypes from 'prop-types';
import "./navigation.scss";


const Navigation = ({link1, link2, link3}) => {

    return (
        <section className="main-navigation">
            <div className="desktop">
                <nav className="primary-nav" aria-label="Navigation">
                    <AnchorLink href="#page-wrap">
                        <StaticImage 
                            src="../../images/logo.png" 
                            alt="Julia Trela Notary Public Logo"
                            className="logo"
                            width={100} />
                        </AnchorLink>
                    <ul>
                        <li><AnchorLink offset='100' href="#about">{link1}</AnchorLink></li>
                        <li><AnchorLink offset='100' href="#services">{link2}</AnchorLink></li>
                        <li><AnchorLink offset='100' href="#contact" className="btn btn-primary">{link3}</AnchorLink></li>
                    </ul>
                </nav>
            </div>
            <div className="mobile">
                <nav>
                    <div className="mobile-only">
                        <AnchorLink href="#page-wrap">
                            <StaticImage 
                                src="../../images/logo.png"  
                                alt="Julia Trela Notary Public Logo"
                                className="logo"
                                width={100} />
                            </AnchorLink>
                        <div id="outer-container">
                            <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right>
                                <ul>
                                    <li><AnchorLink offset='100' href="#about">{link1}</AnchorLink></li>
                                    <li><AnchorLink offset='100' href="#services">{link2}</AnchorLink></li>
                                    <li><AnchorLink offset='100' href="#contact" className="btn btn-primary">{link3}</AnchorLink></li>
                                </ul>
                            </Menu>
                        </div>
					</div>
                </nav>
            </div>
        </section>
    )
}

export default Navigation

Navigation.propTypes = {
    link1: PropTypes.string,
    link2: PropTypes.string,
    link3: PropTypes.string
}

Navigation.defaultProps = {
    link1: null,
    link2: null,
    link3: null
}