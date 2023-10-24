
import Footer from './footer'
import Meta from './meta'
import Header from './header'

export default function Layout({ children }:any) {
  return (
    <>
        <Meta />
            <div className="min-h-screen">
                <Header/>
                <main>{children}</main>
            </div>
            <Footer/>  
    </>
  )
}