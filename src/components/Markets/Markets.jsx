import { useEffect } from "react";
import { connect } from "react-redux";
import { setMarketsCreator } from "../../redux-toolkit/toolkitSlice";
import Coin from "./Coin";

function Markets({ markets, setMarketsCreator }) {
  useEffect(() => {
    setMarketsCreator()
  }, [])

  return (
    <div className="mt-8">
        <h1 className="text-2xl mb-2">Markets</h1>
        {markets ? markets.map((coin) => <Coin key={coin.id} coin={coin} />) : <div className='mt-4 text-lg'>Loading...</div>}
    </div>
  )
}


const mapStateToProps = (state) => {
    return {
        markets: state.main.markets
    }
}

export default connect(
    mapStateToProps, { setMarketsCreator }
)
(Markets)