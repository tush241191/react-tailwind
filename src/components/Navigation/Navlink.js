export const Navlink = ({menu}) => {
  return(
    <>
      <button type="button" className="text-white hover:text-gray-100 group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" aria-controls="sub-menu-1" aria-expanded="false">
        <svg className="mr-3 flex-shrink-0 h-6 w-6 text-white group-hover:text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <span className="flex-1"> Dropdown menu </span>
        <svg className="text-white ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-100 transition-colors ease-in-out duration-150" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
        </svg>
      </button>
      <div className="space-y-1" id="sub-menu-1">
        <a href="#" className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-100 rounded-md hover:text-gray-200 hover:bg-indigo-600"> Overview </a>

        <a href="#" className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-100 rounded-md hover:text-gray-200 hover:bg-indigo-600"> Members </a>

        <a href="#" className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-100 rounded-md hover:text-gray-200 hover:bg-indigo-600"> Calendar </a>

        <a href="#" className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-100 rounded-md hover:text-gray-200 hover:bg-indigo-600"> Settings </a>
      </div>
    </>
  )
}