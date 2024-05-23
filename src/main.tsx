import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes.tsx'
import { Provider } from 'react-redux'
import { store } from './lib/store/store.ts'
import BaseLayout from './layouts/BaseLayout'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BaseLayout>
      <RouterProvider router={routes} />
      </BaseLayout>
    </Provider>
  </React.StrictMode>
)
