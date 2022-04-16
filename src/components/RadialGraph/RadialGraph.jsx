import React from "react";
import "./RadialGraph.css";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';


/**
 * RadialGraph function
 * @date 2022-04-16
 * 
 * @param {Array} props.data
 * @param {String} props.color
 * 
 * @returns {any}
 */
export default function RadialGraph(props){
    const data = [{value: props.data}];

    return(
        <div className="RadialGraph">
        <p className="Radial__title">Score</p>
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart innerRadius="80%" barSize={10} data={data} startAngle={90} endAngle={450} >
                <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
                <RadialBar background dataKey="value" cornerRadius={5} fill={props.color} />
            </RadialBarChart>
        </ResponsiveContainer>
        <p className="Radial__label">
            <span className="Radial__percent">{props.data*100}%</span><br/> de votre objectif
        </p>
        </div>
    );
}

RadialGraph.prototype = {
    data: PropTypes.array,
    color: PropTypes.string
};