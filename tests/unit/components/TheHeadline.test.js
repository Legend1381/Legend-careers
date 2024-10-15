import { nextTick } from 'vue'
import { render, screen } from '@testing-library/vue'

import TheHeadline from '@/components/TheHeadline.vue'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('TheHeadline', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('displays introductory action verb', () => {
    render(TheHeadline)

    const actionPhrase = screen.getByRole('heading', {
      name: /Build for everyone/i
    })
    expect(actionPhrase).toBeInTheDocument()
  })

  it('changes action verb at a consistent interval', () => {
    const mock = vi.fn()
    vi.stubGlobal('setInterval', mock)

    render(TheHeadline)

    expect(mock).toHaveBeenCalled()
  })

  it('swaps action verb after interval', async () => {
    render(TheHeadline)
    vi.advanceTimersToNextTimer()

    await nextTick()
    const actionPhrase = screen.getByRole('heading', {
      name: /create for everyone/i
    })
    expect(actionPhrase).toBeInTheDocument()
  })
})
