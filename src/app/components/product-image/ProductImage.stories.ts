import type { Meta, StoryObj } from '@storybook/react'

import ProductImage from './ProductImage'
import { getProductData } from '@/data/MockedApi'
import { DetailedProductClass } from '@/models/ProductModel'

const meta: Meta<typeof ProductImage> = {
  title: 'ProductImage',
  tags: ['autodocs'],
  component: ProductImage,
}

export default meta

type Story = StoryObj<typeof ProductImage>

const mockedDetailedProduct = new DetailedProductClass(getProductData().amazonProduct)

export const Base: Story = {
  args: {
    loading: false,
    pictureUrl: mockedDetailedProduct.picture,
    title: mockedDetailedProduct.title,
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
