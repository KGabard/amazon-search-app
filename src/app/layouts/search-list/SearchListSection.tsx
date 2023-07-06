import { Typography } from '@mui/material'
import ProdSearchListQueryProvider from './ProdSearchListQueryProvider'
import DevSearchListQueryProvider from './DevSearchListQueryProvider'
import { SearchInputType } from '@/types'

type Props = {
  searchInput: SearchInputType
}

export default function SearchListSection({ searchInput }: Props) {
  return (
    <section className="searchListSection">
      {!searchInput.search || searchInput.search.length === 0 ? (
        <Typography component="h2" variant="subtitle">
          No search done.
        </Typography>
      ) : process.env.NODE_ENV === 'production' ? (
        <ProdSearchListQueryProvider searchInput={searchInput} />
      ) : (
        <DevSearchListQueryProvider searchInput={searchInput} />
      )}
    </section>
  )
}
