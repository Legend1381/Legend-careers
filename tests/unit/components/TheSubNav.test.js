import { render, screen } from '@testing-library/vue'
import TheSubnav from '@/components/TheSubNav.vue'
import { describe, expect, it } from 'vitest'

describe('TheSubnav', () => {
  describe('when user is on jobs page', () => {
    it('displays job count', () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: true
          }
        }
      })

      const jobCount = screen.getByText('1234')
      expect(jobCount).toBeInTheDocument
    })
  })

  describe('when user is not on jobs page', () => {
    it('does NOT displays job count', () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: false
          }
        }
      })

      const jobCount = screen.queryByText

      expect(jobCount).not.toBeInTheDocument
    })
  })
})
