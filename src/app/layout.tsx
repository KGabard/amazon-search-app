import './globals.css'
import Providers from '@/providers/Providers'

export const metadata = {
  title: 'Amazon search',
  description: 'Search engine for Amazon products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Providers>{children}</Providers>
}
