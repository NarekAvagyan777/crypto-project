import CoinDetail from "../CoinDetail/CoinDetail";
import HistoryChart from "../HistoryChart/HistoryChart";

const CryptoDetail = () => {
  return (
    <div className="wrapper-container mt-10">
      <HistoryChart />
      <CoinDetail />
    </div>
  )
}

export default CryptoDetail;