import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import {useTheme} from '../Context/ThemeContext';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Graph = ({graphData,correctCharData,incorrectCharData,missedCharData,extraCharData,type}) => {

    const {theme} = useTheme();

    if((correctCharData===undefined) && (incorrectCharData===undefined) && (missedCharData===undefined) && (extraCharData===undefined)){
        return (<div>
            
            <Line 
    
            data={
                {
                    labels: graphData.map(i=>(type==='date')?(""):(i[0]+1))   ,
                    datasets: [
                        {
                            data: graphData.map(i=>i[1]),
                            label: "wpm",
                            borderColor: theme.stats
                        }
                    ]
                }
            }   />
        </div>)
    }else{
        return(
<div>
        <Line 

        data={
            {
                labels: graphData.map(i=>(type==='date')?(""):(i[0]+1))   ,
                datasets: [
                    {
                        data: graphData.map(i=>i[1]),
                        label: "wpm",
                        borderColor: theme.stats
                    },
                    {
                        data: correctCharData.map(i=>i[1]),
                        label: "Correct Character",
                        borderColor: "green"
                    },
                    {
                        data: incorrectCharData.map(i=>i[1]),
                        label: "Incorrect Character",
                        borderColor: "red"
                    },
                    {
                        data: missedCharData.map(i=>i[1]),
                        label: "Missed Character",
                        borderColor: "cyan"
                    },
                    {
                        data: extraCharData.map(i=>i[1]),
                        label: "Extra Character",
                        borderColor: "violet"
                    }
                ]
            }
        }   />
    </div>)
       
}
}

export default Graph