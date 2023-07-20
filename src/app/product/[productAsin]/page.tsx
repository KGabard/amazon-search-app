import ProductInfos from '@/app/layouts/product-infos/ProductInfos'

type Props = {
  params: {
    productAsin: string
  }
}

export function generateMetadata({
  params,
}: {
  params: { productAsin: string }
}) {
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
      <ProductInfos productAsin={productAsin} />
    </main>
  )
}
