export type ProductType = {
  asin: string
  title: string
  rating: number | null
  ratingsTotal: number | null
  mainImageUrl: string
  price: {
    display: string
  }
}

export type PageType = {
  currentPage: 1
  totalPages: 20
  hasNextPage: boolean
  hasPrevPage: boolean
}

export type ProductResultsType = {
  pageInfo: PageType
  results: ProductType[]
}