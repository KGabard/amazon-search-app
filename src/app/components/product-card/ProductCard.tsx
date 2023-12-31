import { ProductClass } from '@/models/ProductModel'
import { theme } from '@/styles/theme'
import {
  Box,
  Paper,
  Rating,
  Skeleton,
  SxProps,
  Theme,
  Typography,
} from '@mui/material'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  /** Manage loading state */
  loading: boolean
  /** Object that contains infos about the product */
  product?: ProductClass
}

const containerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  backgroundColor: theme.palette.neutral.tertiary,
  color: theme.palette.white.main,
  p: 2,
  minWidth: '244px',
  maxWidth: '320px',
  width: '100%',
  height: '380px',
  overflow: 'hidden',
  borderRadius: 4,
  boxShadow: '5px 5px 16px rgba(0,0,0,0.5)',
}

const hoverEffectStyle: SxProps<Theme> = {
  transition: 'transform 0.3s ease-in-out',
  transform: 'scale(1)',
  cursor: 'pointer',
  ':hover': {
    transform: 'scale(1.05)',
  },
}

const imageStyle: SxProps<Theme> = {
  position: 'relative',
  width: '100%',
  height: '200px',
  borderRadius: 2,
  overflow: 'hidden',
  backgroundColor: theme.palette.white.light,
}

const titleStyle: SxProps<Theme> = {
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  textOverflow: 'ellipsis',
  m: 0,
}

const ratingContainerStyle: SxProps<Theme> = {
  display: 'flex',
  gap: 0.5,
  alignItems: 'center',
}

const infoContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  flex: '1 1 0px',
}

const filledProductCard = (product: ProductClass) => {
  return (
    <Link
      href={`/product/${product.asin}`}
      // target="_blank"
      style={{
        textDecoration: 'none',
        display: 'inline-block',
        width: 'fit-content',
      }}
      data-testid="productcard-link"
    >
      <Paper sx={{ ...containerStyle, ...hoverEffectStyle }}>
        <Box sx={imageStyle}>
          <Image
            src={product.picture}
            alt={product.title}
            fill={true}
            style={{
              objectFit: 'contain',
            }}
            sizes={'(max-width: 768px) 100vw'}
            data-testid="productcard-picture"
          />
        </Box>
        <Box sx={infoContainerStyle}>
          <Typography
            component={'h2'}
            variant="body"
            sx={titleStyle}
            data-testid="productcard-title"
          >
            {product.title}
          </Typography>
          {product.rating && (
            <Box sx={ratingContainerStyle}>
              <Rating
                defaultValue={product.rating}
                precision={0.5}
                readOnly
                size="small"
                sx={{
                  color: theme.palette.gold.main,
                }}
                emptyIcon={
                  <StarBorderOutlinedIcon
                    style={{ opacity: 0.5, color: theme.palette.gold.main }}
                    fontSize="inherit"
                  />
                }
                data-testid="productcard-stars"
              />
              <Typography
                component={'p'}
                variant="body"
                data-testid="productcard-rating"
              >{`${product.rating}`}</Typography>
              <Typography
                component={'p'}
                variant="bodySmallItalic"
                sx={{
                  ml: 1,
                }}
                data-testid="productcard-ratingcount"
              >{`(${product.ratingsCount})`}</Typography>
            </Box>
          )}
          <Typography
            sx={{ alignSelf: 'end', marginTop: 'auto' }}
            component={'p'}
            variant="subtitle"
            data-testid="productcard-price"
          >
            {product.price}
          </Typography>
        </Box>
      </Paper>
    </Link>
  )
}

const loadingProductCard = () => {
  return (
    <Paper sx={containerStyle}>
      <Skeleton
        variant="rectangular"
        sx={{ ...imageStyle, backgroundColor: theme.palette.white.transparent }}
        data-testid="loading-picture"
      />
      <Box sx={infoContainerStyle}>
        <Skeleton
          variant="text"
          sx={{
            fontSize: '1.5rem',
            backgroundColor: theme.palette.white.transparent,
          }}
          data-testid="loading-text"
        />
        <Skeleton
          variant="text"
          sx={{
            fontSize: '1.5rem',
            width: '60%',
            backgroundColor: theme.palette.white.transparent,
          }}
          data-testid="loading-text"
        />
        <Skeleton
          variant="text"
          sx={{
            fontSize: '1.5rem',
            width: '40px',
            alignSelf: 'end',
            marginTop: 'auto',
            backgroundColor: theme.palette.white.transparent,
          }}
          data-testid="loading-text"
        />
      </Box>
    </Paper>
  )
}

const errorProductCard = () => {
  return (
    <Paper
      sx={{ ...containerStyle, backgroundColor: theme.palette.error.main }}
    >
      <Box sx={{ ...imageStyle, opacity: '0.5' }}></Box>
      <Box sx={infoContainerStyle}>
        <Typography component={'h2'} variant="body" sx={titleStyle}>
          Error ! No product found !
        </Typography>
      </Box>
    </Paper>
  )
}

/** Card that represent a product with its picture, title, rating, price etc... */
export default function ProductCard({ loading, product }: Props) {
  if (loading) return loadingProductCard()
  if (product) return filledProductCard(product)
  return errorProductCard()
}
