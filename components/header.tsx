
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'
import Search from './search'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useIntl } from "react-intl";
import Image from 'next/image'


export default function Header() {
  const router = useRouter();
  const {locale} = router
  const intl = useIntl()

  return (
    <header className="bg-accent-2 sticky top-0  z-[20]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 gap-4 h-24" aria-label="Global">
        <div className="flex min-w-[45px] lg:min-w-[120px] justify-start mr-2">
          <Link locale={locale} href="/" className="flex">
            <span className="sr-only">Your Company</span>
            <Image width={45} height={44} className="" src="/img/icon.png" alt="Icono ICYE Colombia" />
            <Image width={66} height={44} className="hidden lg:flex ml-2" src="/img/logo.png" alt="Logo ICYE Colombia" />
          </Link>
        </div>

    
        <div className="flex flex-row overflow-x-auto">
              
              <Link locale={locale} href='/about'className="whitespace-nowrap  block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_1"})}</Link>
              <Link locale={locale} href='/projects'className="  block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_2"})}</Link>
              <Link locale={locale} href='/blog'className="  block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_3"})}</Link>
              <Link locale={locale} href='/calendar'className="  block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_4"})}</Link>
              <Link locale={locale} href='/contact'className="  block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_8"})}</Link>
          
        </div>
     
      
        
        <div className="w-[50px] lg:w-[248px] flex justify-end items-center">
          <div className="mr-4 flex items-center text-accent-1">
            <Search/>
          </div>
          {locale === "en" ?
            (<Link locale="es" href="#" className="flex font-semibold  text-acent-1">ES</Link>)
            :
            (<Link locale="en" href="#" className="flex font-semibold text-acent-1">EN</Link>)
          }
       
          <Link locale={locale} href="#" title="Como participar" className="lg:ml-4 fixed top-auto bottom-0 left-0 rounded-[0px] lg:rounded-[40px] w-full lg:static text-center  lg:w-auto bg-accent-1 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            ¿Como participar?
          </Link>  
        </div>
      </nav>

  
    </header>
  )
}
