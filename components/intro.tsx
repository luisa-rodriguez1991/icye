import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from './button'
import { useIntl } from 'react-intl'
import Head from 'next/head'


export default function Intro({text,title}:any) {
  const intl = useIntl()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <Head>
        <script type='text/javascript' src='/bolas.js'/>
        <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script> 


      </Head>
             <div className="absolute w-full" id="particles-js"></div>  <div className="count-particles"> <span className="js-count-particles"></span>  </div>

      <div>
   
      </div>
      <div className="relative">
        <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pt-6 lg:pt-14 lg:w-full lg:max-w-2xl">
              <div className="relative px-6 py-6 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <span className='bg-gradient-to-r from-accent-1 via-red-400 to-blue-400 inline-block text-transparent bg-clip-text'></span> 
                    <div className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl" dangerouslySetInnerHTML={{__html: intl.formatMessage({id:"intro_title"})}} />
                    {/* <h1 className="text-4xl font-bold tracking-tight text-accent-1 sm:text-6xl">
                      {title}
                    </h1> */}
                    <p className="mt-6 text-lg leading-8 text-gray-800">
                        {text}
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
