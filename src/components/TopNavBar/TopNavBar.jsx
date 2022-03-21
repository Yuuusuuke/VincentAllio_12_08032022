import React from "react";
import "./TopNavBar.css";
import logo from "../../ressources/images/logo.png"

export default function TopNavBar(){
    return(
        <nav className="topNavBar">
            <img className="topNavBar__logo" src={logo} alt="logo" />
            <a href="#" className="topNavBar__link">Accueil</a>
            <a href="#" className="topNavBar__link">Profil</a>
            <a href="#" className="topNavBar__link">Réglage</a>
            <a href="#" className="topNavBar__link">Communauté</a>
        </nav>
    );
}