import useProductApi from '@/hooks/useProductApi'
import { Box, Grid, SxProps, Theme, Typography } from '@mui/material'
import { ApolloError } from '@apollo/client'
import Image from 'next/image'
import { theme } from '@/styles/theme'
import { DetailedProductClass } from '@/models/ProductModel'
import RatingsBreakdown from '@/app/components/ratings-breakdown/RatingsBreakdown'
import Link from 'next/link'
import ReviewCard from '@/app/components/review-card/ReviewCard'

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

function NoProductAsinContent() {
  return (
    <Typography component="h2" variant="subtitle">
      No product asin given.
    </Typography>
  )
}

function LoadingContent() {
  return (
    <Typography component="p" variant="body">
      Loading...
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

function ProductContent(product: DetailedProductClass) {
  return (
    <Grid container columnSpacing={8} rowSpacing={10}>
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
              target="_blank"
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
        {product.reviews.length > 0 && (
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

  if (productAsin && loading) content = LoadingContent()

  if (productAsin && error) content = ErrorContent(error)

  if (productAsin && !loading && !error && data)
    content = ProductContent(new DetailedProductClass(data?.amazonProduct))

  return <section className="searchListSection">{content}</section>
}
