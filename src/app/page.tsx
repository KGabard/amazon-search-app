'use client'

import { Container } from '@mui/material'
import './page.css'
import SearchListSection from './layouts/search-list/SearchListSection'
import { useState } from 'react'
import SearchInput, { initialValues } from './components/search-input/SearchInput'
import { SearchInputType } from '@/types'

export default function Home() {
  const [searchInput, setSearchInput] = useState<SearchInputType>(initialValues)

  console.log(searchInput)

  return (
    <main className="main">
      <Container
        sx={{ mt: 8, mb: 12, display: 'flex', flexDirection: 'column', gap: 8 }}
      >
        <SearchInput setSearchInput={setSearchInput} />
        <SearchListSection
          searchInput={searchInput}
        />
      </Container>
    </main>
  )
}
