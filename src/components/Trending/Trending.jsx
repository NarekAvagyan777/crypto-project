import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setTrendingCreator } from '../../redux-toolkit/toolkitSlice';
import CoinTrending from './CoinTrending';


function Trending({ trendingCryptos, setTrendingCreator }) {
  useEffect(() => {
    setTrendingCreator()
  }, [])

  return (
    <div className='mt-8'>
      <h1 className='text-2xl mb-2'>Trending</h1>
      {trendingCryptos ? trendingCryptos.map((coin) => <CoinTrending key={coin.item.coin_id} coin={coin.item} />) : <div className='mt-4 text-lg'>Loading...</div>}
    </div>
  )
}




const mapStateToProps = (state) => {
  return {
    trendingCryptos: state.main.trendingCryptos
  }
}


export default connect(
  mapStateToProps, { setTrendingCreator }
)
(Trending)