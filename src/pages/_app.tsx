import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import store from '@/state/index'
import Layout from '@/components/Layout'
import '../styles/index.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}
