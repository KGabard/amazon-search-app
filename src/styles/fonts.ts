import { Montserrat, Lora } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
})

export const lora = Lora({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lora',
})
