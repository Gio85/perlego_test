import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from './components/app/App'

describe('App', () => {
  it('renders title', () => {
    render(<App />)
    const text = screen.getByText(/Books You Might Like/i)
    expect(text).toBeInTheDocument()
  })
})
