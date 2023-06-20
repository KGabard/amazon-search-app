import { ProductClass } from '@/models/ProductModel'
import { theme } from '@/styles/theme'
import { Box, Paper, Rating, SxProps, Theme, Typography } from '@mui/material'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  product: ProductClass
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
  gap: 1,
  alignItems: 'center',
}

const infoContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  flex: '1 1 0px',
}

export default function ProductCard({ product }: Props) {
  return (
    <Link
      href={product.url}
      target="_blank"
      style={{
        textDecoration: 'none',
        display: 'inline-block',
        width: 'fit-content',
      }}
    >
      <Paper sx={containerStyle}>
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
        <Box sx={infoContainerStyle}>
          <Typography component={'h2'} variant="body" sx={titleStyle}>
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
              />
              <Typography
                component={'p'}
                variant="bodySmallItalic"
              >{`${product.ratingsCount}`}</Typography>
            </Box>
          )}
          <Typography
            sx={{ alignSelf: 'end', marginTop: 'auto' }}
            component={'p'}
            variant="subtitle"
          >
            {product.price}
          </Typography>
        </Box>
      </Paper>
    </Link>
  )
}
