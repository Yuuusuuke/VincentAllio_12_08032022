import React from "react";
import "./LineGraph.css";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

/**
 * LineGraph function
 * @date 2022-04-16
 * 
 * @param {Array} props.data
 * 
 * @returns {any}
 */
export default function LineGraph(props){

    /**
     * sortArray function
     * @date 2022-04-16
     * 
     * @param {Array} arrayData
     * 
     * @returns {Array}
     */
    function sortArray(arrayData){
        let result = [];
        const day = ["L","M","M","J","V","S","D"];
        for(let i = 0; i<arrayData.length; i++){
            result.push({day: day[i], sessionLength: arrayData[i].sessionLength});
        }
        return result;
    }
    
    let data = sortArray(props.data);

    /**
     * CustomTooltip function
     * @date 2022-04-16
     * 
     * @param {any} active
     * @param {any} payload
     * @param {any} label
     * 
     * @returns {any}
     */
    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="tooltip">
            <p className="tooltip__content">{`${payload[0].value} min`}</p>
          </div>
        );
      }
    
      return null;
    };

    return(
      <>
      <h3 className="lineGraphTitle">Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{top: 40, left: 4}}>
          <XAxis dataKey="day" stroke="white" axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'black', strokeOpacity: 0.15, strokeWidth: 50, fill: 'rgba(255, 255, 255, 0.1)' }} />
          <Line type="monotone" dot={false} dataKey="sessionLength" stroke="white" strokeWidth={1.5}/>
        </LineChart>
      </ResponsiveContainer>
      </>
    );
}

LineGraph.prototype = {
  data: PropTypes.array
};