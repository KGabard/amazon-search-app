import { formatReviewTitle } from './utils'

describe('Utils test suite', () => {
  it('should format review title', () => {
    const unformatedReviewTitle =
      '4 out of 5 \n\n\n\n\n  \n\n\n My formated title  '
    const formatedReviewTitle = 'My formated title'

    expect(formatReviewTitle(unformatedReviewTitle)).toBe(formatedReviewTitle)
  })
})
