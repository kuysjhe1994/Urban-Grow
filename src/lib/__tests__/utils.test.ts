import { cn } from '../../lib/utils'

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('a', undefined, 'b', { c: true, d: false })).toContain('a')
    expect(cn('a', undefined, 'b', { c: true, d: false })).toContain('b')
  })
})

