import ProductInfos from '@/app/layouts/product-infos/ProductInfos'

type Props = {
  params: {
    productAsin: string
  }
}

export function generateMetadata({ params: { productAsin } }: Props) {
  return {
    title: `Ref. ${productAsin}`,
    description: `Detailed product page of reference ${productAsin}`,
  }
}

export default function ProductPage({ params: { productAsin } }: Props) {
  return (
    <main className="main">
      <ProductInfos productAsin={productAsin} />
    </main>
  )
}
