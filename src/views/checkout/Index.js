import TheaterHeader from "../../components/Navbars/TheaterHeader"

const Checkout = () =>{

  return(
    <>
      <TheaterHeader/>
      <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="mt-10 grid grid-cols-8 gap-4">
          <div className="col-span-5 rounded-md shadow-md">
            <div class="flex justify-between items-start text-sm font-medium bg-blue-50 border-blue-500 text-blue-700 hover:bg-blue-50 hover:text-blue-700 group border-l-4 px-3 py-2" aria-current="page">
                <span class="flex items-start">
                    <h2 class="text-base font-medium md:text-lg">
                        Pickup from Box-Office
                    </h2>
                </span>
            </div> 
            <div className="px-3 py-2 space-y-4">
              <div className="font-medium text-sm md:text-base">Pickup Information</div>
              <div className="text-xs">Pickup your tickets from the following address on the specified date & time:</div>
              <div className="text-xs font-medium leading-relaxed">Vishnudas Bhave:
                Juhu-Vashi Road,Chhatrapati Shivaji Maharaj Chowk,Sector-16A, Vashi Kopar Khairane Rd, Opposite वाशी बस डिपो, Juhu Nagar, Sector-16, Vashi, Navi Mumbai, Maharashtra 400703</div>
            </div> 
          </div>
          <div className="col-span-3 rounded-md shadow-md">
            <div className="px-3 py-2">
              <div className="p-2 rounded border border-gray-300 divide-y">
                <div className="flex items-center justify-between pb-2">
                  <div>
                    <p className="text-sm font-medium">Eka Lagnachi Pudhchi Gosht</p>
                    <p className="text-xs text-gray-400">2 Tickets</p>
                  </div>
                  <p>₹800</p>
                </div>
                <div className="text-sm text-gray-700 flex space-x-2 py-2">
                  <p>Row:</p>
                  <p>A1,A2</p>
                </div>
                <div className="text-sm text-gray-700 py-2 space-y-1">
                  <div className="flex justify-between">
                    <p>Sub-total:</p>
                    <p>₹800</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Booking Fee:</p>
                    <p>₹0</p>
                  </div>
                </div>
                <div className="text-base text-gray-700 pt-2">
                  <div className="flex justify-between">
                    <p>Total Amount:</p>
                    <p>₹800</p>
                  </div>
                </div>
              </div>
              <div className="w-full py-2">
                <button type="button" class="w-full inline-flex items-center justify-center px-4 py-1.5 border border-transparent text-base font-light rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Proceed to Pay</button>
              </div>
            </div>  
          </div>
        </div>
      </main>
    </>
  )
}

export default Checkout