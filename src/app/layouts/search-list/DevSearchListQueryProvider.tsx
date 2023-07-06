import { useEffect, useState } from 'react'
import SearchList from './SearchList'
import getSearchProducts from '@/data/MockedApi'
import { SearchInputType } from '@/types'

type Props = {
  searchInput: SearchInputType
}

const fetchingQueryResult = {
  loading: true,
  error: false,
  data: undefined,
}

export default function DevSearchListQueryProvider({ searchInput }: Props) {
  const { search, domain, sort } = searchInput
  const [queryResult, setQueryResult] = useState<{
    loading: boolean
    error: boolean
    data: any
  }>(fetchingQueryResult)

  useEffect(() => {
    setQueryResult(fetchingQueryResult)

    const fetchQueryResult = setTimeout(() => {
      setQueryResult(getSearchProducts())
    }, 2000)
  }, [search, domain, sort])

  return (
    <div>
      <SearchList queryResult={queryResult} />
    </div>
  )
}
