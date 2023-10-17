import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiURL = '';
export const fetchSignInfo = createAsyncThunk('sign/fetchSignInfo', async(sign, thunkAPI) => {
    try{
        const response = `${apiURL}_${sign}`
        return response 
    }catch(error){
        return thunkAPI.rejectWithValue({error: error.message})
    }
})


const signSlice = createSlice({
    name: 'sign',
    initialState: {
        sign: null,
        status: 'idle',
        error: null
    },
    reducers : {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchSignInfo.fulfilled, (state, action) => {
            state.sign = action.payload
            state.status = 'success'
        }).addCase(fetchSignInfo.pending, (state) => {
            state.status = 'loading'
        }).addCase(fetchSignInfo.rejected, (state, action) => {
            state.error = action.payload.error
            state.status = 'rejected'
        })
    }
})

export default signSlice;