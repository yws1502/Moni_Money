import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const savedExpenseData = (saveData) => {
    props.onAddExpense(saveData);
  };

  return (
    <>
      <ExpenseForm onSaveData={savedExpenseData} />
    </>
  );
}

export default NewExpense;
