import Container from '@/components/container'

const Footer = () => {
  return (
    <footer className="bg-green-900 dark:bg-green-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <p className="text-green-100 hover:text-green-200">
            <span className="sr-only">Text</span>
            Text
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-green-100">
            &copy; 2021 BlackNickr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
