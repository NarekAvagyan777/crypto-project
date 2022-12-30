import { useEffect, FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { TAppState } from '../../store/store';
import { setTrending } from '../../store/slices/cryptoSlice';
import CoinTrending from './CoinTrending';


const mapStateToProps = (state: TAppState) => ({
  trendingCryptos: state.crypto.trendingCryptos
})

const mapDispatchToProps = (dispatch) => ({
  setTrending: () => dispatch(setTrending())
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>


const Trending: FC<PropsFromRedux> = ({ trendingCryptos, setTrending }) => {
  useEffect(() => {
    
    setTrending()
  }, [setTrending])

  return (
    <div className='mt-8'>
      <h1 className='text-2xl mb-2'>Trending</h1>
      {trendingCryptos ? trendingCryptos.map((coin) => <CoinTrending key={coin.coin_id} coin={coin} />) : <div className='mt-4 text-lg'>Loading...</div>}
    </div>
  )
}


export default connector(Trending)