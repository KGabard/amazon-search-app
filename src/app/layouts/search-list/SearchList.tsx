import { Typography } from '@mui/material'
import { ApolloError, QueryResult, useQuery } from '@apollo/client'
import { ProductResultsType } from '@/types'
import getSearchProducts from '@/data/MockedApi'
import ProductCard from '@/app/components/product-card/ProductCard'
import { ProductClass } from '@/models/ProductModel'

type Props = {
  searchTerm: string
  queryResult:
    | QueryResult<
        any,
        {
          searchTerm: string
        }
      >
    | {
        data: any
        loading: boolean
        error: boolean | ApolloError | undefined
      }
}

export default function SearchList({ searchTerm, queryResult }: Props) {
  const { data, loading, error } = queryResult

  const productResults: ProductResultsType =
    data?.amazonProductSearchResults.productResults

  if (loading)
    return (
      <Typography component="p" variant="body">
        Loading...
      </Typography>
    )

  if (error)
    return (
      <Typography component="p" variant="body">
        {error instanceof ApolloError
          ? `Error while fetching data : ${error.message}`
          : 'Error while fetching data.'}
      </Typography>
    )

  return (
    <ul>
      {productResults.results.map((product, index) => (
        <ProductCard
          key={product.asin + '_' + index}
          product={new ProductClass(product)}
        />
      ))}
    </ul>
  )
}
