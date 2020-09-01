import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';
import {Addtransaction} from './components/AddTransaction';

function App() {
  return (
    <div>
     <Header/>
     <div className = "container">
       <Balance />
       <IncomeExpenses/>
       <TransactionList/>
       <Addtransaction/>
       </div>  
    </div>
  );
}

export default App;
