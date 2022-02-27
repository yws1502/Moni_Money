function ExpenseItem(props) {
  const item = props.expense;
  const year = item.date.getFullYear();
  const month = item.date.getMonth();
  const day = item.date.getDate();

  const price = +item.price;

  return (
    <li>
      <div>
        <span>{year}-</span>
        <span>{month}-</span>
        <span>{day}</span>
      </div>
      <strong>{item.title}</strong>
      <div>{price.toLocaleString()} ₩</div>
    </li>
  );
}

export default ExpenseItem;
