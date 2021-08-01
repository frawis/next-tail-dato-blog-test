import Header from "@/components/header"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"

const Layout = ({ preview, children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <MobileNav />
    </>
  )
}

export default Layout
