import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Adjust the path as needed
const baseUrl = process.env.NEXT_PUBLIC_PAGE_API; // Load from .env
// Define the API call
export const fetchData = createAsyncThunk('data/fetchData', async (pageSlug: string) => {
  const response = await fetch(`${baseUrl}/pages?slug=${pageSlug}`);
  const data = await response.json();

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


interface footerMenus {
  name: string;
  url: string;
}

interface subMenus {
  name: string;
  url: string;
}

interface headerMenus {
  name: string;
  url: string; 
  subMenu: subMenus[] | null;
}


interface dataState {
  data:PageContentData | null,
  status: string;
  error: string | null;
  value: number;
  blogCategories: { [key: string]: string };
  footerMenu: footerMenus[];
  headerMenu: headerMenus[];
  footerText: string;
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
  },
  footerMenu: [
    {name:"QuickBooks Bookkeeping",url: 'quickbooks-bookkeeping-services'},
   {name:"Zoho Bookkeeping",url:'zoho-bookkeeping'},
    {name:"Accounting Services",url: 'accounting-services'},
    {name:"Professionals Bookkeeping",url: 'professionals-bookkeeping-services'},
    {name:"Xero Bookkeeping Services",url: 'xero-bookkeeping-services'},
    {name:"blogs",url: 'blogs'}
  ],
    headerMenu: [
    {name:"QuickBooks Bookkeeping",url: '/quickbooks-bookkeeping-services',subMenu:null},
    {name:"Zoho Bookkeeping",url:'/zoho-bookkeeping',subMenu:null},
    {name:"Xero Bookkeeping Services",url: '/xero-bookkeeping-services',subMenu:null},
    {name:"Accounting Services",url: '/accounting-services',subMenu:[
      {name:"Accountant for doctor",url: '/accountant-for-doctors'},
      {name:"Accountant for therapist",url: '/accountant-for-therapist'},
      {url:"/accountant-for-medical-practitioners",name: 'Accountant for medical practitioners'},
      {url:"/accountant-for-psychotherapists",name: 'Accountant for psychotherapists'},
      {url:"/accountant-for-counsellors",name: 'ccountant for counsellors'},
      {url:"/accountant-for-physicians",name: 'Accountant for Physicians'}
   
     ]},
    {name:"Professionals Bookkeeping",url: '/professionals-bookkeeping-services',subMenu:[
      {name:"bookkeeping services for Doctor",url: '/bookkeeping-for-doctors'},
      {name:"bookkeeping services for Therapist",url: '/bookkeeping-for-therapist'},
      {name:"bookkeeping for Medical Practitioners",url: '/bookkeeping-for-medical-practitioners'},
      {name:"bookkeeping for Psychotherapists",url: '/bookkeeping-for-psychotherapists'},
      {name:"bookkeeping for Counsellors",url: '/bookkeeping-for-counsellors'},
      {name:"bookkeeping for Physicians",url: '/bookkeeping-for-physicians'}

     ]}
   ],
  footerText:"With Our Virtual Remote Bookkeeper Experts, you can trust that each service is delivered with professionalism, accuracy, and a focus on your unique business needs."
 

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
export const selectHeaderMenu= (state: RootState) => state.data.headerMenu;
export const selectStatus = (state: RootState) => state.data.status;
export const selectError = (state: RootState) => state.data.error;

export const { increment, decrement, incrementByAmount } = dataSlice.actions;
export default dataSlice.reducer;