import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cryptoAPI } from "../../api/api";
import { 
    TSetCryptoData,
    TMarket, 
    TTrendingCryptoData,
    TTrendingCrypto
} from "../../types/types";



type TInitialState = {
    errors: string | undefined
    trendingCryptos: null | TTrendingCrypto[]
    markets: null | TMarket[]
    cryptoData: null | TSetCryptoData
    marketChart: null | number[][]
}

let initialState: TInitialState = {
    errors: undefined,
    trendingCryptos: null,
    markets: null,
    cryptoData: null,
    marketChart: null
}


export const setTrending = createAsyncThunk<TTrendingCryptoData[], undefined, {rejectValue: string}>(
    'crypto/setTrending',
    async (_, {rejectWithValue}) => {

        try {
            const data = await cryptoAPI.searchTrending()
            return data.coins
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const setMarkets = createAsyncThunk<TMarket[], undefined, {rejectValue: string}>(
    'crypto/setMarkets',
    async (_, {rejectWithValue}) => {

        try {
            const data = await cryptoAPI.searchMarkets()
            return data as TMarket[]
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const getDataByCoinId = createAsyncThunk<TSetCryptoData, string | undefined, {rejectValue: string}>(
    'crypto/getDataByCoinId',
    async(id, {rejectWithValue}) => {

        try {
            const data = await cryptoAPI.getDataByCoinId(id)
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const getMarketChartData = createAsyncThunk<number[][], string | undefined, {rejectValue: string}>(
    'crypto/getMarketChartData',
    async(id, {rejectWithValue}) => {

        try {
            const data = await cryptoAPI.getMarketChart(id)
            return data.prices
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {},
    extraReducers: ({addCase}) => {
        addCase(setTrending.pending, (state) => {
            state.errors = undefined
        })

        addCase(setTrending.fulfilled, (state, action) => {
            if(Array.isArray(action.payload)) {
                state.trendingCryptos = action.payload.map(({item}) => {
                    return {
                        coin_id: item.coin_id,
                        id: item.id,
                        name: item.name,
                        score: item.score,
                        small: item.small,
                        symbol: item.symbol
                    }
                })
            }
        })

        addCase(setTrending.rejected, (state, action) => {
                state.errors = action.payload
        })

        addCase(setMarkets.pending, (state) => {
            state.errors = undefined
        })

        addCase(setMarkets.fulfilled, (state, action) => {
            state.markets = action.payload.map((el)  => {
                return {
                    id: el.id,
                    image: el.image,
                    name: el.name,
                    symbol: el.symbol,
                    current_price: el.current_price,
                    price_change_percentage_24h: el.price_change_percentage_24h,
                    market_cap: el.market_cap
                }
            })
        })

        addCase(setMarkets.rejected, (state, action) => {
            state.errors = action.payload
        })

        addCase(getDataByCoinId.pending, (state) => {
            state.errors = undefined
        })

        addCase(getDataByCoinId.fulfilled, (state, action) => {
            state.cryptoData = {
                description: action.payload.description,
                image: action.payload.image,
                name: action.payload.name
            }
        })

        addCase(getDataByCoinId.rejected, (state, action) => {
            state.errors = action.payload
        })

        addCase(getMarketChartData.pending, (state) => {
            state.errors = undefined
        })

        addCase(getMarketChartData.fulfilled, (state, action) => {
            state.marketChart = action.payload.map((el) => [el[0], el[1]])
        })

        addCase(getMarketChartData.rejected, (state, action) => {
            state.errors = action.payload
        })
    }
})


export default cryptoSlice.reducer;