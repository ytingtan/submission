import React from 'react'

const Home = () => {
  return (
    <div>
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">This is a</span>{' '}
                <span className="block text-indigo-600 xl:inline">Shopping Website.</span>
              </h1>
              <p className="content-center mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl ">
               Made with ReactJS, TailwindCSS and FakeStore API.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="/products"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    See Products
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://github.com/ytingtan"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    View Repo
                  </a>
                </div>
              </div>
            </div>
          </main>
    </div>
  )
}

export default Home