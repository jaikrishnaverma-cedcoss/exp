import React from 'react';
import Li from './Li';
import { useState } from 'react';

import BtnActive from './BtnActive';
function History(props) {
   let [btnActive,setbtnActive]=useState('All')
   const btnClick=(event)=>{
    setbtnActive(event.target.innerText)
    props.changeRenderhistory(String(event.target.innerText))
   }

    return (
        <>
            <div style={{display:"flex",justifyContent:"space-between"}}><h3>History</h3> <h3>{props.htotal}</h3></div>
         <BtnActive btnActive={btnActive} btnClick={btnClick}/>
            <ul id="list" className="list">
              <Li renderHistory={props.renderHistory} editMaster={props.editMaster} delmaster={props.delmaster}/>
                
            </ul>
        </>
    );
}

export default History;