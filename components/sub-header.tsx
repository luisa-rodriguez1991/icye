import Link from "next/link";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import Button from "./button";



export default function SubHeader() {
  const intl = useIntl()
  const {locale} = useRouter()
  return (
    <header className="bg-white shadow-md hidden lg:flex lg:sticky lg:top-0 z-[20]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
              <Link locale={locale} href='/about'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_1"})}</Link>
              <Link locale={locale} href='/projects'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_2"})}</Link>
              <Link locale={locale} href='/blog'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_3"})}</Link>
              <Link locale={locale} href='/calendar'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_4"})}</Link>
              <Link locale={locale} href='/pay'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_5"})}</Link>
              <Link locale={locale} href='/host-families'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_7"})}</Link>
              <Link locale={locale} href='/sponsors'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_6"})}</Link>
              <Link locale={locale} href='/contact'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_8"})}</Link>
              <Link locale={locale} href="#" title="Como participar" className="rounded-[40px] bg-accent-1 px-6 pt-3 pb-0 text-sm font-semibold text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
     ¿Como participar?
    </Link>
          
          </div>
          
        </div>

      </nav>
     
    </header>
  )
}
