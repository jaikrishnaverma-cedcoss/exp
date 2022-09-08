import React from 'react';
function Li(props) {
    return ( 
        <>
        {
        props.renderHistory.map(
               (li)=><li key={li.id} className={`${(li.transactionType==='Expense')?"minus":"plus"}`}>{li.text} <span>{`${(li.transactionType==='Expense')?"-":"+"} $${li.amount}`}</span><button onClick={()=>props.delmaster(li.id)} className="delete-btn">x</button><button onClick={()=>props.editMaster(li.id)} className="edit-btn">Edit</button></li>)
            }</>
     );
}

export default Li;