import { gql, useQuery } from '@apollo/client'
import SearchList from './SearchList'
import getSearchProducts from '@/data/MockedApi'

type Props = {
  searchTerm: string
}

export default function ProdSearchListQueryProvider({ searchTerm }: Props) {
  let queryResult = getSearchProducts()

  return (
    <div>
      <SearchList searchTerm={searchTerm} queryResult={queryResult} />
    </div>
  )
}
