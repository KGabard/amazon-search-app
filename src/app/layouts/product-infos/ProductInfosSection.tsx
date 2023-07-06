import { Typography } from '@mui/material'
import DevProductInfosQueryProvider from './DevProductInfosQueryProvider'
import ProdProductInfosQueryProvider from './ProdProductInfosQueryProvider'

type Props = {
  productAsin: string
}

export default function ProductInfosSection({ productAsin }: Props) {
  return (
    <section className="searchListSection">
      {!productAsin ? (
        <Typography component="h2" variant="subtitle">
          No product asin given.
        </Typography>
      ) : process.env.NODE_ENV === 'production' ? (
        <ProdProductInfosQueryProvider productAsin={productAsin} />
      ) : (
        <DevProductInfosQueryProvider productAsin={productAsin} />
      )}
    </section>
  )
}
