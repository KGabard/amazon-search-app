import { getProductData } from '@/data/MockedApi'
import { DetailedProductType } from '@/types'
import { QueryResult, gql, useLazyQuery, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

const GET_SEARCH_PRODUCTS = gql`
  query GetProduct($productAsin: String!) {
    amazonProduct(input: { asinLookup: { asin: $productAsin } }) {
      asin
      title
      brand
      mainImageUrl
      reviewsTotal
      ratingsTotal
      rating
      price {
        display
      }
      url
      subtitle
      reviewsPaginated(input: { page: "1" }) {
        reviews {
          id
          body
          rating
          title
        }
      }
      ratingsBreakdown {
        twoStarRatingsCount
        threeStarRatingsCount
        oneStarRatingsCount
        fourStarRatingsCount
        fiveStarRatingsCount
      }
    }
  }
`

type AmazonApiType = { amazonProduct: DetailedProductType }

type MockedApiType = {
  loading: boolean
  error: boolean
  data: { amazonProduct: DetailedProductType } | undefined
}

export default function useProductApi(productAsin: string) {
  const [mockedApiResults, setMockedApiResults] = useState<MockedApiType>({
    loading: true,
    error: false,
    data: undefined,
  })

  const [fetchAmazonApi, amazonApiResults] = useLazyQuery<
    AmazonApiType,
    {
      productAsin: string
    }
  >(GET_SEARCH_PRODUCTS)

  async function fetchMockedApi() {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000))
      // Simulate successful API response
      const response: { amazonProduct: DetailedProductType } = getProductData() // Define your response data here

      setMockedApiResults({
        ...mockedApiResults,
        loading: false,
        data: response,
      })
    } catch (error) {
      // Simulate error handling
      setMockedApiResults({ ...mockedApiResults, error: true })
    }
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'production')
      fetchAmazonApi({
        variables: { productAsin },
      })
    else fetchMockedApi()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return process.env.NODE_ENV === 'production'
    ? amazonApiResults
    : mockedApiResults
}
