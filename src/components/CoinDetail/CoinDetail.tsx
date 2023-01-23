import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { getDataByCoinId } from "../../store/slices/cryptoSlice";


const CoinDetail = () => {
  const dispatch = useAppDispatch()
  const cryptoData = useAppSelector(store => store.crypto.cryptoData)

  const { id } = useParams()

  useEffect(() => {

    dispatch(getDataByCoinId(id))
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

export default CoinDetail;