export type ProductType = {
  asin: string
  title: string
  rating: number
  ratingsTotal: number
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