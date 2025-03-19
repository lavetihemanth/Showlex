import React from 'react'

const ShimmerHome = () => {
  return (
    <section className="shimmer-container flex flex-col justify-normal max-w-full md:max-w-[1351px] mx-auto">
        <div className="w-full pt-[18%] xs:pt-[15%] pl-6 sm:pl-10 md:pl-14 flex flex-col">
          <div className="mb-7 w-1/2 md:w-2/5 h-6 sm:h-8 md:h-12 bg-gray-300 animate-pulse rounded-2xl md:rounded-3xl"></div>
          <div className='lg:flex lg:flex-col mb-4 hidden'>
            {Array.from({length: 5}).map((_, index) => {
              return <div className="mb-3 w-2/5 h-5 bg-gray-300 animate-pulse rounded-xl"></div>
            })}
          </div>
          <div className='flex justify-start'>
            {Array.from({length: 2}).map((_, index) => {
              return <div className="mr-2 w-[50px] xs:w-[100px] h-4 sm:h-6 md:h-8 bg-gray-300 animate-pulse rounded-xl md:rounded-2xl"></div>
            })}
          </div>
        </div>
        <div className="mt-16 flex flex-col">
          <div className="px-3 mb-3">
            <div className="w-[100px] md:w-[200px] h-4 md:h-6  bg-gray-300 animate-pulse rounded-xl"></div>
          </div>
          <div className="mx-auto">
            <div className="flex flex-wrap justify-evenly gap-x-1 mx-auto px-2">
              {Array.from({length: 20}).map((_, index) => {
                return <div className="mb-3 w-44 h-64 bg-gray-300 animate-pulse"></div>
              })}
            </div>
          </div>
        </div>
    </section>
  )
}

export default ShimmerHome