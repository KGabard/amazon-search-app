import useProductApi from '@/hooks/useProductApi'
import { Box, Grid, Skeleton, SxProps, Theme, Typography } from '@mui/material'
import { ApolloError } from '@apollo/client'
import Image from 'next/image'
import { theme } from '@/styles/theme'
import { DetailedProductClass } from '@/models/ProductModel'
import RatingsBreakdown from '@/app/components/ratings-breakdown/RatingsBreakdown'
import Link from 'next/link'
import ReviewCard from '@/app/components/review-card/ReviewCard'
import ProductImage from '@/app/components/product-image/ProductImage'
import ProductDescription from '@/app/components/product-description/ProductDescription'

// const imageStyle: SxProps<Theme> = {
//   position: 'relative',
//   width: '100%',
//   height: 'fit-content',
//   aspectRatio: 0.9,
//   borderRadius: 2,
//   overflow: 'hidden',
//   backgroundColor: theme.palette.white.light,
//   boxShadow: '5px 5px 20px rgba(0,0,0,0.5)',
// }

function NoProductAsinContent() {
  return (
    <Typography component="h2" variant="subtitle">
      No product asin given.
    </Typography>
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

function ProductContent({
  loading,
  product,
}: {
  loading?: boolean
  product?: DetailedProductClass
}) {
  return (
    <Grid container columnSpacing={8} rowSpacing={10}>
      <Grid item xs={5}>
        {loading ? (
          <ProductImage loading />
        ) : (
          <ProductImage pictureUrl={product?.picture} title={product?.title} />
        )}
      </Grid>
      <Grid item xs={7}>
        {loading ? (
          <ProductDescription loading />
        ) : (
          <ProductDescription
            title={product?.title}
            brand={product?.brand}
            url={product?.url}
          />
        )}
      </Grid>
      <Grid item xs={4}>
        {product?.rating && product?.ratingsCount && (
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
              Ratings :
            </Typography>
            <RatingsBreakdown
              rating={product.rating}
              ratingsCount={product.ratingsCount}
              ratingsBreakdown={product.ratingsBreakdown}
            />
          </Box>
        )}
      </Grid>
      <Grid item xs={8}>
        {product && product.reviews.length > 0 && (
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
              Reviews :
            </Typography>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '48px',
              }}
            >
              {product.reviews.map((review) => {
                return (
                  <li key={review.id}>
                    <ReviewCard review={review} />
                  </li>
                )
              })}
            </ul>
          </Box>
        )}
      </Grid>
    </Grid>
  )
}

type Props = {
  productAsin: string
}

export default function ProductInfos({ productAsin }: Props) {
  const { loading, error, data } = useProductApi(productAsin)

  let content: JSX.Element = NoProductAsinContent()

  if (productAsin && loading) content = <ProductContent loading />

  if (productAsin && error) content = ErrorContent(error)

  if (productAsin && !loading && !error && data)
    content = (
      <ProductContent product={new DetailedProductClass(data?.amazonProduct)} />
    )

  return <section className="productInfosSection">{content}</section>
}
