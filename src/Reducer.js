import { candle, card, cover, cycle, makeup, power, printer, shaver, stationery, statue, toy, wallpaper } from "./Slide2/data";


export const initialState = {
    card:card,
    printer:printer,
    candle:candle,
    cover:cover,
    cycle:cycle,
    makeup:makeup,
    power:power,
    shaver:shaver,
    stationery:stationery,
    statue:statue,
    toy:toy,
    wallpaper:wallpaper,
    getDetails:[],
    buy:[],
    add:[],
    favourite:[],
    buypage:[],
    filterHp : false,
    filterCanon : false,
    filterOneplus : false,
    filterBoult : false,
    filterAroma: false,
    filterCandle: false,
    filterHolder: false,
    filterHero:false,
    filterUrban:false,
}


export const stateReducer = (state,action)=>{
    console.log(action);
    
    switch(action.type){
        case 'DETAILS':
            return{
                ...state,
                getDetails:action.payload,
            }
        case 'BUY':
            return{
                ...state,
                buy:action.payload,
            }
        case 'ADD':
            return{
                ...state,
                add:action.payload,
            }
        case 'FAVORITE':
        return{
            ...state,
            favourite:[...state.favourite, state.card.filter(e => e.id === action.payload.id ? (e.isFav = !action.payload.isFav) : false)].flat(),
        }
        case 'PrinterFav':
            return{
                ...state,
                favourite:[...state.favourite, state.printer.filter(e => e.id === action.payload.id ? (e.isFav = !action.payload.isFave):false)].flat(),
            }
        case "candleFav":
            return{
                ...state,
                favourite:[...state.favourite,state.candle.filter(e => e.id === action.payload.id ? (e.isFav = !action.payload.isFav):false)].flat(),
            }
        case 'cycleFav':
            return{
                ...state,
                favourite:[...state.favourite,state.cycle.filter(e =>e.id === action.payload.id ? (e.isFav = !action.payload.isFav):false)].flat(),
            }
        case 'makeupFav':
            return{
                ...state,
                favourite:[...state.favourite,state.makeup.filter(e => e.id === action.payload.id ? (e.isFav = !action.payload.isFav):false)].flat(),
            }
        case 'powerFav':
            return{
                ...state,
                favourite:[...state.favourite,state.power.filter(e => e.id === action.payload.id ? (e.isFav = !action.payload.isFav):false)].flat(),
            }
        case 'wallFav':
            return{
                ...state,
                favourite:[...state.favourite,state.wallpaper.filter(e =>e.id === action.payload.id ? (e.isFav =!action.payload.isFav):false)].flat(),
            }
        case 'toyFav':
            return{
                ...state,
                favourite:[...state.favourite,state.toy.filter(e => e.id === action.payload.id ? (e.isFav = !action.payload.isFav):false)].flat(),
            }
        case 'statueFav':
            return{
                ...state,
                favourite:[...state.favourite,state.statue.filter(e => e.id ===action.payload.id ? (e.isFav = !action.payload.isFav):false)].flat(),
            }
        case 'stationaryFav':
            return{
                ...state,
                favourite:[...state.favourite,state.stationery.filter(e=>e.id ===action.payload.id ? (e.isFav = !action.payload.isFav):false)].flat(),
            }
        case 'shaverFav':
                return{
                    ...state,
                    favourite:[...state.favourite,state.shaver.filter(e=>e.id ===action.payload.id ? (e.isFav = !action.payload.isFav):false)].flat(),
                }
        case 'coverFav':
            return{
                ...state,
                favourite:[...state.favourite,state.cover.filter(e=>e.id ===action.payload.id ? (e.isFav = !action.payload.isFav):false)].flat(),
            }
        case 'UNFAVORITE':
            return {
                ...state,
                unFavorite : state.favourite
                .filter(e => e.id === action.payload.id ? e.isFav = !action.payload.isFav : false),
                favourite : state.favourite .filter(e => e.id !== action.payload.id)                
            }
        case 'BUYPAGE':
            return{
                ...state,
                buypage:action.payload,
            }
        case 'addcart':
            return{
                ...state,
                addcart:action.payload,
            }
        case "hp":
            return{
                ...state,
                filterHp : !state.filterHp
            }
        case 'canon':
            return{
                ...state,
                filterCanon : !state.filterCanon
            }
        case 'oneplus':
            return{
                ...state,
                filterOneplus:!state.filterOneplus
            }
        case 'boult':
            return{
                ...state,
                filterBoult:!state.filterBoult
            }
        case 'aroma':
            return{
                ...state,
                filterAroma:!state.filterAroma
            }
        case 'candle':
            return{
                ...state,
                filterCandle:!state.filterCandle
            }
        case 'holder':
            return{
                ...state,
                fliterHolder:!state.fliterHolder
            }
        case 'hero':
            return{
                ...state,
                filterHero:!state.filterHero
            }
        case 'urban':
            return{
                ...state,
                filterUrban:!state.filterUrban
            }
            default:{
                return state
            }
    }
}