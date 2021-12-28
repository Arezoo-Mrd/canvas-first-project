import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { BarChart } from "../../tools/bar";
import styles from "./Charts.module.css";

const Charts = () => {
    const chart = useRef(null);

    useEffect(() => {
        
        const min = 1;
        const max = 200;
        let data = [
            {label: 'Jan', value: 32},
            {label: 'Feb', value: 177},
            {label: 'March', value: 123},
            {label: 'April', value: 55},
            {label: 'May', value: 67},
        ]
    
    
        // Charts Specifications
        const targetId = chart;
        const canvasWidth = 600;
        const canvasHeight = 450
    
    
        function getRandomInt(min , max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min)
        }
        // Create Chart
      
            const new_chart = new BarChart(targetId, canvasWidth, canvasHeight , data)
      

    }, [])

    return (
        <>
            <div className={styles.Charts} ref={chart} id='chart'>
                this will be our bar chart
            </div>
        </>
    );
};

export default Charts;
