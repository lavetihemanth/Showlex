import React from 'react'

const ShimmerSingleShow = () => {
  return (
    <section className="shimmer-container flex justify-center max-w-full md:max-w-[1351px] min-h-[656px] mx-auto">
        <div className="w-full">
          <div className="w-full pt-[32%] xs:pt-[28%] md:pt-[22%] lg:pt-[18%] xl:pt-[16%] px-9 flex flex-col items-center">
            <div className="w-2/3 xs:w-[200px] md:w-[250px] h-7 md:h-8 mb-6 bg-gray-300 animate-pulse rounded-xl md:rounded-2xl"></div>
            {Array.from({length: 3}).map((_, index) => {
              return <div className="w-11/12 lg:w-3/4 h-4 mb-6 bg-gray-300 animate-pulse rounded-xl"></div>
            })}
            <div className="w-[180px] md:w-[300px] h-4 mb-4 bg-gray-300 animate-pulse rounded-xl"></div>
            <div className="w-[150px] md:w-[250px] h-4 mb-4 bg-gray-300 animate-pulse rounded-xl"></div>
          </div>
        </div>
    </section>
  )
}

export default ShimmerSingleShow