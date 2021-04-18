import React from 'react'
import { StoreProvider } from './providers/Store'
import { RouterProvider } from './providers/Router'
import { Wrapper } from '../style'

export const App: React.FC = () => (
  <Wrapper>
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  </Wrapper>
)
