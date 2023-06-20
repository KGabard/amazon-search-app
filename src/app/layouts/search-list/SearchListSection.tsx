import { Typography } from "@mui/material"
import ProdSearchListQueryProvider from "./ProdSearchListQueryProvider"
import DevSearchListQueryProvider from "./DevSearchListQueryProvider"

type Props = {
  searchTerm: string
}

export default function SearchListSection({searchTerm}: Props) {
  return (
    <section className="searchListSection">
    {!searchTerm || searchTerm.length === 0 ? (
      <Typography component="h2" variant="subtitle">
        Aucune recherche effectuée.
      </Typography>
    ) : process.env.NODE_ENV === 'production' ? (
      <ProdSearchListQueryProvider searchTerm={searchTerm} />
    ) : (
      <DevSearchListQueryProvider searchTerm={searchTerm} />
    )}
  </section>
  )
}