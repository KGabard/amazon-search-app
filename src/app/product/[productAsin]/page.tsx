'use client'

import ProductInfosSection from '@/app/layouts/product-infos/ProductInfosSection'
import { Container } from '@mui/material'

type Props = {
  params: {
    productAsin: string
  }
}

export default function ProductPage({ params: { productAsin } }: Props) {
  return (
    <main className="main">
      <Container
        sx={{ mt: 8, mb: 12, display: 'flex', flexDirection: 'column', gap: 8 }}
      >
        <ProductInfosSection productAsin={productAsin} />
      </Container>
    </main>
  )
}
