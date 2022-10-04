import History from './component/History';
import Add from './component/Add';
import './App.css';
import Update from './component/Update';
import React, { useState } from 'react';

function App() {
  let [renderHistory, setRenderHistory] = useState([])
  let [database, setData] = useState([])
  var [latestcategory, setlc] = useState("All")
  let [TotalBal, setTotal] = useState([0, 0, 0])
  let [id, setId] = useState(0)
  let [editIndex,seteditIndex]=useState(-1)
  let [htotal,setHtotal]=useState(0)
  
  const editMasterPicker=(index)=>{
    let ind = -1
    database.map((x, i) => {
      if (x.id === index)
        ind = i
      else
        return -1
        return -1
    })
    if (ind !== -1)
       seteditIndex(ind)
  }
  const delmaster = (index) => {
    let ind = -1
    database.map((x, i) => {
      if (x.id === index)
        ind = i
      else
        return -1
        return -1
    })
    if (ind !== -1)
      database.splice(ind, 1)

    setData(database)
    changeRenderhistory(latestcategory)
    Totaler()
  }
  const InsertData = (transactionType, expenseType, text, amount) => {
    database.push({ id: id, transactionType: transactionType, expenseType: expenseType, text: text, amount: parseInt(amount) })
    changeRenderhistory(latestcategory)
    setData(database)
    setId(id + 1)
    Totaler()
  }
  
  const UpdateData=(obj,index)=>{
     database[index].transactionType=obj.transactionType
     database[index].amount=obj.amount
     database[index].text=obj.text
     database[index].expenseType=obj.expenseType
    
    //  console.log("EW: "+index)
    //  console.log(obj)
     setData([...database])
     changeRenderhistory(latestcategory)

     seteditIndex(-1)

     Totaler()
     console.log(obj)
  }
  const Totaler = () => {
    let sum = 0, income = 0, expense = 0
    database.map((x) => {
      (x.transactionType === 'Expense') ? expense -= x.amount : income += x.amount
      return ""
    })
    expense = Math.abs(expense)
    sum = income - expense
    setTotal([expense, sum, income])
    console.log(database)
  }

  const changeRenderhistory = (category) => {
    setlc(category)
    console.log("this:" + latestcategory)
    let tmpobj = database.filter((x) => category === x.expenseType)
    if (category === 'All') { tmpobj = database }
    setRenderHistory([...tmpobj])
    
    let sum = 0, income = 0, expense = 0
    tmpobj.map((x) => {
      (x.transactionType === 'Expense') ? expense -= x.amount : income += x.amount
      return ""
    })
    expense = Math.abs(expense)
    sum = income - expense
    // setTotal([expense, sum, income])
    setHtotal(sum)
  }
if(editIndex===-1){
  return (
    <div className="App" style={{ flexDirection: "row-reverse", display: "flex", width: "100vw", justifyContent: "space-around" }}>
      <header className="App-header" style={{ width: "40%" }} >
        <h2 >Expense Tracker</h2>
        <div className="container" >
          <h4 style={{color:"white"}}>Your Balance</h4>
          <h1 id="balance">{(TotalBal[1] < 0) ? "-$" + Math.abs(TotalBal[1]) : "$" + TotalBal[1]}</h1>
          <div className="inc-exp-container">
            <div>
              <h4>Income</h4>
              <p id="money-plus" className="money plus">+${TotalBal[2]}</p>
            </div>
            <div>
              <h4>Expense</h4>
              <p id="money-minus" className="money minus">-${Math.abs(TotalBal[0])}</p>
            </div>
          </div>
          <Add InsertData={InsertData}  data={database}/>
        </div>
      </header>
      <header className="App-header" style={{ width: "60%", alignItem: "start", borderRadius: "0px 64px 0px 0px", backgroundImage: "linear-gradient(to left,  #434343 0%, black 100%)" }}>
        <div className="container" style={{ width: "500px" }}>
          <History htotal={htotal} delmaster={delmaster} data={database} renderHistory={renderHistory} changeRenderhistory={changeRenderhistory} editMaster={editMasterPicker}/>
        </div>
      </header>
    </div>
  );
}
else{
  return (
    <div className="App" style={{ flexDirection: "row-reverse", display: "flex", width: "100vw", justifyContent: "space-around" }}>
      <header className="App-header" style={{ width: "40%" }} >
        <h2 >Expense Tracker</h2>
        <div className="container" >
          <h4 style={{color:"white"}}>Your Balance</h4>
          <h1 id="balance">{(TotalBal[1] < 0) ? "-$" + Math.abs(TotalBal[1]) : "$" + TotalBal[1]}</h1>
          <div className="inc-exp-container">
            <div>
              <h4>Income</h4>
              <p id="money-plus" className="money plus">+${TotalBal[2]}</p>
            </div>
            <div>
              <h4>Expense</h4>
              <p id="money-minus" className="money minus">-${Math.abs(TotalBal[0])}</p>
            </div>
          </div>
          <Update UpdateData={UpdateData} data={database} editIndex={editIndex}/>
        </div>
      </header>
      <header className="App-header" style={{ width: "60%", alignItem: "start", borderRadius: "0px 64px 0px 0px", backgroundImage: "linear-gradient(to left,  #434343 0%, black 100%)" }}>
        <div className="container" style={{ width: "500px" }}>
          <History delmaster={delmaster} data={database} renderHistory={renderHistory} changeRenderhistory={changeRenderhistory} editMaster={editMasterPicker}/>
        </div>
      </header>
    </div>);
}
}

export default App;
