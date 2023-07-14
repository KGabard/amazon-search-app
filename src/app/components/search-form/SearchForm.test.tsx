import { render, screen } from '@testing-library/react'
import SearchForm from './SearchForm'
import { ThemeProvider } from '@mui/material'
import { theme } from '@/styles/theme'

describe('Search Form test suite', () => {
  it('should include a search text field', () => {
    render(
      <ThemeProvider theme={theme}>
        <SearchForm />
      </ThemeProvider>
    )
    const searchInputElmt = screen.getByLabelText('Search')
    expect(searchInputElmt).toBeInTheDocument()
    expect(searchInputElmt).toHaveAttribute('type', 'text')
  })

  it('should include a domain listbox field', () => {
    render(
      <ThemeProvider theme={theme}>
        <SearchForm />
      </ThemeProvider>
    )
    const domainInputElmt = screen.getByLabelText('Domain')
    expect(domainInputElmt).toBeInTheDocument()
    expect(domainInputElmt).toHaveAttribute('aria-haspopup', 'listbox')
  })

  it('should include a search field', () => {
    render(
      <ThemeProvider theme={theme}>
        <SearchForm />
      </ThemeProvider>
    )
    const sortInputElmt = screen.getByLabelText('Sort')
    expect(sortInputElmt).toBeInTheDocument()
    expect(sortInputElmt).toHaveAttribute('aria-haspopup', 'listbox')
  })
})
