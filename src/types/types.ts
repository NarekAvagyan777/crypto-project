export type TTrendingCryptoData = {
    item: {
        coin_id: number
        id: string
        large: string
        market_cap_rank: number
        name: string
        price_btc: number
        score: number
        slug: string
        small: string
        symbol: string
        thumb: string
    }
}

export type TMarket = {
    id: string
    image: string
    name: string
    symbol: string
    current_price: number
    price_change_percentage_24h: number
    market_cap: number
}

export type TTrendingCrypto = {
    coin_id: number
    id: string
    name: string
    score: number
    small: string
    symbol: string
}


type TSetCryptoDataDescription = {
    en: string
}

type TSetCryptoDataImage = {
    large: string
    small: string
    thumb: string
}

export type TSetCryptoData = {
    description: TSetCryptoDataDescription
    image: TSetCryptoDataImage
    name: string
}