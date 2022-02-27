import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props) {
  const [selectedDate, setSelectedDate] = useState("2022");

  const getSelectValue = (selectedValue) => {
    setSelectedDate(selectedValue);
  };

  const expenses = props.expenses.filter(
    (el) => el.date.getFullYear() === +selectedDate
  );

  return (
    <Card className="expenses">
      <h2 className="a11y-hidden">지출 내역 정보 조회</h2>
      <ExpenseFilter
        onSelectValue={getSelectValue}
        defaultDate={selectedDate}
      />
      <div>지출 내역 그래프</div>
      <ExpenseList expenses={expenses} />
    </Card>
  );
}

export default Expenses;
