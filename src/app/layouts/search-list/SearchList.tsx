import { SearchInputType, SearchProductsResultsType } from '@/types'
import useSearchProductsApi from '@/hooks/useSearchProductsApi'
import { Grid, Typography } from '@mui/material'
import { ApolloError } from '@apollo/client'
import ProductCard from '@/app/components/product-card/ProductCard'
import { ProductClass } from '@/models/ProductModel'

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(244px, 1fr))',
  gridGap: '32px',
  gridRowGap: '32px',
  justifyItems: 'center',
}

const gridItemStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}

function LoadingContent() {
  return (
    <Grid container style={gridContainerStyle}>
      {Array.from({ length: 16 }, (_, index) => (
        <Grid item key={index} style={gridItemStyle}>
          <ProductCard key={index} loading={true} />
        </Grid>
      ))}
    </Grid>
  )
}

function ErrorContent(error: boolean | ApolloError | undefined) {
  return (
    <Typography component="p" variant="body">
      {error instanceof ApolloError
        ? `Error while fetching data : ${error.message}`
        : 'Error while fetching data.'}
    </Typography>
  )
}

function SearchListContent(searchProductsResults: SearchProductsResultsType) {
  return (
    <Grid container style={gridContainerStyle}>
      {searchProductsResults.results.map((product, index) => (
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

type Props = {
  searchInput: SearchInputType
}

export default function SearchList({ searchInput }: Props) {
  const { loading, error, data } = useSearchProductsApi(searchInput)

  if (loading) return LoadingContent()

  if (error) return ErrorContent(error)

  if (!loading && !error && data)
    return SearchListContent(data?.amazonProductSearchResults.productResults)
}
