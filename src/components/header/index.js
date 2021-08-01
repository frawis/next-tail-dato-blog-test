import Link from 'next/link'
import Container from '@/components/container'
import ThemeSwitcher from '../theme-switcher'

const navigation = [
  { name: 'Blog', href: '/blog/' },
  { name: 'Projects', href: '/projects/' },
]

const Header = () => {
  return (
    <header className="bg-green-600">
      <Container>
        <div className="w-full py-6 flex items-center border-b border-green-500 lg:border-none">
          <div className="flex items-center justify-between w-full">
            <Link href="/">
              <a>
                <span className="sr-only">BlackNickr</span>
                <span className="font-display font-extrabold text-green-100 text-2xl">
                  Black
                </span>
                <span className="font-display text-green-200 text-2xl">
                  Nickr
                </span>
              </a>
            </Link>
            <div className="flex items-center w-full justify-end lg:justify-between">
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <a className="font-display text-base font-medium text-white hover:text-green-50">
                      {link.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div>
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
