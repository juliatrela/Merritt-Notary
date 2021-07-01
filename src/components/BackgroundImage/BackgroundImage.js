import React from "react";
import "./background-image.scss";
import PropTypes from 'prop-types';

const BackgroundImage = ({titleFirst, titleSecond, ariaLabelAltText}) => {

    return (
        <section className="background-img__section">
            <span className="hero-img" role="img" aria-label={ariaLabelAltText}></span>
            <div className="copy">
                <h1>{titleFirst}<br/>{ titleSecond ? titleSecond : null }</h1>
            </div>
        </section>
    )
}

export default BackgroundImage

BackgroundImage.propTypes = {
    titleFirst: PropTypes.string,
    ariaLabelAltText: PropTypes.string,
    titleSecond: PropTypes.string
}

BackgroundImage.defaultProps = {
    titleFirst: null,
    ariaLabelAltText: null,
    titleSecond: null
}