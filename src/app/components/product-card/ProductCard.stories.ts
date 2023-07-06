import type { Meta, StoryObj } from '@storybook/react'
import ProductCard from './ProductCard'
import { getSearchProducts } from '@/data/MockedApi'
import { ProductClass } from '@/models/ProductModel'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ProductCard> = {
  title: 'ProductCard',
  tags: ['autodocs'],
  component: ProductCard,
}

export default meta
type Story = StoryObj<typeof ProductCard>

const { data } = getSearchProducts()

const productDataExample =
  data.amazonProductSearchResults.productResults.results[20]

export const Base: Story = {
  args: {
    loading: false,
    product: new ProductClass(productDataExample),
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

export const Error: Story = {
  args: {
    loading: false,
  },
}
