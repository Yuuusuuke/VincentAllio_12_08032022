import React from "react";
import "./NavIcon.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';

/**
 * NavIcon
 * @date 2022-03-23
 * 
 * @param {IconDefinition} props.icon
 * 
 * @returns {any}
 */
export default function NavIcon(props){
    return(
        <div className="navIcon">
            <FontAwesomeIcon className="navIcon__icon" icon={props.icon} />
        </div>
    );
}

NavIcon.prototype = {
    icon: PropTypes.IconDefinition
};