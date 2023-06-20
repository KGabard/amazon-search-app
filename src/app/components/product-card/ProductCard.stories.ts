import type { Meta, StoryObj } from '@storybook/react'
import ProductCard from './ProductCard'
import getSearchProducts from '@/data/MockedApi'
import { ProductClass } from '@/models/ProductModel'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ProductCard> = {
  title: 'ProductCard',
  component: ProductCard,
}

export default meta
type Story = StoryObj<typeof ProductCard>

const { data } = getSearchProducts()

const firstProductData = data.amazonProductSearchResults.productResults.results[20]

export const Base: Story = {
  args: {
    product: new ProductClass(firstProductData)
  },
}
