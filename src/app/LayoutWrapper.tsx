'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store,persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'

import {Toaster} from 'react-hot-toast'
import MainLoader from '@/lib/MainLoader'
function LayoutWrapper({children}:{children:React.ReactNode}) {
  return (
   <Provider store={store} >
    <PersistGate loading={<MainLoader/>} persistor={persistor}>
    <Toaster/>
        {children}
    </PersistGate>
   </Provider>
  )
}

export default LayoutWrapper