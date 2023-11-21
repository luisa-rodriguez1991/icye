
import Footer from './footer'
import Meta from './meta'
import Header from './header'
import Form from './form'
import { useState } from 'react'

export default function Layout({ children, onOpenForm, openForm }:any) {

  return (
    <>
        <Meta />
            <div className="min-h-screen">
                <Form openIndicator={openForm} onSetOpen={onOpenForm}/>
                <Header onOpenForm={onOpenForm}/>
                <main>{children}</main>
            </div>
            <Footer/>  
    </>
  )
}