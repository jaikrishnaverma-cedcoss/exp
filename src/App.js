import History from './component/History';
import Add from './component/Add';
import './App.css';

function App() {
  return (
    <div className="App" style={{ flexDirection: "row-reverse",display: "flex", width: "100vw", justifyContent: "space-around" }}>
      <header className="App-header" style={{ width:"40%"}} >
        <h2 >Expense Tracker</h2>
        <div class="container">
          <h4>Your Balance</h4>
          <h1 id="balance">$0.00</h1>
          <div class="inc-exp-container">
            <div>
              <h4>Income</h4>
              <p id="money-plus" class="money plus">+$0.00</p>
            </div>
            <div>
              <h4>Expense</h4>
              <p id="money-minus" class="money minus">-$0.00</p>
            </div>
          </div>
          <Add />
        </div>
      </header>
      <header className="App-header" style={{ width:"60%",alignItem: "start" ,borderRadius: "0px 64px 0px 0px",backgroundImage: "linear-gradient(to left,  #434343 0%, black 100%)"}}>
          <div class="container">
          <History />
          </div>
      </header>
    </div>
  );
}

export default App;
