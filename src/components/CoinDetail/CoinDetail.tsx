import { useEffect, FC } from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { connect, ConnectedProps } from "react-redux";
import { useParams } from "react-router-dom";
import { TAppState } from "../../store/store";
import { getDataByCoinId } from "../../store/slices/cryptoSlice";


const mapStateToProps = (state: TAppState) => ({
  cryptoData: state.crypto.cryptoData
})


const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  getDataByCoinId: (id: string | undefined) => dispatch(getDataByCoinId(id))
})


const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>


const CoinDetail: FC<PropsFromRedux> = ({ cryptoData, getDataByCoinId }) => {

  const { id } = useParams()

  useEffect(() => {
    
    getDataByCoinId(id)
  }, [getDataByCoinId, id])

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
        <p className="mt-6 text-gray-500" dangerouslySetInnerHTML={{__html: cryptoData?.description.en}}></p>
    </div>
  )
}


export default connector(CoinDetail)