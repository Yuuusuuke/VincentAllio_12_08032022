import React from "react";
import NavIcon from "../NavIcon/NavIcon";
import "./SideNavBar.css";

import {faPersonBiking, faPersonSwimming, faDumbbell, faPersonSnowboarding} from "@fortawesome/free-solid-svg-icons";

export default function SideNavBar(){
    return(
        <nav className="sideNavBar">
            <div className="sideNavBar__table">
                <NavIcon icon={faPersonSnowboarding} />
                <NavIcon icon={faPersonSwimming} />
                <NavIcon icon={faPersonBiking} />
                <NavIcon icon={faDumbbell} />
            </div>

            <p className="sideNavBar__credits">Copyright, SportSee 2020</p>
        </nav>
    );
}