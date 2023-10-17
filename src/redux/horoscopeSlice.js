import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiURL = '';
export const fetchHoroscope = createAsyncThunk('horoscope/fetchHoroscope', async(sign, thunkAPI) => {
    try{
        const response = `${apiURL}_${sign}`
        return response 
    }catch(error){
        return thunkAPI.rejectWithValue({error: error.message})
    }
})


const horoscopeSlice = createSlice({
    name: 'horoscope',
    initialState: {
        horoscope: null,
        status: 'idle',
        error: null
    },
    reducers : {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchHoroscope.fulfilled, (state, action) => {
            state.horoscope = action.payload
            state.status = 'success'
        }).addCase(fetchHoroscope.pending, (state) => {
            state.status = 'loading'
        }).addCase(fetchHoroscope.rejected, (state, action) => {
            state.error = action.payload.error
            state.status = 'rejected'
        })
    }
})

export default horoscopeSlice;