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
// import {useTheme} from '../Context/ThemeContext';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Graph = ({graphData}) => {
// console.log(graphData)
    // const {theme} = useTheme();

    // [[0,0],[0,0]]

  return (
    <div>
        <Line 

        data={
            {
                // labels: graphData.map(i=>(type==='date')?(""):(i[0]+1))   ,
                labels: graphData.map(i=>(i[0]+1)),
                datasets: [
                    {
                        data: graphData.map(i=>i[1]),
                        label: "wpm",
                        borderColor: "gold"
                    }
                ]
            }
        }   />
    </div>
  )
}

export default Graph