'use client'

import { Container } from '@mui/material'
import './page.css'
import SearchListSection from './layouts/search-list/SearchListSection'

export default function Home() {
  const searchTerm = 'chair'
  return (
    <main className="main">
      <Container sx={{ mt: 8, mb: 12 }}>
        <SearchListSection searchTerm={searchTerm} />
      </Container>
    </main>
  )
}
