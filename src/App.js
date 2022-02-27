import { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App () {
  const [ expenses, setExpenses ] = useState([]);
  
  useEffect(() => {
    const dataHistory = localStorage.getItem("expenses");
    if (dataHistory !== null) {
      setExpenses(JSON.parse(dataHistory));
    }
  }, [])

  const addExpenseHandler = (newExpenseData) => {
    setExpenses((prevData) => {
      const totalData = [ newExpenseData, ...prevData ];
      localStorage.setItem("expenses", JSON.stringify(totalData));

      return totalData;
    });
  }

  expenses.forEach((expense) => (expense.date = new Date(expense.date)));
  return (
    <>
      <header className="main-header">
        <h1>Moni Money</h1>
      </header>
      <div role="main">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenses={expenses} />
      </div>
    </>
  );
}

export default App;
