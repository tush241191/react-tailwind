const Sidebar = () => {
  return(
    <div className='hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100'>
        <div className='flex items-center flex-shrink-0 px-6'>
          <img
            className='h-8 w-auto'
            src='https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg'
            alt='Workflow'
          />
        </div>
        <div className='mt-6 h-0 flex-1 flex flex-col overflow-y-auto'>
          <div className='px-3 relative inline-block text-left'>
            <div>
              <button
                type='button'
                className='group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500'
                id='options-menu-button'
                aria-expanded='false'
                aria-haspopup='true'
              >
                <span className='flex w-full justify-between items-center'>
                  <span className='flex min-w-0 items-center justify-between space-x-3'>
                    <img
                      className='w-10 h-10 bg-gray-300 rounded-full flex-shrink-0'
                      src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80'
                      alt=''
                    />
                    <span className='flex-1 flex flex-col min-w-0'>
                      <span className='text-gray-900 text-sm font-medium truncate'>
                        Jessy Schwarz
                      </span>
                      <span className='text-gray-500 text-sm truncate'>
                        @jessyschwarz
                      </span>
                    </span>
                  </span>
                  <svg
                    className='flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          {/* <!-- Sidebar Search --> */}
          <div className='px-3 mt-5'>
            <label for='search' className='sr-only'>
              Search
            </label>
            <div className='mt-1 relative rounded-md shadow-sm'>
              <div
                className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'
                aria-hidden='true'
              >
                <svg
                  className='mr-3 h-4 w-4 text-gray-400'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fill-rule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clip-rule='evenodd'
                  />
                </svg>
              </div>
              <input
                type='text'
                name='search'
                id='search'
                className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md'
                placeholder='Search'
              />
            </div>
          </div>
          {/* <!-- Navigation --> */}
          <nav className='px-3 mt-6'>
            <div className='space-y-1'>
              <a
                href='/'
                className='bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                aria-current='page'
              >
                <svg
                  className='text-gray-500 mr-3 flex-shrink-0 h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='2'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  />
                </svg>
                Home
              </a>
              <a
                href='/task'
                className='text-gray-700 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md'
              >
                <svg
                  className='text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='2'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M4 6h16M4 10h16M4 14h16M4 18h16'
                  />
                </svg>
                My tasks
              </a>
            </div>
          </nav>
        </div>
      </div>
  )
}

export default Sidebar