import React from "react";
import "./Radar.css";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from 'recharts';
import PropTypes from 'prop-types';

/**
 * RadarGraph function
 * @date 2022-04-16
 * 
 * @param {Array} props.data
 * @param {String} props.graphColor
 * @param {String} props.strokeColor
 * 
 * @returns {any}
 */
export default function RadarGraph(props){

    /**
     * sortArray function
     * @date 2022-04-16
     * 
     * @param {Array} arrayData
     * @param {Array} arrayLegend
     * 
     * @returns {Array}
     */
    function sortArray(arrayData, arrayLegend){
        let result = [];
        for(let i = 0; i<arrayData.length; i++){
            result.push({data: arrayData[i].value, type: arrayLegend[i+1]});
        }
        return result;
    }

    let data = sortArray(props.data.data, props.data.kind);
      
    return(
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="50%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="type" stroke="white" tickLine={false}/>
                <Radar name="Performances" dataKey="data" stroke={props.strokeColor} fill={props.graphColor} fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    );
}

RadarGraph.prototype = {
    data: PropTypes.array,
    graphColor: PropTypes.string,
    strokeColor: PropTypes.string
};