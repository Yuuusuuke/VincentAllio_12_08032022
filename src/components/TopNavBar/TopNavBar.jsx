/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./TopNavBar.css";
import logo from "../../ressources/images/logo.png"

/**
 * TopNavGraph function
 * @date 2022-04-16
 * 
 * @returns {any}
 */
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