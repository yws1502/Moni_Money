import "./ExpenseItem.css";

function ExpenseItem(props) {
  const item = props.expense;
  const year = item.date.getFullYear();
  const month = item.date.getMonth();
  const day = item.date.getDate();

  const price = +item.price;

  return (
    <li className="expense-item">
      <div className="date-cont">
        <span>{year}</span>
        <span>{month + 1}</span>
        <span>{day}</span>
      </div>
      <div className="expense-info">
        <strong>{item.title}</strong>
        <span>{price.toLocaleString()} ₩</span>
      </div>
    </li>
  );
}

export default ExpenseItem;
