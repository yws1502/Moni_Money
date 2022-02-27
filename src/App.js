import ExpenseForm from "./components/NewExpense/ExpenseForm";
import Expenses from "./components/Expenses/Expenses";

function App () {
  return (
    <>
      <header className="main-header">
        <h1>Moni Money</h1>
      </header>
      <div role="main">
        <ExpenseForm />
        <Expenses />
      </div>
    </>
  );
}

export default App;
