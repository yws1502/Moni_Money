import { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const inputHandler = (e) => {
    const currentNode = e.target;
    if (currentNode.type === "text") {
      setEnteredTitle(currentNode.value);
    } else if (currentNode.type === "number") {
      setEnteredPrice(currentNode.value);
    } else {
      setEnteredDate(currentNode.value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newData = {
      id: new Date().getTime(),
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    };

    props.onSaveData(newData);
    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input-cont">
        <fieldset>
          <label>Title</label>
          <input
            onChange={inputHandler}
            type="text"
            placeholder="지출 내역을 입력하세요"
            value={enteredTitle}
          />
        </fieldset>
        <fieldset>
          <label>Price</label>
          <input
            onChange={inputHandler}
            type="number"
            min="0"
            placeholder="숫자만 입력 가능합니다."
            value={enteredPrice}
          />
        </fieldset>
        <fieldset>
          <label>Date</label>
          <input onChange={inputHandler} type="date" value={enteredDate} />
        </fieldset>
      </div>
      <div className="button-cont">
        <button onClick={props.onShowForm} type="button">
          Cancel
        </button>
        <button type="submit">지출 💰</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
