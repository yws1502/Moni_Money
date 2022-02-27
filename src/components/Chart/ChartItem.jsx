function ChartItem(props) {
  let fillValue = 0;
  if (props.maxValue > 0) {
    fillValue = Math.round((props.value / props.maxValue) * 100);
  }
  return (
    <li>
      <div className="bar">
        <div className="fill" style={{ height: `${fillValue}%` }}></div>
      </div>
      <strong>{props.month}</strong>
    </li>
  );
}

export default ChartItem;
