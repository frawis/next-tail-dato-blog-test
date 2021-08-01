import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { MoonIcon, LightBulbIcon } from '@heroicons/react/outline'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [enabled, setEnabled] = useState(false)

  const toogleTheme = () => {
    setEnabled(!enabled)
    if (enabled && theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  useEffect(() => {
    setMounted(true)
    if (theme === 'light') {
      setEnabled(false)
    } else {
      setEnabled(true)
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      <Switch
        checked={enabled}
        onChange={toogleTheme}
        className={classNames(
          enabled ? 'bg-green-500' : 'bg-green-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400'
        )}
      >
        <span className="sr-only">Use setting</span>
        <span
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-green-100 shadow transform ring-0 transition ease-in-out duration-200'
          )}
        >
          <span
            className={classNames(
              enabled
                ? 'opacity-0 ease-out duration-100'
                : 'opacity-100 ease-in duration-200',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
          >
            <LightBulbIcon className="h-3 w-3 text-green-400" />
          </span>
          <span
            className={classNames(
              enabled
                ? 'opacity-100 ease-in duration-200'
                : 'opacity-0 ease-out duration-100',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
          >
            <MoonIcon className="h-3 w-3 text-green-600" />
          </span>
        </span>
      </Switch>
    </>
  )
}

export default ThemeSwitcher
