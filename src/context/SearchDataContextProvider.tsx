import { SearchDataType } from '@/models/SearchModel'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

export const initialSearchData: SearchDataType = {
  search: '',
  domain: '',
  sort: '',
}

export const searchDataContext = createContext<{
  searchData: SearchDataType
  setSearchData: Dispatch<SetStateAction<SearchDataType>>
}>({
  searchData: initialSearchData,
  setSearchData: () => initialSearchData,
})

type Props = {
  children: ReactNode
}

export default function SearchDataContextProvider({ children }: Props) {
  const [searchData, setSearchData] =
    useState<SearchDataType>(initialSearchData)

  console.log('Search : ', searchData)

  return (
    <searchDataContext.Provider
      value={{
        searchData: searchData,
        setSearchData: setSearchData,
      }}
    >
      {children}
    </searchDataContext.Provider>
  )
}
