const Header = (props) => {
  return (
    <div className='sticky top-0 z-10 flex-shrink-0 flex h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... border-b border-gray-200 '>
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
          stroke='white'
          aria-hidden='true'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M4 6h16M4 12h8m-8 6h16'
          />
        </svg>
      </button>
      
    </div>
  );
};

export default Header;
