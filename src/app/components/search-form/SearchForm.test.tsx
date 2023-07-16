import { getByText, render, screen, waitFor } from '@testing-library/react'
import SearchForm from './SearchForm'
import { ThemeProvider } from '@mui/material'
import { theme } from '@/styles/theme'
import userEvent from '@testing-library/user-event'

const renderWithTheme = (ui: React.JSX.Element) => {
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)
}

const getFormElements = () => {
  const searchBtnElmt = screen.getByRole('button', {
    name: /search/i,
  }) as HTMLButtonElement
  const searchInputElmt = screen.getByLabelText('Search') as HTMLInputElement
  const domainInputElmt = screen.getByLabelText('Domain') as HTMLButtonElement
  const sortInputElmt = screen.getByLabelText('Sort') as HTMLButtonElement

  return { searchBtnElmt, searchInputElmt, domainInputElmt, sortInputElmt }
}

describe('Search Form test suite', () => {
  describe('Rendering', () => {
    it('should include a search text field', () => {
      renderWithTheme(<SearchForm />)
      const { searchInputElmt } = getFormElements()
      expect(searchInputElmt).toBeInTheDocument()
      expect(searchInputElmt).toHaveAttribute('type', 'text')
    })

    it('should include a domain listbox field', () => {
      renderWithTheme(<SearchForm />)
      const { domainInputElmt } = getFormElements()
      expect(domainInputElmt).toBeInTheDocument()
      expect(domainInputElmt).toHaveAttribute('aria-haspopup', 'listbox')
    })

    it('should include a sort listbox field', () => {
      renderWithTheme(<SearchForm />)
      const { sortInputElmt } = getFormElements()
      expect(sortInputElmt).toBeInTheDocument()
      expect(sortInputElmt).toHaveAttribute('aria-haspopup', 'listbox')
    })

    it('should include a search button', () => {
      renderWithTheme(<SearchForm />)
      const { searchBtnElmt } = getFormElements()
      expect(searchBtnElmt).toBeInTheDocument()
    })
  })

  describe('Behavior', () => {
    it('should warn helperText "is required" for empty inputs', async () => {
      renderWithTheme(<SearchForm />)
      const { searchInputElmt, domainInputElmt, sortInputElmt, searchBtnElmt } =
        getFormElements()

      userEvent.click(searchBtnElmt)

      expect(
        await screen.findByText('Search term is required')
      ).toBeInTheDocument()
      expect(searchInputElmt).toHaveAttribute('aria-invalid', 'true')
      expect(await screen.findByText('Domain is required')).toBeInTheDocument()
      expect(domainInputElmt).toHaveClass('Mui-error')
      expect(await screen.findByText('Sort is required')).toBeInTheDocument()
      expect(sortInputElmt).toHaveClass('Mui-error')
    })

    it('should warn helperText about lenght for search input < 2 caracters', async () => {
      renderWithTheme(<SearchForm />)
      const { searchInputElmt, searchBtnElmt } = getFormElements()

      await userEvent.type(searchInputElmt, 'a') // 1 caracter
      userEvent.click(searchBtnElmt)

      expect(
        await screen.findByText('Search term should be longer than 2 caracters')
      ).toBeInTheDocument()
      expect(searchInputElmt).toHaveAttribute('aria-invalid', 'true')

      await userEvent.clear(searchInputElmt)
      await userEvent.type(searchInputElmt, 'aa') // 2 caracters
      userEvent.click(searchBtnElmt)

      expect(
        screen.queryByText('Search term should be longer than 2 caracters')
      ).not.toBeInTheDocument()
      expect(searchInputElmt).toHaveAttribute('aria-invalid', 'false')
    })

    it('should warn helperText about lenght for search input > 30 caracters', async () => {
      renderWithTheme(<SearchForm />)
      const { searchInputElmt, searchBtnElmt } = getFormElements()

      await userEvent.type(searchInputElmt, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') // 31 caracters
      userEvent.click(searchBtnElmt)

      expect(
        await screen.findByText(
          'Search term should be shorter than 30 caracters'
        )
      ).toBeInTheDocument()
      expect(searchInputElmt).toHaveAttribute('aria-invalid', 'true')

      await userEvent.clear(searchInputElmt)
      await userEvent.type(searchInputElmt, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') // 30 caracters
      userEvent.click(searchBtnElmt)

      expect(
        screen.queryByText('Search term should be shorter than 30 caracters')
      ).not.toBeInTheDocument()
      expect(searchInputElmt).toHaveAttribute('aria-invalid', 'false')
    })

    it('should be submit if all inputs are ok', async () => {
      renderWithTheme(<SearchForm />)
      const { searchInputElmt, domainInputElmt, sortInputElmt, searchBtnElmt } =
        getFormElements()

      await userEvent.type(searchInputElmt, 'Table')
      expect(searchInputElmt).toHaveValue('Table')

      await userEvent.click(domainInputElmt)
      await userEvent.click(screen.getByRole('option', { name: 'France' }))
      expect(domainInputElmt).toHaveTextContent('France')

      await userEvent.click(sortInputElmt)
      await userEvent.click(screen.getByRole('option', { name: 'Most recent' }))
      expect(domainInputElmt).toHaveTextContent('Most recent')

      await userEvent.click(searchBtnElmt)
    })
  })
})
