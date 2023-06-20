import { Montserrat, Share, Raleway } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
})

export const share = Share({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-share',
})

export const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-raleway',
})
