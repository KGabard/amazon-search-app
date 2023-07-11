import { DomainCodeType, SortCodeType } from '@/models/SearchModel'
import { SearchProductsResultsType } from '@/types'
import { ApolloError, QueryResult } from '@apollo/client'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

type AmazonApiType = QueryResult<
  {
    amazonProductSearchResults: { productResults: SearchProductsResultsType }
  },
  {
    search: string
    domain: DomainCodeType
    sort: SortCodeType
  }
>

type MockedApiType = {
  loading: boolean
  error: boolean | undefined | ApolloError
  data:
    | {
        amazonProductSearchResults: {
          productResults: SearchProductsResultsType
        }
      }
    | undefined
}

const defaultFetchedData = {
  loading: false,
  error: false,
  data: undefined,
}

export const productsListContext = createContext<{
  fetchedData: MockedApiType | AmazonApiType
  setFetchData: Dispatch<SetStateAction<MockedApiType | AmazonApiType>>
}>({ fetchedData: defaultFetchedData, setFetchData: () => defaultFetchedData })

type Props = {
  children: ReactNode
}

export default function ProductsListContextProvider({ children }: Props) {
  const [fetchedData, setFetchData] = useState<MockedApiType | AmazonApiType>(
    defaultFetchedData
  )

  return (
    <productsListContext.Provider
      value={{
        fetchedData,
        setFetchData,
      }}
    >
      {children}
    </productsListContext.Provider>
  )
}
