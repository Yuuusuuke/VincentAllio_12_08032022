import React from "react";
import "./NavIcon.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function NavIcon(props){
    return(
        <div className="navIcon">
            <FontAwesomeIcon className="navIcon__icon" icon={props.icon} />
        </div>
    );
}