import { SearchInputType } from '@/types'

export type DomainNameType = 'USA' | 'United Kingdom' | 'France' | ''
export type DomainCodeType = 'US' | 'UK' | 'FR' | ''

export type SortNameType =
  | 'Featured'
  | 'Most recent'
  | 'Price: Low to High'
  | 'Price: High to Low'
  | 'Avg. Customer Review'
  | ''
export type SortCodeType =
  | 'FEATURED'
  | 'MOST_RECENT'
  | 'PRICE_ASCENDING'
  | 'PRICE_DESCENDING'
  | 'AVERAGE_CUSTOMER_REVIEW'
  | ''

type DomainMatchType = [DomainNameType, DomainCodeType]
type SortMatchType = [SortNameType, SortCodeType]

export type SearchData = {
  search: string
  domain: DomainNameType
  sort: SortNameType
}

const DomainsMatchList: DomainMatchType[] = [
  ['USA', 'US'],
  ['United Kingdom', 'UK'],
  ['France', 'FR'],
]

const SortsMatchList: SortMatchType[] = [
  ['Featured', 'FEATURED'],
  ['Most recent', 'MOST_RECENT'],
  ['Price: Low to High', 'PRICE_ASCENDING'],
  ['Price: High to Low', 'PRICE_DESCENDING'],
  ['Avg. Customer Review', 'AVERAGE_CUSTOMER_REVIEW'],
]

export default class SearchModel {
  private _searchData: SearchData

  constructor(searchData: SearchData) {
    this._searchData = searchData
  }

  get searchData(): SearchInputType {
    const search = this._searchData.search
    const domain =
      DomainsMatchList.find(
        (domainName) => domainName[0] === this._searchData.domain
      )?.[1] ?? ''
    const sort =
      SortsMatchList.find(
        (sortName) => sortName[0] === this._searchData.sort
      )?.[1] ?? ''

    return {
      search,
      domain,
      sort,
    }
  }
}
