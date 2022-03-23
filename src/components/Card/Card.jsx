import React from "react";
import "./Card.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

/**
 * Card function
 * @date 2022-03-23
 * 
 * @param {string} props.color
 * @param {IconDefinition} props.icon
 * @param {string} props.data
 * @param {string} props.type
 * 
 * @returns {any}
 */
export default function Card(props){
    return(
        <div className="card">
            <div className={`card__iconArea icon--${props.color}`}>
                <FontAwesomeIcon className="card__iconArea__icon" icon={props.icon} />
            </div>
            <div className="card__dataArea">
                <p className="card__dataArea__data">{props.data}</p>
                <p className="card__dataArea__type">{props.type}</p>
            </div>
        </div>
    );
}