'use client'

import { Container, Typography } from '@mui/material'
import './page.css'
import SearchList from './layouts/search-list/SearchList'
import ProdSearchListQueryProvider from './layouts/search-list/ProdSearchListQueryProvider'
import DevSearchListQueryProvider from './layouts/search-list/DevSearchListQueryProvider'

export default function Home() {
  const searchTerm = 'chair'
  return (
    <main className="main">
      <Container sx={{ mt: 8, mb: 12 }}>
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
      </Container>
    </main>
  )
}
