import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getDataByCoinIdCreator } from "../../redux-toolkit/toolkitSlice";

function CoinDetail({ cryptoData, getDataByCoinIdCreator }) {
  const { id } = useParams()

  useEffect(() => {
    getDataByCoinIdCreator(id)
  }, [])

  if(!cryptoData) {
    return <div>Loading...</div>
  }

  return (
    <div className="my-6">
        <div className="flex gap-2 items-center">
            <img src={cryptoData?.image.small} alt={cryptoData?.name} />
            <h1 className="text-2xl capitalize font-bold">
                {cryptoData?.name}
            </h1>
        </div>
        <p className="mt-6 text-gray-500">{cryptoData.description.en}</p>
    </div>
  )
}




const mapStateToProps = (state) => {
    return {
        cryptoData: state.main.cryptoData
    }
}

export default connect(
    mapStateToProps, { getDataByCoinIdCreator }
)
(CoinDetail)