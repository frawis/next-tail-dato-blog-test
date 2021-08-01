import Header from "@/components/header"
import Footer from "@/components/Footer"

const Layout = ({ preview, children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
