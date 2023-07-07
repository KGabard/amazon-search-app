import { QueryResult, gql, useQuery } from '@apollo/client'
import { SearchInputType } from '@/types'
import ProductInfos from './ProductInfos'

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

type Props = {
  productAsin: string
}

export default function ProdProductInfosQueryProvider({ productAsin }: Props) {
  const queryResult = useQuery(GET_SEARCH_PRODUCTS, {
    variables: { productAsin },
  })
  return (
    <div>
      <ProductInfos queryResult={queryResult} />
    </div>
  )
}
