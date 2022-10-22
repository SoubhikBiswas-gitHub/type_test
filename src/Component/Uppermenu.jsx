import React from 'react'
import { Paper } from '@mui/material'
import {useGameMode} from '../Context/GameMood'

function Uppermenu({countDown}) {

const {setGameTime}=useGameMode();

const upadateTime=(e)=>{
    setGameTime(e.target.id);
}

  return (
    <div style={{width:"100%",padding:"10px 0" }}>
        <Paper sx={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <h2 className="timer">{countDown} s</h2>
          <div className="timmer-menu">
            <div className="time" id={15} onClick={(e)=>upadateTime(e)}>15s</div>
            <div className="time"id={30} onClick={(e)=>upadateTime(e)} >30s</div>
            <div className="time"id={60} onClick={(e)=>upadateTime(e)} >60s</div>
          </div>
        </Paper>
    </div>
  )
}

export default Uppermenu