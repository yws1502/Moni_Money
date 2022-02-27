import "./Chart.css";
import ChartItem from "./ChartItem";

function Chart(props) {
  const mon = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Nov",
    "Dec",
  ];
  return (
    <div>
      <ul className="chart-cont">
        {mon.map((el) => (
          <ChartItem month={el} />
        ))}
      </ul>
    </div>
  );
}

export default Chart;
