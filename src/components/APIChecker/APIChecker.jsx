/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";


function APIChecker(){
    const navigation = useNavigate();
    const {id} = useParams();
    const {data, fetchData} = useContext(DataContext);
    
    useEffect(() => {
        fetchData(id);
    }, []);

    useEffect(() => {
        if(data.error >= 200 && data.error <= 299){
            console.log(data);
        }
        else if(data.error === 404){
            navigation("/404");
        }
    }, [data])

    return(
        <>
        </>
    );
}

export default APIChecker;