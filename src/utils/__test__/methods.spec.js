import { describe, it, expect } from 'vitest'
import { formatDate } from '../methods'

describe('methods', () => {
  it('formats date', () => {
    const formatted = formatDate(new Date('2023-03-14T07:37:40+0000'))
    expect(formatted).toBe('Tuesday, 14 March 2023')
  })

  it('returns empty string if no date passed', () => {
    const formatted = formatDate()
    expect(formatted).toBe('')
  })
})
