import React from 'react';
function BtnActive(props) {
    let btn=["Grocery", "Veggies", "Travelling" ,"Miscellaneous","All"]
    return ( 
        <>
      <div className="flex">
        {
            btn.map((d)=><button onClick={props.btnClick}className={`btn ${(props.btnActive===d)? 'activeBtn' : 'btn' }`} style={{width:"19%"}}>{d}</button>)
        }
         </div>
        </>
     );
}

export default BtnActive;