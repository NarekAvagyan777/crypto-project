import { useEffect, FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { TAppState } from "../../store/store";
import { setMarkets } from "../../store/slices/cryptoSlice";
import Coin from "./Coin";


const mapStateToProps = (state: TAppState) => {
  return {
    markets: state.crypto.markets,
  }
}

const mapDispatchToProps = (dispatch) => ({
  setMarkets: () => dispatch(setMarkets())
})


const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>


const Markets: FC<PropsFromRedux> = ({markets, setMarkets}) => {
  useEffect(() => {

    setMarkets()
  }, [setMarkets])

  return (
    <div className="mt-8">
        <h1 className="text-2xl mb-2">Markets</h1>
        {markets ? markets.map((coin) => <Coin key={coin.id} coin={coin} />) : <div className='mt-4 text-lg'>Loading...</div>}
    </div>
  )
}


export default connector(Markets)