import "./Chart.css";
import ChartItem from "./ChartItem";

function Chart(props) {
  const valueList = props.chartData.map((data) => data.value);
  const maxValue = Math.max(...valueList);
  return (
    <div>
      <ul className="chart-cont">
        {props.chartData.map((month) => (
          <ChartItem
            key={month.label}
            month={month.label}
            value={month.value}
            maxValue={maxValue}
          />
        ))}
      </ul>
    </div>
  );
}

export default Chart;
