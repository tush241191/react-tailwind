const Header = (props) => {
  return (
    <div className='sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden'>
      <button
        onClick={props.handleClick}
        type='button'
        className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden'
      >
        <span className='sr-only'>Open sidebar</span>
        <svg
          className='h-6 w-6'
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
            d='M4 6h16M4 12h8m-8 6h16'
          />
        </svg>
      </button>
      <div className='flex-1 flex justify-between px-4 sm:px-6 lg:px-8'>
        <div className='flex-1 flex'>
          <form className='w-full flex md:ml-0' action='#' method='GET'>
            <label for='search-field' className='sr-only'>
              Search
            </label>
            <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
              <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
                <svg
                  className='h-5 w-5'
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
                id='search-field'
                name='search-field'
                className='block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm'
                placeholder='Search'
                type='search'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
