import { Typography } from '@mui/material'
import { ApolloError, QueryResult, useQuery } from '@apollo/client'
import { ProductResultsType } from '@/types'
import getSearchProducts from '@/data/MockedApi'

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
        <li key={product.asin + '_' + index}>{product.title}</li>
      ))}
    </ul>
  )
}
