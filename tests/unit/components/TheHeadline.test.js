import { nextTick } from 'vue'
import { render, screen } from '@testing-library/vue'

import TheHeadline from '@/components/TheHeadline.vue'
import { describe, expect, it, vi } from 'vitest'

describe('TheHeadline', () => {
  it('displays introductory action verb', () => {
    vi.useFakeTimers()
    render(TheHeadline)

    const actionPhrase = screen.getByRole('heading', {
      name: /Build for everyone/i
    })
    expect(actionPhrase).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('changes action verb at a consistent interval', () => {
    vi.useFakeTimers()
    const mock = vi.fn()
    vi.stubGlobal('setInterval', mock)

    render(TheHeadline)

    expect(mock).toHaveBeenCalled()
    vi.useRealTimers()
  })

  it('swaps action verb after interval', async () => {
    vi.useFakeTimers()
    render(TheHeadline)
    vi.advanceTimersToNextTimer()

    await nextTick()
    const actionPhrase = screen.getByRole('heading', {
      name: /create for everyone/i
    })
    expect(actionPhrase).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('removes interval when component disappears', () => {
    vi.useFakeTimers()
    const clear = vi.fn()
    vi.stubGlobal('clearInterval', clear)

    const { unmount } = render(TheHeadline)
    unmount()

    expect(clear).toHaveBeenCalled()
    vi.useRealTimers()
  })
})
