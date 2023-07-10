import { getSearchProductsData } from '@/data/MockedApi'
import { DomainCodeType, SortCodeType } from '@/models/SearchModel'
import { SearchInputType, SearchProductsResultsType } from '@/types'
import { QueryResult, gql, useQuery } from '@apollo/client'
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

type AmazonApiType = QueryResult<
  {
    amazonProductSearchResults: { productResults: SearchProductsResultsType }
  },
  {
    search: string
    domain: DomainCodeType
    sort: SortCodeType
  }
>

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

export default function useSearchProductsApi(searchInput: SearchInputType) {
  const [mockedApiResults, setMockedApiResults] = useState<MockedApiType>({
    loading: true,
    error: false,
    data: undefined,
  })

  const { search, domain, sort } = searchInput

  const amazonApiResults: AmazonApiType = useQuery(GET_SEARCH_PRODUCTS, {
    variables: { search, domain, sort },
  })

  useEffect(() => {
    async function fetchData() {
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

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return process.env.NODE_ENV === 'production'
    ? amazonApiResults
    : mockedApiResults
}
