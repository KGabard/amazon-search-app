import type { Meta, StoryObj } from '@storybook/react'
import ReviewCard from './ReviewCard'
import { getProductData } from '@/data/MockedApi'
import { DetailedProductClass } from '@/models/ProductModel'
import { DetailedProductType } from '@/types'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ReviewCard> = {
  title: 'ReviewCard',
  tags: ['autodocs'],
  component: ReviewCard,
}

export default meta
type Story = StoryObj<typeof ReviewCard>

const productData: DetailedProductType = getProductData().amazonProduct
const product = new DetailedProductClass(productData)
const review = product.reviews[0]

export const Base: Story = {
  args: {
    review,
  },
}
