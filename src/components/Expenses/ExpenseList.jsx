import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  if (props.expenses.length === 0) {
    return (
      <p style={{ textAlign: "center", margin: "20px 0", fontWeight: "550" }}>
        지출 내역이 없습니다.
      </p>
    );
  }

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
