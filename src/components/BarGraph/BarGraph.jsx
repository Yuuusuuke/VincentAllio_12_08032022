import React from "react";
import "./BarGraph.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function BarGraph(props){
    console.log(props.data);
    function sortArray(arrayData){
        let result = [];
        for(let i = 0; i<arrayData.length; i++){
            result.push({calories: arrayData[i].calories, kilogram: arrayData[i].kilogram, day: i});
        }
        return result;
    }
    
    let data = sortArray(props.data);
    return(
        <>
        <div className="barGraphHeader">
            <h3 className="barGraphTitle">Activité quotidienne</h3>
            <div className="barGraphLegend">
                <div className="barGraphType">
                    <div className="typeCircle typeCircle--black" />
                    <p className="typeText">Poids (kg)</p>
                </div>
                <div className="barGraphType">
                    <div className="typeCircle typeCircle--red" />
                    <p className="typeText">Calories brûlées (kCal)</p>
                </div>
            </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
              top: 50,
              left: -10
            }}
        >
          <CartesianGrid strokeDasharray="3 2" stroke="#DEDEDE"/>
          <XAxis dataKey="day" stroke="#9B9EAC" />
          <YAxis stroke="#9B9EAC" />
          <Tooltip cursor={{ fill: '#C4C4C480', strokeWidth: 2 }} />
          <Bar dataKey="kilogram" fill="#282D30" radius={[25,25,0,0]} barSize={7}  />
          <Bar dataKey="calories" fill="#E60000" radius={[25,25,0,0]} barSize={7} />
        </BarChart>
      </ResponsiveContainer>
      </>
    );
}