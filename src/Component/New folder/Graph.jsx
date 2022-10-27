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

const Graph = ({WPMData,correctData,incorrectData,type}) => {
// console.log(WPMData)
// console.log(correctData)
// console.log(incorrectData)
    // const {theme} = useTheme();

    // [[0,0],[0,0]]

  return (
    <div>
        <Line 

        data={
            {
                // labels: WPMData.map(i=>(type==='date')?(""):(i[0]+1))   ,
                labels: WPMData.map(i=>(i[0]+1)),
                datasets: [
                    {
                        data: WPMData.map(i=>i[1]),
                        label: "wpm",
                        borderColor: "gold"
                    },
                    {
                        data: correctData.map(j=>j[1]),
                        label: "correct Data",
                        borderColor: "blue"
                    },
                ]
            }
        }   />
    </div>
  )
}


export default Graph