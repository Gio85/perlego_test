import React from 'react'
import { StoreProvider } from './providers/Store'
import { RouterProvider } from './providers/Router'

export const App: React.FC = () => (
  <StoreProvider>
    <RouterProvider />
  </StoreProvider>
)
