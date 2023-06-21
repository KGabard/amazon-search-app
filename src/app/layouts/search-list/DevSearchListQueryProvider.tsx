import SearchList from './SearchList'
import getSearchProducts from '@/data/MockedApi'

export default function ProdSearchListQueryProvider() {
  let queryResult = getSearchProducts()

  return (
    <div>
      <SearchList queryResult={queryResult} />
    </div>
  )
}
