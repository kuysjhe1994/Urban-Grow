import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HeroSection from '../HeroSection'

describe('HeroSection', () => {
  it('renders title and CTA buttons and navigates on click', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    render(<HeroSection onNavigate={onNavigate} />)

    expect(screen.getByRole('heading', { name: /UrbanBloom AR/i })).toBeInTheDocument()
    const scanButton = screen.getByRole('button', { name: /Start AR Scanning/i })
    const exploreButton = screen.getByRole('button', { name: /Explore Plants/i })
    expect(scanButton).toBeInTheDocument()
    expect(exploreButton).toBeInTheDocument()

    await user.click(scanButton)
    expect(onNavigate).toHaveBeenCalledWith('scanner')
  })
})

