import React from "react";
import "./tile.scss";
import { IoCheckmarkOutline } from "react-icons/io5";
import PropTypes from 'prop-types';

const Tile = ({ title, icon, items }) => {
    return (
        <div className="tile">
            <div className="tile__icon">{icon}</div>
            <div className="content">
                <h3>{title}</h3>
                <ul>
                    {items.map((item, i) => <li key={i}><IoCheckmarkOutline /> {item}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Tile

Tile.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.object
}

Tile.defaultProps = {
    title: null,
    icon: null
}