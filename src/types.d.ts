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
  categories: {
    name
  }[]
  ratingsBreakdown: {
    fiveStarRatingsCount
    fourStarRatingsCount
    oneStarRatingsCount
    threeStarRatingsCount
    twoStarRatingsCount
  } | null
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

export type DetailedProductType = {
  title: string
  brand: string
  mainImageUrl: string
  reviewsTotal: number
  ratingsTotal: number
  rating: number
  price: {
    display: string
  }
  url: string
  subtitle: string
  reviewsPaginated: {
    reviews: ReviewType[]
  }
  ratingsBreakdown: {
    twoStarRatingsCount: number
    threeStarRatingsCount: number
    oneStarRatingsCount: number
    fourStarRatingsCount: number
    fiveStarRatingsCount: number
  }
}
