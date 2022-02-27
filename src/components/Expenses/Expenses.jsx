import "./Expenses.css";
import ExpenseList from "./ExpenseList";

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
    <div role="main">
      <section style={{ height: "100px", backgroundColor: "pink" }}>
        <h2 className="a11y-hidden">지출 내역 생성 폼</h2>
        지출 내역 생성 폼
      </section>
      <section className="expenses">
        <h2 className="a11y-hidden">지출 내역 정보 조회</h2>
        지출 내역 정보 조회
        <div>지출내역 filter</div>
        <div>지출 내역 그래프</div>
        <ExpenseList expenses={testData} />
      </section>
    </div>
  );
}

export default Expenses;
