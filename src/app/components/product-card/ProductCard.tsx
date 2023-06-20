import { ProductClass } from '@/models/ProductModel'
import { theme } from '@/styles/theme'
import { Paper, Typography } from '@mui/material'

type Props = {
  product: ProductClass
}

export default function ProductCard({ product }: Props) {
  return (
    <Paper
      sx={{
        backgroundColor: theme.palette.neutral.tertiary,
        color: theme.palette.white.main,
        p: 4,
        maxWidth: '320px',
        height: '360px',
        overflow: 'hidden',
        borderRadius: 4,
      }}
    >
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
