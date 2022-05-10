import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () =>{
    console.log('clicked');
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className='min-h-full'>
      {isMenuOpen && (
        <div
          className='relative z-40 lg:hidden'
          role='dialog'
          aria-modal='true'
        >
          <div className='fixed inset-0 bg-gray-600 bg-opacity-75'></div>
          <div className='fixed inset-0 flex z-40'>
            <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white'>
              <div className='absolute top-0 right-0 -mr-12 pt-2'>
                <button
                  onClick={toggleMenu}
                  type='button'
                  className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                >
                  <span className='sr-only'>Close sidebar</span>
                  <svg
                    className='h-6 w-6 text-white'
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
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <div className='flex-shrink-0 flex items-center px-4'>
                <span>Admin Panel</span>
              </div>
              <div className='mt-5 flex-1 h-0 overflow-y-auto'>
                <nav className='px-2'>
                  <div className='space-y-1'>
                    <a
                      href='/'
                      className='bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md'
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
                      className='text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md'
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
            <div className='flex-shrink-0 w-14' aria-hidden='true'></div>
          </div>
        </div>
      )}
      {/* <!-- Static sidebar for desktop --> */}
      <Sidebar />
      {/* <!-- Main column --> */}
      <div className='lg:pl-64 flex flex-col'>
        {/* <!-- Search header --> */}
        <Header handleClick={toggleMenu} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
