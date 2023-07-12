import type { Meta, StoryObj } from '@storybook/react'

import { getProductData } from '@/data/MockedApi'
import { DetailedProductClass } from '@/models/ProductModel'
import ProductDescription from './ProductDescription'

const meta: Meta<typeof ProductDescription> = {
  title: 'ProductDescription',
  tags: ['autodocs'],
  component: ProductDescription,
}

export default meta

type Story = StoryObj<typeof ProductDescription>

const mockedDetailedProduct = new DetailedProductClass(
  getProductData().amazonProduct
)

export const Base: Story = {
  args: {
    loading: false,
    title: mockedDetailedProduct.title,
    brand: mockedDetailedProduct.brand,
    url: mockedDetailedProduct.url,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

export const NoData: Story = {
  args: {},
}
