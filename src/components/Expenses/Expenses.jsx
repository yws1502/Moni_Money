import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      <h2 className="a11y-hidden">지출 내역 정보 조회</h2>
      <ExpenseFilter />
      <div>지출 내역 그래프</div>
      <ExpenseList expenses={props.expenses} />
    </Card>
  );
}

export default Expenses;
