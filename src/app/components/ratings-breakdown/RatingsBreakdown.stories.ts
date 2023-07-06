import type { Meta, StoryObj } from '@storybook/react'
import RatingsBreakdown from './RatingsBreakdown'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof RatingsBreakdown> = {
  title: 'RatingsBreakdown',
  tags: ['autodocs'],
  component: RatingsBreakdown,
}

export default meta
type Story = StoryObj<typeof RatingsBreakdown>

export const Base: Story = {
  args: {
    rating: 4.7,
    ratingsCount: 124,
    ratingsBreakdown: [22, 5, 8, 24, 75],
  },
}
