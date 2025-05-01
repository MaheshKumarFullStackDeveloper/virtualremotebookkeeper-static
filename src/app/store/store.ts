import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import storage from 'redux-persist/lib/storage';
import {persistReducer,persistStore,FLUSH,REGISTER,PAUSE,PERSIST,REHYDRATE} from 'redux-persist';
import { api } from "./api";
import userReducer from './slice/userSlice';
import dataSlice from './slice/dataSlice';

import { Slice } from "lucide-react";
const usePersistConfig = {key:'user',storage,whiteList:['user','isLoginDialogOpen','isLoggedIn']} 

const persistUserReducer= persistReducer(usePersistConfig,userReducer);

export const store= configureStore({
    reducer:{
        [api.reducerPath]:api.reducer,
        user:persistUserReducer,
        data:dataSlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[FLUSH,REGISTER,PAUSE,PERSIST,REHYDRATE]
        }
    }).concat(api.middleware)
})

setupListeners(store.dispatch);

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch