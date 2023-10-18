import Link from "next/link";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";



export default function SubHeader() {
  const intl = useIntl()
  const {locale} = useRouter()
  return (
    <header className="bg-white  hidden lg:flex lg:sticky lg:top-0">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
              <Link locale={locale} href='/about'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_1"})}</Link>
              <Link locale={locale} href='/projects'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_2"})}</Link>
              <Link locale={locale} href='/news'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_3"})}</Link>
              <Link locale={locale} href='/events'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_4"})}</Link>
              <Link locale={locale} href='/pay'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_5"})}</Link>
              <Link locale={locale} href='/sponsors'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_6"})}</Link>
              <Link locale={locale} href='/hostFamilies'className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{intl.formatMessage({id:"header_item_7"})}</Link>
          </div>
          
        </div>

      </nav>
     
    </header>
  )
}
