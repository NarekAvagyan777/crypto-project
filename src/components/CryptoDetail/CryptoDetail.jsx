import CoinDetail from "../CoinDetail/CoinDetail";
import HistoryChart from "../HistoryChart/HistoryChart";

export default function CryptoDetail() {
  return (
    <div className="wrapper-container mt-10">
      <HistoryChart />
      <CoinDetail />
    </div>
  )
}