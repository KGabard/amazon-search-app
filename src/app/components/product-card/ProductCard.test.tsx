import { getSearchProductsData } from '@/data/MockedApi'
import { theme } from '@/styles/theme'
import { ThemeProvider } from '@mui/material'
import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'
import { ProductClass } from '@/models/ProductModel'

const renderWithTheme = (ui: React.JSX.Element) => {
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)
}

const getProductCardElements = () => {
  const loadingPicureElmt = screen.queryByTestId(
    'loading-picture'
  ) as HTMLSpanElement | null
  const loadingTextElmts = screen.queryAllByTestId(
    'loading-text'
  ) as HTMLSpanElement[]

  const errorTextElmt = screen.queryByText(
    'Error ! No product found !'
  ) as HTMLHeadingElement | null

  const linkElmt = screen.queryByTestId(
    'productcard-link'
  ) as HTMLAnchorElement | null
  const pictureElmt = screen.queryByTestId(
    'productcard-picture'
  ) as HTMLImageElement | null
  const titleElmt = screen.queryByTestId(
    'productcard-title'
  ) as HTMLHeadingElement | null
  const starsElmt = screen.queryByTestId(
    'productcard-stars'
  ) as HTMLSpanElement | null
  const ratingElmt = screen.queryByTestId(
    'productcard-rating'
  ) as HTMLParagraphElement | null
  const ratingCountElmt = screen.queryByTestId(
    'productcard-ratingcount'
  ) as HTMLParagraphElement | null
  const priceElmt = screen.queryByTestId(
    'productcard-price'
  ) as HTMLParagraphElement | null

  return {
    loadingPicureElmt,
    loadingTextElmts,
    errorTextElmt,
    linkElmt,
    pictureElmt,
    titleElmt,
    starsElmt,
    ratingElmt,
    ratingCountElmt,
    priceElmt,
  }
}

const data = getSearchProductsData()

const productExample = new ProductClass(
  data.amazonProductSearchResults.productResults.results[20]
)

describe('ProductCard test suite', () => {
  describe('Rendering', () => {
    it('should render a loading product card', () => {
      renderWithTheme(<ProductCard loading />)
      const { loadingPicureElmt, loadingTextElmts } = getProductCardElements()

      expect(loadingPicureElmt).toHaveClass(
        'MuiSkeleton-rectangular',
        'MuiSkeleton-pulse'
      )

      expect(loadingTextElmts).toHaveLength(3)
      loadingTextElmts.forEach((loadingTextElmt) =>
        expect(loadingTextElmt).toHaveClass(
          'MuiSkeleton-text',
          'MuiSkeleton-pulse'
        )
      )
    })

    it('should render an error product card', () => {
      renderWithTheme(<ProductCard loading={false} />)
      const { errorTextElmt } = getProductCardElements()
      expect(errorTextElmt).toBeInTheDocument()
    })

    it('should render a filled product card', () => {
      renderWithTheme(<ProductCard loading={false} product={productExample} />)
      const {
        linkElmt,
        pictureElmt,
        titleElmt,
        starsElmt,
        ratingElmt,
        ratingCountElmt,
        priceElmt,
      } = getProductCardElements()

      expect(linkElmt).toHaveAttribute(
        'href',
        `/product/${productExample.asin}`
      )
      expect(pictureElmt).toHaveAttribute('alt', productExample.title)
      expect(titleElmt).toHaveTextContent(productExample.title)

      if (productExample.rating && productExample.ratingsCount) {
        expect(starsElmt).toHaveClass('MuiRating-root')
        expect(starsElmt).toHaveAttribute(
          'aria-label',
          `${productExample.rating} Stars`
        )
        expect(ratingElmt).toHaveTextContent(productExample.rating.toString())
        expect(ratingCountElmt).toHaveTextContent(
          productExample.ratingsCount.toString()
        )
      }

      if (!productExample.rating && !productExample.ratingsCount) {
        expect(starsElmt).not.toBeInTheDocument()
        expect(ratingElmt).not.toBeInTheDocument()
        expect(ratingCountElmt).not.toBeInTheDocument()
      }

      expect(priceElmt).toHaveTextContent(productExample.price)
    })
  })
})
