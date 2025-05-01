import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Adjust the path as needed

// Define the API call
export const fetchData = createAsyncThunk('data/fetchData', async (pageSlug: string) => {
  const response = await fetch(`http://localhost:8080/pages?slug=${pageSlug}`);
  let data = await response.json();

  if (Array.isArray(data) && data.length > 0 && data[0]?.content) {
   
      data[0].content=JSON.stringify(data[0].content);
      return  data[0];
    }else{
      const newArray =  {  slug: pageSlug,
        meta: {
          title: "",
          description: ""
        },
        content: "Page not Found" }
    
    
      return  newArray;
    }

});


interface Meta {
  title: string;
  description: string;
  keywords: string;
}

interface PageContentData {
  slug: string;
  content: string;
  meta: Meta;
}

interface dataState {
  data:PageContentData | null,
  status: string;
  error: string | null;
  value: number;
  blogCategories: { [key: string]: string };
}

const initialState: dataState = {
  data: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  value: 0,
  blogCategories: {
    1: 'Xero Bookkeeping Packages',
    2: 'Value and Benefits Xero Services',
    3: 'Individuals & Freelancers',
  }
 

};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});



export const selectData = (state: RootState) => state.data.data;
export const selectStatus = (state: RootState) => state.data.status;
export const selectError = (state: RootState) => state.data.error;

export const { increment, decrement, incrementByAmount } = dataSlice.actions;
export default dataSlice.reducer;