/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState} from "react";
import "./GlobalInfo.css";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import Card from "../../components/Card/Card";
import RadarGraph from "../../components/Radar/Radar";
import {faFire, faDrumstickBite, faAppleWhole, faBurger} from "@fortawesome/free-solid-svg-icons";
import RadialGraph from "../../components/RadialGraph/RadialGraph";
import { Link } from "react-router-dom";
import BarGraph from "../../components/BarGraph/BarGraph";
import LineGraph from "../../components/LineGraph/LineGraph";

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
        {info != null ? 
        <>
        <div className="globalInfoHeader">
            <h1 className="globalInfoTitle">
                Bonjour <span className="globalInfoTitle--red">{info.globalInfo.data.userInfos.firstName}</span>
            </h1>
            <p className="globalInfoSub">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
        </div>
        <div className="graphs">
            <div className="graphs__main">
                <div className="graphs__main__activity">
                    <BarGraph data={info.activity.data.sessions} />
                </div>
                <div className="graphs__main__performances">
                    <div className="graphs__main__performances__line">
                        <LineGraph data={info.averageSessions.data.sessions} />
                    </div>
                    <div className="graphs__main__performances__radar">
                        <RadarGraph data={info.performance.data} graphColor={"#FF0101"} strokeColor={"#FF0101"} />
                    </div>
                    <div className="graphs__main__performances__radial">
                        <RadialGraph data={info.globalInfo.data.todayScore} color="#FF0101" />
                    </div>
                </div>
            </div>
            <div className="graphs__cards">
                <Card data={`${info.globalInfo.data.keyData.calorieCount}kCal`} type="Calories" icon={faFire} color="red" />
                <Card data={`${info.globalInfo.data.keyData.proteinCount}g`} type="Proteines" icon={faDrumstickBite} color="blue" />
                <Card data={`${info.globalInfo.data.keyData.carbohydrateCount}g`} type="Glucides" icon={faAppleWhole} color="yellow" />
                <Card data={`${info.globalInfo.data.keyData.lipidCount}g`} type="Lipides" icon={faBurger} color="pink" />
            </div>
        </div>
        </>
        :
        <div className="InfoError">
            <h3>Impossible d'accéder aux données. Revenez ultérieurement.</h3>
            <Link to="/">Redirection vers le menu principal</Link>
        </div>
        }
        </>
    );
}