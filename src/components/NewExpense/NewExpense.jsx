import { useState } from "react";
import Card from "../UI/Card";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const savedExpenseData = (saveData) => {
    props.onAddExpense(saveData);
  };

  const showFormHandler = () => {
    setShowForm((prev) => (prev === false ? true : false));
  };

  return (
    <Card className="expense-form-cont">
      <h2 className="a11y-hidden">지출 생성 영역</h2>
      {showForm === false ? (
        <button onClick={showFormHandler} className="form-viewer-btn">
          가계부 열기👛
        </button>
      ) : (
        <ExpenseForm
          onShowForm={showFormHandler}
          onSaveData={savedExpenseData}
        />
      )}
    </Card>
  );
}

export default NewExpense;
