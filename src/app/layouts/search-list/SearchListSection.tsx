import { SearchInputType } from '@/types'
import { Typography } from '@mui/material'
import SearchList from './SearchList'

function InvalidSearchContent() {
  return (
    <Typography component="h2" variant="subtitle">
      No search done.
    </Typography>
  )
}

type Props = {
  searchInput: SearchInputType
}

export default function SearchListSection({ searchInput }: Props) {
  const isSearchValid = searchInput.search && searchInput.search.length > 0

  return (
    <section className="productInfosSection">
      {isSearchValid ? (
        <SearchList searchInput={searchInput} />
      ) : (
        InvalidSearchContent()
      )}
    </section>
  )
}
