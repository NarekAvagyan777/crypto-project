import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getMarketChartData } from "../../redux-toolkit/toolkitSlice";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from "moment/moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);



function HistoryChart({ marketChart, getMarketChartData }) {
  const { id } = useParams()

  useEffect(() => {
    getMarketChartData(id)
  }, [])

  const coinChartData = marketChart?.map(value => ({ x: value[0], y: value[1].toFixed(2) }))
  
  const options = {
    responsive: true
  }

  const data = {
    labels: coinChartData?.map(value => moment(value.x).format('MMM DD')),
    datasets: [
      {
        fill: true,
        label: id,
        data: coinChartData?.map(value => value.y),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  }


  return (
    <div>
      <Line options={options} data={data} />
    </div>
  )
}




const mapStateToProps = (state) => {
  return {
    marketChart: state.main.marketChart
  }
}

export default connect(
  mapStateToProps, { getMarketChartData }
)
(HistoryChart)