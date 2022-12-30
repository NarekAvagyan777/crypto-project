import { useEffect, FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useParams } from "react-router-dom";
import { TAppState } from "../../store/store";
import { getMarketChartData } from "../../store/slices/cryptoSlice";
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



const mapStateToProps = (state: TAppState) => ({
  marketChart: state.crypto.marketChart,
})

const mapDispatchToProps = (dispatch) => ({
  getMarketChartData: (id: string | undefined) => dispatch(getMarketChartData(id))
})


const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>


const HistoryChart: FC<PropsFromRedux> = ({ marketChart, getMarketChartData }) => {

  const { id } = useParams()

  useEffect(() => {
    
    getMarketChartData(id)
  }, [getMarketChartData, id])

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


export default connector(HistoryChart)