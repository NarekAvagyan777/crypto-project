import axios from "axios";
import { TMarket, TTrendingCryptoData, TSetCryptoData } from "../types/types";

const instance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3'
})


type TSearchTrendingData = {
    coins: TTrendingCryptoData[]
    exchanges: Array<any>
}

type TGetMarketChartData = {
    market_caps: number[][]
    prices: number[][]
    total_volumes: [][]
}


export const cryptoAPI = {
    searchTrending() {
        return instance.get<TSearchTrendingData>('/search/trending')
            .then(res => res.data)
    },
    searchMarkets() {
        return instance.get<TMarket[]>('/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => res.data)
    },
    getDataByCoinId(id: string) {
        return instance.get<TSetCryptoData>(`/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`)
            .then(res => res.data)
    },
    getMarketChart(id: string) {
        return instance.get<TGetMarketChartData>(`/coins/${id}/market_chart?vs_currency=usd&days=7`)
            .then(res => res.data)
    }
}