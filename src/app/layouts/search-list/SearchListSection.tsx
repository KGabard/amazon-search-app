import { Typography } from '@mui/material'
import SearchList from './SearchList'
import { useContext } from 'react'
import { searchDataContext } from '@/context/SearchDataContextProvider'

function InvalidSearchContent() {
  return (
    <Typography component="h2" variant="subtitle">
      No search done.
    </Typography>
  )
}

export default function SearchListSection() {
  const { searchData } = useContext(searchDataContext)

  const isSearchValid = searchData.search && searchData.search.length > 0

  return (
    <section className="productInfosSection">
      {isSearchValid ? (
        <SearchList />
      ) : (
        InvalidSearchContent()
      )}
    </section>
  )
}
