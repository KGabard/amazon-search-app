import { getProduct } from '@/data/MockedApi'
import { DetailedProductType } from '@/types'
import { QueryResult, gql, useQuery } from '@apollo/client'
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

type AmazonApiType = QueryResult<
  { amazonProduct: DetailedProductType },
  {
    productAsin: string
  }
>

type MockedApiType = {
  loading: boolean
  error: boolean
  data: { amazonProduct: DetailedProductType } | undefined
}

type ProductApiType = AmazonApiType | MockedApiType

export default function useProductApi(productAsin: string): ProductApiType {
  const [mockedApiResults, setMockedApiResults] = useState<MockedApiType>({
    loading: true,
    error: false,
    data: undefined,
  })

  const amazonApiResults = useQuery(GET_SEARCH_PRODUCTS, {
    variables: { productAsin },
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 2000))
        // Simulate successful API response
        const response: { amazonProduct: DetailedProductType } =
          getProduct().data // Define your response data here

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

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return process.env.NODE_ENV === 'production'
    ? amazonApiResults
    : mockedApiResults
}
