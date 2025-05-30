"use client"
import React from 'react'
import { Provider } from 'react-redux'
import {store} from '@/managements/redux/store'

function ReduxProviders({children}:{children:React.ReactNode}) {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default ReduxProviders