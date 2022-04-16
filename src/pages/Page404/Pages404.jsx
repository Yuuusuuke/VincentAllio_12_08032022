import React from "react";
import "./Page404.css";
import { Link } from "react-router-dom";

/**
 * Page404 function
 * @date 2022-04-16
 * 
 * @returns {any}
 */
function Page404(){
    return(
        <div className="Errormain">
            <h1>404</h1>
            <Link to="/">Redirection vers le menu principal</Link>
        </div>
    );
}

export default Page404;