import type { Meta, StoryObj } from '@storybook/react'
import SearchInput from './SearchInput'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SearchInput> = {
  component: SearchInput,
}

export default meta
type Story = StoryObj<typeof SearchInput>

export const Base: Story = {
  args: {
    
  },
}
