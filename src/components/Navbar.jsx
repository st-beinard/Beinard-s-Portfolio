import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean)

      const scrollPosition = window.scrollY + 120

      let currentSection = 'home'

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const handleThemeToggle = () => {
    setIsDarkMode((current) => {
        const newMode = !current

        if (newMode) {
        document.documentElement.classList.add('dark')
        } else {
        document.documentElement.classList.remove('dark')
        }

        return newMode
        })
    }

  const handleMenuToggle = () => {
    setIsMenuOpen((current) => !current)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-3"
          onClick={handleLinkClick}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3F6F68] text-sm font-bold text-white shadow-sm transition-transform duration-300 hover:scale-105">
            BR
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`group relative text-sm font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              {link.name}

              <span
                className={`absolute -bottom-2 left-0 h-px bg-slate-900 transition-all duration-300 dark:bg-white ${
                  activeSection === link.href.substring(1)
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}

          <button
            type="button"
            onClick={handleThemeToggle}
            aria-label="Toggle dark mode"
            className="rounded-full border border-slate-200 p-2 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {isDarkMode ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={handleThemeToggle}
            aria-label="Toggle dark mode"
            className="rounded-full border border-slate-200 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-200"
          >
            {isDarkMode ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          <button
            type="button"
            onClick={handleMenuToggle}
            aria-label="Toggle navigation menu"
            className="rounded-lg border border-slate-200 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-200"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-white'
                }`}
              >
                {link.name}

                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-1 left-3 right-3 h-px bg-slate-900 dark:bg-white" />
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar