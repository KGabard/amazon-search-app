import { getSearchProductsData } from '@/data/MockedApi'
import { SearchInputType } from '@/models/SearchModel'
import { SearchProductsResultsType } from '@/types'
import { gql, useLazyQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

const GET_SEARCH_PRODUCTS = gql`
  query SearchProducts(
    $search: String!
    $domain: AmazonDomain!
    $sort: AmazonProductResultsSort!
  ) {
    amazonProductSearchResults(
      input: { searchTerm: $search, domain: $domain }
    ) {
      productResults(input: { page: "1", sort: $sort }) {
        pageInfo {
          currentPage
          totalPages
          hasNextPage
          hasPrevPage
        }
        results {
          asin
          price {
            display
          }
          title
          rating
          ratingsTotal
          mainImageUrl
          url
        }
      }
    }
  }
`

type AmazonApiType = {
  amazonProductSearchResults: { productResults: SearchProductsResultsType }
}

type MockedApiType = {
  loading: boolean
  error: boolean
  data:
    | {
        amazonProductSearchResults: {
          productResults: SearchProductsResultsType
        }
      }
    | undefined
}

const initialMockedApiResults = {
  loading: true,
  error: false,
  data: undefined,
}

export default function useSearchProductsApi(searchInput: SearchInputType) {
  const [mockedApiResults, setMockedApiResults] = useState<MockedApiType>(
    initialMockedApiResults
  )

  const { search, domain, sort } = searchInput

  const [fetchAmazonApi, amazonApiResults] = useLazyQuery<
    AmazonApiType,
    SearchInputType
  >(GET_SEARCH_PRODUCTS)

  async function fetchMockedApi() {
    setMockedApiResults(initialMockedApiResults)

    try {
      // Simulate API call delay and successful API response
      const response: {
        amazonProductSearchResults: {
          productResults: SearchProductsResultsType
        }
      } = await new Promise((resolve) => {
        setTimeout(() => {
          // Define your response data here
          resolve(getSearchProductsData())
        }, 2000)
      })

      setMockedApiResults({
        ...mockedApiResults,
        loading: false,
        data: response,
      })
    } catch (error) {
      setMockedApiResults({ ...mockedApiResults, error: false })
    }
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'production')
      fetchAmazonApi({ variables: { search, domain, sort } })
    else fetchMockedApi()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, domain, sort])

  return process.env.NODE_ENV === 'production'
    ? amazonApiResults
    : mockedApiResults
}
