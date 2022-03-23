/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState} from "react";
import "./GlobalInfo.css";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import Card from "../../components/Card/Card";
import {faFire, faDrumstickBite, faAppleWhole, faBurger} from "@fortawesome/free-solid-svg-icons";

export default function GlobalInfo(){
    const navigation = useNavigate();
    const {id} = useParams();
    const {data, fetchData} = useContext(DataContext);
    const [info, setInfo] = useState(null);
    
    // Get data once
    useEffect(() => {
        fetchData(id);
    }, []);

    // Check error value and set data if it's ok
    useEffect(() => {
        if(data.error >= 200 && data.error <= 299){
            setInfo(data);
        }
        else if(data.error === 404){
            navigation("/404");
        }
    }, [data])

    return(
        <>{console.log(info)}
        {/* Display only if a data is set */}
        {info != null && 
        <>
        <div className="globalInfoHeader">
            <h1 className="globalInfoTitle">
                Bonjour <span className="globalInfoTitle--red">{info.globalInfo.data.userInfos.firstName}</span>
            </h1>
            <p className="globalInfoSub">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
        </div>
        <Card data={`${info.globalInfo.data.keyData.calorieCount}kCal`} type="Calories" icon={faFire} color="red" />
        <Card data={`${info.globalInfo.data.keyData.proteinCount}g`} type="Proteines" icon={faDrumstickBite} color="blue" />
        <Card data={`${info.globalInfo.data.keyData.carbohydrateCount}g`} type="Glucides" icon={faAppleWhole} color="yellow" />
        <Card data={`${info.globalInfo.data.keyData.lipidCount}g`} type="Lipides" icon={faBurger} color="pink" />
        </>
        }
        </>
    );
}