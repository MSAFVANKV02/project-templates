"use client"
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { PropsWithChildren } from 'react'

type Props = {

}

const client = new QueryClient();

export default function QueryProvider({children}: PropsWithChildren<{}>) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>

}