
import Footer from './footer'
import Meta from './meta'
import Header from './header'
import Form from './form'
import { useState } from 'react'

export default function Layout({ children }:any) {
  const [open, setOpen] = useState(false)

  return (
    <>
        <Meta />
            <div className="min-h-screen">
                <Form openIndicator={open} onSetOpen={setOpen}/>
                <Header onOpenForm={setOpen}/>
                <main>{children}</main>
            </div>
            <Footer/>  
    </>
  )
}