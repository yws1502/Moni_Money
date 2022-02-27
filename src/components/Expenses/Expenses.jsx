import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";

function Expenses(props) {
  const testData = [
    {
      id: "e1",
      title: "pasta",
      price: "13000",
      date: new Date(),
    },
    {
      id: "e2",
      title: "samgyupsal",
      price: "23000",
      date: new Date(),
    },
    {
      id: "e3",
      title: "PC station",
      price: "3000",
      date: new Date(),
    },
  ];

  return (
    <Card className="expenses">
      <h2 className="a11y-hidden">지출 내역 정보 조회</h2>
      지출 내역 정보 조회
      <div>지출내역 filter</div>
      <div>지출 내역 그래프</div>
      <ExpenseList expenses={testData} />
    </Card>
  );
}

export default Expenses;
