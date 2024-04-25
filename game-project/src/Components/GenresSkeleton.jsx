import React from 'react'

export const GenresSkeleton = () => {
    const arr = [1,2,3,4,5,6,7,8,9,0]
  return (
    <div className=" hidden lg:block max-w-sm  border-gray-200 shadow animate-pulse  ">
      <h2 className="text-3xl bold font-bold dark:text-white m-2">Genres</h2>
      <ul className="flex flex-col gap-2">
        {arr.map((item, index) => (
          <div key={item} className="flex items-center justify-center h-12 mb-4 bg-gray-300 rounded dark:bg-[#9b9b9b41]">
          <svg
            className="w-12 h-12 text-gray-200 dark:text-gray-600 mx-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-[#9b9b9b41] w-48 "></div>
            {/* <div className="h-2 bg-gray-200 rounded-full dark:bg-[#9b9b9b41] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-[#9b9b9b41] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-[#9b9b9b41]"></div> */}
          
            <span className="sr-only">Loading...</span>
        </div>
        ))}
      </ul>
    </div>
  )
}
