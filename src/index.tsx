import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'

import { BarberApp } from './BarberApp'

import { store } from './store/store'

import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <BarberApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
