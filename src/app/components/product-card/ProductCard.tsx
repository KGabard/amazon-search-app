import { ProductClass } from '@/models/ProductModel'
import { theme } from '@/styles/theme'
import { Box, Paper, Typography } from '@mui/material'
import Image from 'next/image'

type Props = {
  product: ProductClass
}

export default function ProductCard({ product }: Props) {
  return (
    <Paper
      sx={{
        backgroundColor: theme.palette.neutral.tertiary,
        color: theme.palette.white.main,
        p: 2,
        minWidth: '244px',
        maxWidth: '320px',
        width: '100%',
        height: '360px',
        overflow: 'hidden',
        borderRadius: 4,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '200px',
          borderRadius: 2,
          overflow: 'hidden',
          backgroundColor: '#FEFEFE',
        }}
      >
        <Image
          src={product.picture}
          alt={product.title}
          fill={true}
          style={{
            objectFit: 'contain',
          }}
        />
      </Box>
      <Typography
        component={'h2'}
        variant="body"
        sx={{
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          textOverflow: 'ellipsis',
          m: 0,
        }}
      >
        {product.title}
      </Typography>
    </Paper>
  )
}
