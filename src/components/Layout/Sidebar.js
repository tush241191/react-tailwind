import { Disclosure } from '@headlessui/react'
import { HomeIcon, MenuIcon, TableIcon, BellIcon, ChartPieIcon, LibraryIcon, SupportIcon, CollectionIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, current: true, href: '/' },
  {
    name: 'Typography',
    icon: MenuIcon,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Tables',
    icon: TableIcon,
    current: false,
    href: '/Tables',
  },
  {
    name: 'Notifications',
    icon: BellIcon,
    current: false,
    href: '/task',
  },
  {
    name: 'Charts',
    icon: ChartPieIcon,
    current: false,
    href: '/Chart',
  },
  {
    name: 'Library',
    icon: LibraryIcon,
    current: false,
    href: '/task',
  },
  {
    name: 'Support',
    icon: SupportIcon,
    current: false,
    href: '/task',
  },
  {
    name: 'Faqs',
    icon: CollectionIcon,
    current: false,
    href: '/task',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Sidebar = () => {
  return(
    <div className='hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-0 lg:pb-4 lg:bg-gray-100'>
        <div className="bg-indigo-500">
          <div className='flex justify-center items-center flex-shrink-0 px-6 h-16 bg-indigo-500 text-white'>
            <span className="text-center ">Admin Panel</span>
          </div>  
        </div>
        
        <div className='mt-6 lg:mt-0 h-0 flex-1 flex flex-col overflow-y-auto bg-indigo-500'>
          <nav className="flex-1 px-2 space-y-1 " aria-label="Sidebar">
          {navigation.map((item) =>
            !item.children ? (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-indigo-100 text-gray-900'
                      : 'bg-transparent text-gray-50 hover:bg-indigo-100 hover:text-gray-900',
                    'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current ? 'text-gray-900' : 'text-gray-50 group-hover:text-gray-900',
                      'mr-3 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              </div>
            ) : (
              <Disclosure as="div" key={item.name} className="space-y-1">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        item.current
                          ? 'bg-indigo-100 text-gray-900'
                          : 'bg-transparent text-gray-50 hover:bg-indigo-100 hover:text-gray-900',
                        'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                      )}
                    >
                      <item.icon
                        className="mr-3 flex-shrink-0 h-6 w-6 text-gray-50 group-hover:text-gray-900"
                        aria-hidden="true"
                      />
                      <span className="flex-1">{item.name}</span>
                      <svg
                        className={classNames(
                          open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                          'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-900 transition-colors ease-in-out duration-150'
                        )}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1">
                      {item.children.map((subItem) => (
                        <Disclosure.Button
                          key={subItem.name}
                          as="a"
                          href={subItem.href}
                          className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-50 rounded-md hover:text-gray-900 hover:bg-indigo-100"
                        >
                          {subItem.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )
          )}
        </nav>

        </div>
      </div>
  )
}

export default Sidebar