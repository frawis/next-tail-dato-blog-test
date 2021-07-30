const Container = ({ children }) => {
  return (
    <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
      {children}
    </div>
  )
}

export default Container
