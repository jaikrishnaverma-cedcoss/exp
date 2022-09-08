import React, { useState } from 'react';
import './Add.css'

function Update(props) {
    let [amt,setAmt]=useState(props.data[props.editIndex].amount)
    let [tx,setTx]=useState(props.data[props.editIndex].text)
    let btn=["Grocery", "Veggies", "Travelling" ,"Miscellaneous"]
    let initial={transactionType:props.data[props.editIndex].transactionType,expenseType:props.data[props.editIndex].expenseType,text:props.data[props.editIndex].text,amount:props.data[props.editIndex].amount}
    const changeHandler=(e)=>{
        console.log(e.target.name)
        if(e.target.name==="text")
        {
            setTx(e.target.value)
        }
        if(e.target.name==="amount")
        {
            setAmt(e.target.value)
        }
       
        initial = { ...initial, [e.target.name]: e.target.value };
    }

 const formSubmittedUpdate=(event)=>{
    event.preventDefault();
    props.UpdateData({transactionType:initial.transactionType,expenseType:initial.expenseType,text:tx,amount:amt},props.editIndex)
    event.target.reset();
    initial={transactionType:"Expense",expenseType:"Grocery",text:"",amount:0}
 }



      return (
        <>
            <form id="form" onSubmit={formSubmittedUpdate}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <div className="inputs">
                        <input required type="text" onChange={changeHandler} value={tx} name="text" id="amount" placeholder="Enter Text..." />
                        <select required name="expenseType" onChange={changeHandler}>
                                    <option value={props.data[props.editIndex].expenseType}>{props.data[props.editIndex].expenseType}</option>
                                    <option value="Grocery">Grocery</option>
                                    <option value="Veggies">Veggies</option>
                                    <option value="Travelling">Travelling</option>
                                    <option value="Miscellaneous">Miscellaneous</option>
                        </select>
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br></br>
                        (negative - expense, positive - income)</label
                    >
                    <div className="inputs">
                        <input type="number" required name="amount" onChange={changeHandler} value={amt} id="amount" placeholder="Enter amount..." />
                        <select name="transactionType" required onChange={changeHandler}>
                        <option value={props.data[props.editIndex].transactionType}>{props.data[props.editIndex].transactionType}</option>
                            <option value="Expense">Expense</option>
                            <option value="Income">Income</option>
                        </select>
                    </div>

                </div>
                <button className="btn" type='submit'>Update Transcation</button>
            </form>
        </>
    );
}


export default Update;