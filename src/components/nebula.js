import React from 'react';
import classes from './nebula.css';
import NebulaImage from '../assets/black.png'

const Nebula = (props)=>{
   <div className={classes.NebulaImage} >
      <img src={NebulaImage} className={classes.NebulaImg}/>
   </div>

}

export default Nebula;