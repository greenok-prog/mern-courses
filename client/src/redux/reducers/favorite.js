import { createSlice } from "@reduxjs/toolkit";



const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorite: [],
        favoriteCount: 0,

    },
    reducers: {
        addToFav(state, action) {
            state.favorite.push(action.payload)
            state.favoriteCount = state.favoriteCount + 1
            localStorage.setItem('favorite', JSON.stringify(state.favorite))
        },
        removeFromFav(state, action) {
            state.favorite = state.favorite.filter(el => el !== action.payload)
            state.favoriteCount = state.favoriteCount - 1
            localStorage.setItem('favorite', JSON.stringify(state.favorite))
        },
        setFav(state) {
            const localFavorite = localStorage.getItem("favorite")
            if (localFavorite) {
                state.favorite = JSON.parse(localFavorite)
                state.favoriteCount = JSON.parse(localFavorite).length
            }


        }



    }
})

export default favoriteSlice.reducer
export const { addToFav, removeFromFav, setFav } = favoriteSlice.actions