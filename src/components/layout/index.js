import Header from "@/components/header"

const Layout = ({ preview, children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
      </div>
    </>
  )
}

export default Layout