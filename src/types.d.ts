import { DomainCodeType, SortCodeType } from './models/SearchModel'

export type ProductType = {
  asin: string
  title: string
  rating: number | null
  ratingsTotal: number | null
  mainImageUrl: string
  url: string | null
  price: {
    display: string
  } | null
}

export type PageType = {
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export type SearchProductsResultsType = {
  pageInfo: PageType
  results: ProductType[]
}

export type SearchInputType = {
  search: string
  domain: DomainCodeType
  sort: SortCodeType
}

export type ReviewType = {
  id: string
  body: string
  rating: number
  title: string
}

export type RatingsBreakdownType = {
  twoStarRatingsCount: number
  threeStarRatingsCount: number
  oneStarRatingsCount: number
  fourStarRatingsCount: number
  fiveStarRatingsCount: number
}

export type DetailedProductType = ProductType & {
  brand: string
  subtitle: string
  reviewsTotal: number
  reviewsPaginated: {
    reviews: ReviewType[]
  }
  ratingsBreakdown: RatingsBreakdownType
}
