import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'

describe('MainNav', () => {
  const renderMainNav = () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }

  it('displays company name', () => {
    renderMainNav()
    const companyName = screen.getByText('Legend careers')
    expect(companyName).toBeInTheDocument()
  })

  it('menu items for navigation', () => {
    renderMainNav()
    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent)
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at Legend corp',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })
  describe('when user logs in', () => {
    it('displays user profile image', async () => {
      renderMainNav()

      let profileImage = screen.queryByRole('img', {
        name: /profile image/i
      })

      expect(profileImage).not.toBeInTheDocument()

      const loginBotton = screen.getByRole('button', {
        name: /sign in/i
      })
      await userEvent.click(loginBotton)

      profileImage = screen.queryByRole('img', {
        name: /profile image/i
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
