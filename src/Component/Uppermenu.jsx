import React from 'react'
import { Paper } from '@mui/material'
import { useGameMode } from '../Context/GameMood';
import { useTheme } from '../Context/ThemeContext';

function Uppermenu({countDown}) {

  const{theme}=useTheme();

  const {setGameTime, setGameMode, gameMode, setGameWords} = useGameMode();

  const updateTime = (e)=>{
    setGameTime(e.target.id);
  }

  const setMode = (e)=>{
    setGameMode(e.target.id);
  }

  const updateWords = (e)=>{
    setGameWords(e.target.id);
  }

  return (
    <div style={{width:"100%",padding:"10px 0" }}>
        <Paper sx={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:theme.textbg2}}>
        {gameMode==='time'?(<h2 className="timer">{countDown}s</h2>):(<></>)}
      
      
        <div className="modes">
          <span className='mode'id='time' onClick={(e)=>setMode(e)} style={{fontSize: '20px', paddingRight:'10px', borderRight:'1px solid'}}>Time</span>
          <span className='mode' id='words'onClick={(e)=>setMode(e)} style={{fontSize: '20px',paddingLeft:'10px'}}>Words</span>
        </div>

        {gameMode==='time'?(
          <div className='time-mode'>
             <div className="timmer-menu">
            <div className="time" id={15} onClick={(e)=>updateTime(e)}>15s</div>
            <div className="time"id={30} onClick={(e)=>updateTime(e)} >30s</div>
            <div className="time"id={60} onClick={(e)=>updateTime(e)} >60s</div>
          </div>
          </div>
        ):(
          <div className='word-mode'>
           <div className="timmer-menu">
            <div className="time" id={15} onClick={(e)=>updateTime(e)}>10</div>
            <div className="time"id={30} onClick={(e)=>updateTime(e)} >20</div>
            <div className="time"id={60} onClick={(e)=>updateTime(e)} >30</div>
          </div>
          </div>
        )}

         
        </Paper>
    </div>
  )
}

export default Uppermenu