'use client'

import { Container } from '@mui/material'
import './page.css'
import SearchListSection from './layouts/search-list/SearchListSection'
import { useState } from 'react'
import SearchInput from './components/search-input/SearchInput'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>('')

  console.log(searchTerm)

  return (
    <main className="main">
      <Container
        sx={{ mt: 8, mb: 12, display: 'flex', flexDirection: 'column', gap: 8 }}
      >
        <SearchInput setSearchTerm={setSearchTerm} />
        <SearchListSection searchTerm={searchTerm} />
      </Container>
    </main>
  )
}
