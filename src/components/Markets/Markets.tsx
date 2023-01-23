import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { setMarkets } from "../../store/slices/cryptoSlice";
import Coin from "./Coin";



const Markets = () => {

  const dispatch = useAppDispatch()
  const markets = useAppSelector(store => store.crypto.markets)

  useEffect(() => {

    dispatch(setMarkets())
  }, [setMarkets])

  return (
    <div className="mt-8">
        <h1 className="text-2xl mb-2">Markets</h1>
        {markets ? markets.map((coin) => <Coin key={coin.id} coin={coin} />) : <div className='mt-4 text-lg'>Loading...</div>}
    </div>
  )
}


export default Markets;