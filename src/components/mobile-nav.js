import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import {
  HomeIcon,
  NewspaperIcon,
  SpeakerphoneIcon,
} from '@heroicons/react/outline'
const MobileNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-green-500 dark:bg-green-600 z-50 sm:hidden">
      <div className="grid grid-cols-3 border-t border-green-400 dark:border-green-700">
        <div className="inline-flex items-center justify-center border-r border-green-600 dark:border-green-700">
          <Link href="/">
            <a className="px-2 py-6">
              <HomeIcon className="w-6 h-6 text-green-700 dark:text-green-200" />
            </a>
          </Link>
        </div>
        <div className="inline-flex items-center justify-center border-r border-green-600 dark:border-green-700">
          <Menu as="div" className="relative inline-block">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-300 rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <NewspaperIcon className="w-6 h-6 text-green-700 dark:text-green-200" />
              </Menu.Button>
            </div>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute bottom-[68px] right-[-80px] w-56 mt-2 origin-top-right bg-white divide-y divide-green-100 rounded-md shadow-lg ring-1 ring-green-500 ring-opacity-5 focus:outline-none dark:bg-green-700">
                <div className="px-1 py-1">
                    <div className="text-xs uppercase text-green-500 px-2 py-1 border-b border-green-100 dark:text-green-400">Category</div>
                  <Menu.Item>
                    <Link href="/blog/">
                      <a className="flex rounded-md items-center w-full px-2 py-2 text-sm text-green-900 dark:text-green-50">
                        TailwindCSS
                      </a>
                    </Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Link href="/blog/">
                      <a className="flex rounded-md items-center w-full px-2 py-2 text-sm text-green-900 dark:text-green-50">
                        NextJS
                      </a>
                    </Link>
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    <Link href="/blog/">
                      <a className="flex rounded-md items-center w-full px-2 py-2 text-sm text-green-700 dark:text-green-100 uppercase">
                        Blog
                      </a>
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="inline-flex items-center justify-center">
          <Link href="/blog/">
            <a className="px-2 py-6">
              <SpeakerphoneIcon className="w-6 h-6 text-green-700 dark:text-green-200" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
