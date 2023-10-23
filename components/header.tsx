
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const intl = useIntl()

  return (
    <header className="bg-accent-2 sticky top-0 lg:static z-[20]">
      <nav className="mx-auto flex max-w-7xl items-center justify-around p-5 lg:px-8" aria-label="Global">
        <div className="flex flex-1 min-w-[55px] justify-start">
          <Link locale={locale} href="/" className="-m-1.5 p-1.5 flex">
            <span className="sr-only">Your Company</span>
            <Image width={45} height={44} className="" src="/img/icon.png" alt="Icono ICYE Colombia" />
            <Image width={66} height={44} className="hidden lg:flex ml-2" src="/img/logo.png" alt="Logo ICYE Colombia" />
          </Link>
        </div>
      
        <div className=" flex items-center text-white">
         <Search/>
        </div>
        <div className=" flex flex-1 justify-end">
          {locale === "en" ?
            (<Link locale="es" href="#" className="hidden lg:flex text-sm font-semibold leading-6 text-acent-1">ES</Link>)
            :
            (<Link locale="en" href="#" className="hidden lg:flex text-sm font-semibold leading-6 text-acent-1">EN</Link>)
          }
        
          <div className="flex lg:hidden place-content-center min-w-[55px]">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-accent-1"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-[30] w-full overflow-y-auto bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-accent-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Link locale={locale} href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image width={45} height={44}
                src="/img/icon.png"
                alt="Icono ICYE Colombia"
              />
            </Link>
            <div className="flex flex-1 justify-end">
            {locale === "en" ?
            (<Link locale="es" href="#" className="text-sm font-semibold leading-6 text-accent-1">ES</Link>)
            :
            (<Link locale="en" href="#" className="text-sm font-semibold leading-6 text-accent-1">EN</Link>)
          }
            </div>
          </div>
          <div className="mt-6 space-y-2">
              <Link locale={locale} href='/about'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_1"})}</Link>
              <Link locale={locale} href='/projects'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_2"})}</Link>
              <Link locale={locale} href='/blog'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_3"})}</Link>
              <Link locale={locale} href='/calendar'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_4"})}</Link>
              <Link locale={locale} href='/pay'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_5"})}</Link>
              <Link locale={locale} href='/host-families'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_7"})}</Link>
              <Link locale={locale} href='/sponsors'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_6"})}</Link>
              <Link locale={locale} href='/contact'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_8"})}</Link>

          </div>
        </Dialog.Panel>
      </Dialog>
  
    </header>
  )
}
