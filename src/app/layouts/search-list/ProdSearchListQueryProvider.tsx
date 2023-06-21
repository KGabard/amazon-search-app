import { gql, useQuery } from '@apollo/client'
import SearchList from './SearchList'
import { SearchInputType } from '@/types'

const GET_SEARCH_PRODUCTS = gql`
  query SearchProducts($search: String!, $domain: String!, $sort: String!) {
    amazonProductSearchResults(
      input: { searchInput: $search, domain: $domain }
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
          categories {
            name
          }
          ratingsBreakdown {
            fiveStarRatingsCount
            fourStarRatingsCount
            oneStarRatingsCount
            threeStarRatingsCount
            twoStarRatingsCount
          }
        }
      }
    }
  }
`

type Props = {
  searchInput: SearchInputType
}

export default function ProdSearchListQueryProvider({ searchInput }: Props) {
  const { search, domain, sort } = searchInput

  const queryResult = useQuery(GET_SEARCH_PRODUCTS, {
    variables: { search, domain, sort },
  })
  return (
    <div>
      <SearchList queryResult={queryResult} />
    </div>
  )
}
