import { Grid, Typography } from '@mui/material'
import { ApolloError, QueryResult } from '@apollo/client'
import { ProductResultsType } from '@/types'
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

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(244px, 1fr))',
  gridGap: '32px',
  gridRowGap: '32px',
  justifyItems: 'center',
  // justifyContent: 'center',
}

const gridItemStyle = {
  width: 'fit-content',
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
    <Grid container style={gridContainerStyle}>
      {productResults.results.map((product, index) => (
        <Grid item key={index} style={gridItemStyle}>
          <ProductCard
            key={product.asin + '_' + index}
            product={new ProductClass(product)}
          />
        </Grid>
      ))}
    </Grid>
  )
}
