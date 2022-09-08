import React from 'react';
import './Add.css'
function Add(props) {
    let btn=["Grocery", "Veggies", "Travelling" ,"Miscellaneous"]
    let initial={transactionType:"Expense",expenseType:"Grocery",text:"",amount:0}
    const changeHandler=(e)=>{
        initial = { ...initial, [e.target.name]: e.target.value };
    }

  const formSubmitted=(event)=>{
    event.preventDefault();
    props.InsertData(initial.transactionType,initial.expenseType,initial.text,initial.amount)
    event.target.reset();
    initial={transactionType:"Expense",expenseType:"Grocery",text:"",amount:0}
  }




    return (
        <>
            <form id="form" onSubmit={formSubmitted}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <div className="inputs">
                        <input required type="text" onChange={changeHandler} name="text" id="amount" placeholder="Enter Text..." />
                        <select required name="expenseType" onChange={changeHandler}>
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
                        <input type="number" required name="amount" onChange={changeHandler} id="amount" placeholder="Enter amount..." />
                        <select name="transactionType" required onChange={changeHandler}>
                            <option value="Expense">Expense</option>
                            <option value="Income">Income</option>
                        </select>
                    </div>

                </div>
                <button className="btn" type='submit'>Add transaction</button>
            </form>
        </>
    );

}

export default Add;