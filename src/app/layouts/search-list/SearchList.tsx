import { Grid, Typography } from '@mui/material'
import { ApolloError, QueryResult } from '@apollo/client'
import { ProductResultsType, SearchInputType } from '@/types'
import ProductCard from '@/app/components/product-card/ProductCard'
import ProductClass from '@/models/ProductModel'
import { DomainCodeType, SortCodeType } from '@/models/SearchModel'

type Props = {
  queryResult:
    | QueryResult<any, SearchInputType>
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
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}

export default function SearchList({ queryResult }: Props) {
  const { data, loading, error } = queryResult

  console.log(data)

  const productResults: ProductResultsType =
    data?.amazonProductSearchResults.productResults

  // if (loading)
  //   return (
  //     <Typography component="p" variant="body">
  //       Loading...
  //     </Typography>
  //   )

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
      {loading
        ? Array.from({ length: 16 }, (_, index) => (
            <Grid item key={index} style={gridItemStyle}>
              <ProductCard key={index} loading={true} />
            </Grid>
          ))
        : productResults.results.map((product, index) => (
            <Grid item key={index} style={gridItemStyle}>
              <ProductCard
                key={product.asin + '_' + index}
                loading={false}
                product={new ProductClass(product)}
              />
            </Grid>
          ))}
    </Grid>
  )
}
