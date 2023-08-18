import type { AppProps } from 'next/app'

import { Layout } from '@/components/Layout'
import '@/styles/globals.css'
import { UiProvider } from '@/context/UiContext'
import { AuthProvider } from '@/context/AuthContext'
import { DataProvider } from '@/context/DataContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <AuthProvider>
        <DataProvider>
          <Component {...pageProps} />
        </DataProvider>
      </AuthProvider>
    </UiProvider>
  )
}
