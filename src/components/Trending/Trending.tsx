import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { setTrending } from '../../store/slices/cryptoSlice';
import CoinTrending from './CoinTrending';


const Trending = () => {

  const dispatch = useAppDispatch()
  const trendingCryptos = useAppSelector(store => store.crypto.trendingCryptos)

  useEffect(() => {

    dispatch(setTrending())
  }, [setTrending])

  return (
    <div className='mt-8'>
      <h1 className='text-2xl mb-2'>Trending</h1>
      {trendingCryptos ? trendingCryptos.map((coin) => <CoinTrending key={coin.coin_id} coin={coin} />) : <div className='mt-4 text-lg'>Loading...</div>}
    </div>
  )
}


export default Trending;