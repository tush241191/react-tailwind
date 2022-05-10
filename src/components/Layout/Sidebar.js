const Sidebar = () => {
  return(
    <div className='hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-0 lg:pb-4 lg:bg-gray-100'>
        <div class="bg-indigo-500">
          <div className='flex justify-center items-center flex-shrink-0 px-6 h-16 bg-indigo-500 text-white'>
            <span class="text-center ">Admin Panel</span>
          </div>  
        </div>
        
        <div className='mt-6 lg:mt-0 h-0 flex-1 flex flex-col overflow-y-auto bg-indigo-500'>
          
          {/* <!-- Navigation --> */}
          <nav className='px-3 mt-6'>
            <div className='space-y-1'>
              <ul className="flex flex-col lg:flex-column list-none lg:ml-auto">
                <li className="nav-item">
                  <a
                    href='/'
                    className='text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    aria-current='page'
                  >
                    <svg
                      className='text-gray-500 mr-3 flex-shrink-0 h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='white'
                      aria-hidden='true'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                      />
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href='/task'
                    className='text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  >
                    <svg
                      className='text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='white'
                      aria-hidden='true'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M4 6h16M4 10h16M4 14h16M4 18h16'
                      />
                    </svg>
                    Typography
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href='/Tables'
                    className='text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  >
                    <svg
                      className='text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='white'
                      aria-hidden='true'
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Tables
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href='/task'
                    className='text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  >
                    <svg
                      className='text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='white'
                      aria-hidden='true'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                      />
                    </svg>
                    Notifications
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href='/Chart'
                    className='text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  >
                    <svg
                      className='text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='white'
                      aria-hidden='true'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2'
                      />
                    </svg>
                    Charts
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href='/task'
                    className='text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  >
                    <svg
                      className='text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='white'
                      aria-hidden='true'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
                      />
                    </svg>
                    Library
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href='/task'
                    className='text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  >
                    <svg
                      className='text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='white'
                      aria-hidden='true'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
                      />
                    </svg>
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href='/task'
                    className='text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  >
                    <svg
                      className='text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='white'
                      aria-hidden='true'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                      />
                    </svg>
                    Faqs
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
  )
}

export default Sidebar