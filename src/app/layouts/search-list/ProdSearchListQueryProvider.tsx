import { gql, useQuery } from '@apollo/client'
import SearchList from './SearchList'

type Props = {
  searchTerm: string
}

const GET_SEARCH_PRODUCTS = gql`
  query SearchProducts($searchTerm: String!) {
    amazonProductSearchResults(input: { searchTerm: $searchTerm }) {
      productResults(input: { page: "1", sort: FEATURED }) {
        pageInfo {
          currentPage
          totalPages
          hasNextPage
          hasPrevPage
        }
        results {
          asin
          title
          rating
          ratingsTotal
          mainImageUrl
          price {
            display
          }
        }
      }
    }
  }
`

export default function ProdSearchListQueryProvider({ searchTerm }: Props) {
  let queryResult = useQuery(GET_SEARCH_PRODUCTS, { variables: { searchTerm } })
  return (
    <div>
      <SearchList searchTerm={searchTerm} queryResult={queryResult} />
    </div>
  )
}
