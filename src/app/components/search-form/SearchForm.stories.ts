import type { Meta, StoryObj } from '@storybook/react'
import SearchForm from './SearchForm'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SearchForm> = {
  title: 'SearchInput',
  component: SearchForm,
}

export default meta
type Story = StoryObj<typeof SearchForm>

export const Base: Story = {
  args: {},
}
