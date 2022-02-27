import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  return (
    <div>
      <h3 className="a11y-hidden">지출 내역 리스트</h3>
      <ul>
        {props.expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
