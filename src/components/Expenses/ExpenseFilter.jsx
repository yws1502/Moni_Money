import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  const selectHandler = (e) => {
    props.onSelectValue(e.target.value);
  };

  return (
    <div className="filter-cont">
      <strong>Filter by year</strong>
      <select onChange={selectHandler} defaultValue={props.defaultDate}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
