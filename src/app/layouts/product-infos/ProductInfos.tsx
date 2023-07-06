import { Box, Typography } from '@mui/material'
import { ApolloError, QueryResult } from '@apollo/client'
import { DetailedProductType } from '@/types'

type Props = {
  queryResult:
    | QueryResult<
        any,
        {
          productAsin: string
        }
      >
    | {
        data: any
        loading: boolean
        error: boolean | ApolloError | undefined
      }
}

export default function ProductInfos({ queryResult }: Props) {
  const { data, loading, error } = queryResult

  console.log(data)

  const productData: DetailedProductType = data?.amazonProduct

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
    <Box>
      <Typography component="p" variant="body">
        {productData.title}
      </Typography>
    </Box>
  )
}
