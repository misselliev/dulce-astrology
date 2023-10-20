import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import signData from '../data/signsData.json';

export const fetchSignInfo = createAsyncThunk('sign/fetchSignInfo', async (sign, thunkAPI) => {
  try {
    const response = await signData.signs[sign];
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const signSlice = createSlice({
  name: 'sign',
  initialState: {
    sign: null,
    status: 'idle',
    error: null,
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSignInfo.fulfilled, (state, action) => {
        state.sign = action.payload.name;
        state.data = action.payload;
        state.status = 'success';
      })
      .addCase(fetchSignInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSignInfo.rejected, (state, action) => {
        state.error = action.payload.error;
        state.status = 'rejected';
      });
  },
});

export default signSlice;
