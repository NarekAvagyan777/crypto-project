import { createSlice } from "@reduxjs/toolkit";
import { cryptoAPI } from "../api/api";



const mainSlice = createSlice({
    name: 'main',
    initialState: {
        trendingCryptos: null,
        markets: null,
        cryptoData: null,
        marketChart: null
    },
    reducers: {
        setTrending(state, action) {
            state.trendingCryptos = [...action.payload]
        },
        setMarkets(state, action) {
            state.markets = [...action.payload]
        },
        setCryptoData(state, action) {
            state.cryptoData = {...action.payload}
        },
        setMarketChart(state, action) {
            state.marketChart = action.payload.map(el => [el[0], el[1]])
        } 
    }
})


export const setTrendingCreator = () => (dispatch) => {
    cryptoAPI.searchTrending()
        .then(data => dispatch(mainSlice.actions.setTrending(data.coins)))
}


export const setMarketsCreator = () => (dispatch) => {
    cryptoAPI.searchMarkets()
        .then(data => dispatch(mainSlice.actions.setMarkets(data)))
}


export const getDataByCoinIdCreator = (id) => (dispatch) => {
    cryptoAPI.getDataByCoinId(id)
        .then(data => dispatch(mainSlice.actions.setCryptoData(data)))
}


export const getMarketChartData = (id) => (dispatch) => {
    cryptoAPI.getMarketChart(id)
        .then(data => dispatch(mainSlice.actions.setMarketChart(data.prices)))
}


export default mainSlice.reducer;