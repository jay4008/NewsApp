import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {UserData} from '../Models/UserData';
import { stat } from 'react-native-fs';
interface HomeState {
  News:[];
  NewsIcons:[],
}

let initialState: HomeState = {
    News: [],
    NewsIcons: [],
};
const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    Isliked: (state, action) => {
     console.log(action.payload.index);
     let newArr = state.NewsIcons
     
        if(state.NewsIcons[action?.payload?.index].Isliked){
            newArr[action?.payload?.index].Isliked = false
            newArr[action?.payload?.index].like = newArr[action?.payload?.index].like - 1
            state.NewsIcons = newArr
        }else{
            newArr[action?.payload?.index].Isliked = true
            newArr[action?.payload?.index].like = newArr[action?.payload?.index].like + 1
            state.NewsIcons = newArr
        }
    
     
    },
  

    IniitialValueSetUp: (state, action) => { 
        console.log(state.News , state.NewsIcons);
        
        if (state?.News?.length === 0  || state?.News === undefined)
        state.News = action.payload.News;
        if (state?.NewsIcons?.length === 0  || state?.NewsIcons === undefined)
            state.NewsIcons = action.payload.NewsIcons;
    },
  },
  extraReducers: {},
});

export const {
    IniitialValueSetUp,Isliked
} = slice.actions;
export default slice.reducer;
