import { DomainCodeType, SortCodeType } from "./models/SearchModel"

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