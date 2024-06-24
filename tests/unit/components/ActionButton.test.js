import { render, screen } from '@testing-library/vue'
import ActionButton from '@/components/ActionButton.vue'
import { describe, expect, it } from 'vitest'

describe('ActionButton', () => {
  it('renders text', () => {
    render(ActionButton, {
      props: {
        text: 'click me',
        type: 'primary'
      }
    })

    const button = screen.getByRole('button', {
      name: /click me/i
    })

    expect(button).toBeInTheDocument()
  })

  it('applies one of severals styles', () => {
    render(ActionButton, {
      props: {
        text: 'click me',
        type: 'primary'
      }
    })

    const button = screen.getByRole('button', {
      name: /click me/i
    })

    expect(button).toHaveClass('primary')
  })
})
