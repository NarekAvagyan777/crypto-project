import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3'
})


export const cryptoAPI = {
    searchTrending() {
        return instance.get('/search/trending')
            .then(res => res.data)
    },
    searchMarkets() {
        return instance.get('/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => res.data)
    },
    getDataByCoinId(id) {
        return instance.get(`/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`)
            .then(res => res.data)
    },
    getMarketChart(id) {
        return instance.get(`/coins/${id}/market_chart?vs_currency=usd&days=7`)
            .then(res => res.data)
    }
}