'use client'

import ProductInfos from '@/app/layouts/product-infos/ProductInfos'
import { Container } from '@mui/material'

type Props = {
  params: {
    productAsin: string
  }
}


export function generateMetadata({ params }: { params: { productAsin: string } }) {
  // const posts = getSortedPostsData() //deduped
  // const { postId } = params

  // const post = posts.find((post) => post.id === postId)

  // if (!post)
  //   return {
  //     title: 'Post Not Found',
  //   }

  // return {
  //   title: post.title,
  // }
}

export default function ProductPage({ params: { productAsin } }: Props) {
  return (
    <main className="main">
      <Container
        sx={{ mt: 8, mb: 12, display: 'flex', flexDirection: 'column', gap: 8 }}
      >
        <ProductInfos productAsin={productAsin} />
      </Container>
    </main>
  )
}
