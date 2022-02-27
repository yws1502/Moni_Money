function ChartItem(props) {
  return (
    <li>
      <div className="bar">
        <div className="fill"></div>
      </div>
      <strong>{props.month}</strong>
    </li>
  );
}

export default ChartItem;
