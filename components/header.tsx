import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useIntl } from "react-intl";
import Image from 'next/image'


export default function Header({onOpenForm}) {
  const router = useRouter();
  const {locale} = router
  const intl = useIntl()
  return (
    <div className="bg-white sticky top-0 z-40">
      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 px-4 pb-14 sm:px-0 sm:pb-0">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}

              <div className="flex flex-1 min-w-[45px] lg:min-w-[120px] justify-start">
           <Link locale={locale} href="/" className="flex">             <span className="sr-only">Your Company</span>
             <Image width={45} height={44} className="" src="/img/icon.png" alt="Icono ICYE Colombia" />
             <Image width={66} height={44} className="hidden lg:flex ml-2" src="/img/logo.png" alt="Logo ICYE Colombia" />
           </Link>
         </div>
              {/* <div className="flex flex-1">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div> */}

              {/* Flyout menus */}
              
              <div className="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
                <div className="flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0">
                <div  className="flex">
                        <div className='flex items-center'>
                          <div className="relative flex items-center ">


      
                          <Link locale={locale} href='/about'className="whitespace-nowrap  block rounded-lg px-3 py-2 text-md font-semibold text-gray-700 hover:text-gray-900">{intl.formatMessage({id:"header_item_1"})}</Link>
                          <Link locale={locale} href='/projects'className=" whitespace-nowrap  block rounded-lg px-3 py-2 text-md font-semibold text-gray-700 hover:text-gray-900">{intl.formatMessage({id:"header_item_2"})}</Link>
                          <Link locale={locale} href='/blog'className="whitespace-nowrap   block rounded-lg px-3 py-2 text-md font-semibold text-gray-700 hover:text-gray-900">{intl.formatMessage({id:"header_item_3"})}</Link>
                          <Link locale={locale} href='/events'className=" whitespace-nowrap  block rounded-lg px-3 py-2 text-md font-semibold text-gray-700 hover:text-gray-900">{intl.formatMessage({id:"header_item_4"})}</Link>
                          <Link locale={locale} href='/contact'className="whitespace-nowrap   block rounded-lg px-3 py-2 text-md font-semibold text-gray-700 hover:text-gray-900">{intl.formatMessage({id:"header_item_8"})}</Link>
          


                         
                          </div>

                       
                        </div>
                        
                    </div>

                  
                </div>
              </div>

              <div className="flex flex-1 items-center justify-end">
                {/* Search */}
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </a>

                {/* Cart */}
                <div className="ml-4 flow-root ">
                {locale === "en" ?
                    (<Link locale="es" href="#" className="flex font-semibold  text-acent-1">Español</Link>)
                    :
                    (<Link locale="en" href="#" className="flex font-semibold text-acent-1">English</Link>)
                  }
                </div>

                  <Link locale={locale} href="#" onClick={()=>onOpenForm(true)} title="Como participar" className="z-[999999] lg:z-[0] lg:ml-7 fixed top-auto bottom-0 left-0 rounded-[0px] lg:rounded-[40px] w-full lg:static text-center lg:w-auto  lg:min-w-[147px] bg-accent-1 p-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {intl.formatMessage({id:"header_button"})}
                  </Link> 
              






              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

// import { useState } from 'react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { Dialog } from '@headlessui/react'
// import Search from './search'
// import { useRouter } from 'next/router'
// import Link from 'next/link'
// import { useIntl } from "react-intl";
// import Image from 'next/image'


// export default function Header() {
//   const router = useRouter();
//   const {locale} = router
//   const intl = useIntl()

//   return (
//     <header className="bg-accent-2 sticky top-0  z-[20]">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 gap-3 h-20" aria-label="Global">
//         

    
//         <div className="flex flex-row overflow-x-auto">
              
//             
          
//         </div>
     
      
        
//         <div className="w-[50px] lg:w-[248px] flex justify-end items-center">
//           <div className="mr-4 flex items-center text-accent-1">
//             <Search/>
//           </div>
//           
       
//          
//         </div>
//       </nav>

  
//     </header>
//   )
// }
