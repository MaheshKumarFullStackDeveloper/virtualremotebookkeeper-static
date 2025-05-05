import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

import { api } from "./api";
import userReducer from './slice/userSlice';
import dataSlice from './slice/dataSlice';


export const store= configureStore({
    reducer:{
        [api.reducerPath]:api.reducer,
        user:userReducer,
        data:dataSlice
    }
})

setupListeners(store.dispatch);


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch