export default function Error() {
    return (
      <div className="bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8 dark:bg-gray-800">
        <div className="max-w-max mx-auto">
          <main className="sm:flex">
            <p className="text-4xl font-extrabold text-green-600 sm:text-5xl dark:text-green-500">404</p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="font-display text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl dark:text-gray-100">Page not found</h1>
                <p className="mt-1 text-base text-gray-500 dark:text-gray-300">Please check the URL in the address bar and try again.</p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 dark:bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Go back home
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }
  