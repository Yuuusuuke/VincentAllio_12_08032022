import React from "react";
import "./LineGraph.css";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function LineGraph(props){
    function sortArray(arrayData){
        let result = [];
        const day = ["L","M","M","J","V","S","D"];
        for(let i = 0; i<arrayData.length; i++){
            result.push({day: day[i], sessionLength: arrayData[i].sessionLength});
        }
        return result;
    }
    let data = sortArray(props.data);

    console.log(data);

    return(
        <>
        <h3 className="lineGraphTitle">Durée moyenne des sessions</h3>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{top: 40, left: 4}}>
          <XAxis dataKey="day" stroke="white" axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{backgroundColor: "red", color: "white"}} cursor={{ fill: 'black', strokeWidth: 2 }} />
          <Line type="monotone" dot={false} dataKey="sessionLength" stroke="white" strokeWidth={1.5}/>
        </LineChart>
      </ResponsiveContainer>
      </>
    );
}