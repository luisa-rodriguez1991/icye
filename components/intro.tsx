import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from './button'
import { useIntl } from 'react-intl'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
  { name: 'Log in', href: '#' },
]

export default function Intro() {
  const intl = useIntl()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
              <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <h1 className="text-4xl font-bold tracking-tight text-accent-1 sm:text-6xl">
                      {intl.formatMessage({id:"intro_title"})}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-800">
                        {intl.formatMessage({id:"intro_paragraph"})}
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                    <Button title={intl.formatMessage({id:"header_button"})} link="#" text= {intl.formatMessage({id:"header_button"})}/>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/img/Background.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
