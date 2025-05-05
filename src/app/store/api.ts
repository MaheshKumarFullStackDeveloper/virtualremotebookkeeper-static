import {  fetchBaseQuery } from "@reduxjs/toolkit/query"

import { createApi } from '@reduxjs/toolkit/query/react';



const BASE_URL= process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export const api =createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL,
        credentials:'include'
    }),
    tagTypes:['user'],

    endpoints:()=>({
      
    })

})