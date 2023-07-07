import { Box, Grid, SxProps, Theme, Typography } from '@mui/material'
import { ApolloError, QueryResult } from '@apollo/client'
import { DetailedProductType } from '@/types'
import Image from 'next/image'
import { theme } from '@/styles/theme'
import { DetailedProductClass } from '@/models/ProductModel'
import RatingsBreakdown from '@/app/components/ratings-breakdown/RatingsBreakdown'
import Link from 'next/link'

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

const imageStyle: SxProps<Theme> = {
  position: 'relative',
  width: '100%',
  height: 'fit-content',
  aspectRatio: 0.9,
  borderRadius: 2,
  overflow: 'hidden',
  backgroundColor: theme.palette.white.light,
  boxShadow: '5px 5px 20px rgba(0,0,0,0.5)',
}

export default function ProductInfos({ queryResult }: Props) {
  const { data, loading, error } = queryResult

  console.log(data)

  const productData: DetailedProductType = data?.amazonProduct
  const product = new DetailedProductClass(productData)

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
    <Grid container columnSpacing={6} rowSpacing={10}>
      <Grid item xs={5}>
        <Box sx={imageStyle}>
          <Image
            src={product.picture}
            alt={product.title}
            fill={true}
            style={{
              objectFit: 'contain',
            }}
            sizes={'(max-width: 768px) 100vw'}
          />
        </Box>
      </Grid>
      <Grid item xs={7}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography component="p" variant="title">
            {product.title}
          </Typography>
          <Typography component="p" variant="subtitle">
            {`Brand : ${product.brand}`}
          </Typography>
          <Typography component={'p'} variant="bodyItalic">
            Search on{' '}
            <Link
              href={product.url}
              target='_blank'
              style={{
                color: theme.palette.primary.main,
                textDecoration: 'underline',
              }}
            >
              Amazon
            </Link>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        {product.rating && product.ratingsCount && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <Typography
              component={'h2'}
              variant="title"
              sx={{
                textDecoration: 'underline',
                textDecorationThickness: '2px',
                textUnderlineOffset: '8px',
              }}
            >
              Notation :
            </Typography>
            <RatingsBreakdown
              rating={product.rating}
              ratingsCount={product.ratingsCount}
              ratingsBreakdown={product.ratingsBreakdown}
            />
          </Box>
        )}
      </Grid>
    </Grid>
  )
}
