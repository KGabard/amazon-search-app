import { screen, render } from '@testing-library/react'
import Home from './page'

import { theme } from '@/styles/theme'
import { ThemeProvider } from '@mui/material/styles'

describe('HomePage test suite', () => {
  it('should include a seach form section', () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    )
    expect(screen.getByTestId('search-form-section')).toBeInTheDocument()
  })
  it('should include a seach list section', () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    )
    expect(screen.getByTestId('search-list-section')).toBeInTheDocument()
  })
})
