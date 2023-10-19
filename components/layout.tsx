
import Footer from './footer'
import Meta from './meta'
import Header from './header'
import SubHeader from './sub-header'

export default function Layout({ children }) {
  return (
    <>
        <Meta />
            <div className="min-h-screen">
                <Header/>
                <SubHeader/> 
                <main>{children}</main>
            </div>
            <Footer/>  
    </>
  )
}