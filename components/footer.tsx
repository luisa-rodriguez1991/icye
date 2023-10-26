import { useIntl } from "react-intl";
import Image from 'next/image'
  
  export default function Footer() {
    const intl = useIntl()

    return (
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">

        <div className="flex flex-col lg:flex-row">
          <div className="basis-12/12 md:basis-11/12 lg:basis-9/12">
          <div className="grow grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="mt-10 md:mt-0">
                <div className="mb-5">
                <div className="flex flex-1 min-w-[55px] justify-start">
                  <a href="#" className="-m-1.5 p-1.5 flex">
                    <span className="sr-only">Your Company</span>
                    <Image width={45} height={44} className="" src="/img/icon.png" alt="Icono ICYE Colombia" />
                    <Image width={66} height={44} className="hidden lg:flex ml-2" src="/img/logo.png" alt="Logo ICYE Colombia" />
                  </a>
                </div>
                </div>
                  <div>
                    <p className="text-sm leading-6 text-gray-600 hover:text-gray-900">{intl.formatMessage({id:"footer_col-1-title"})}</p>
                  </div>
                  <div>
                    <ul role="list" className="mt-6 flex gap-3">
                        <li>
                          <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                           <img
                            className="col-span-2 max-h-8 w-auto object-contain lg:col-span-1 text-accent-1"
                            src="/img/fb.svg"
                            alt="Reform"
                            width={158}
                            height={48}
                        />

                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                           <img
                            className="col-span-2  max-h-8 w-auto object-contain lg:col-span-1 text-accent-1"
                            src="/img/twitterx.svg"
                            alt="Reform"
                            width={158}
                            height={48}
                        />

                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                           <img
                            className="col-span-2 hover:fill-accent-1 max-h-8 w-auto object-contain lg:col-span-1 text-accent-1"
                            src="/img/instagram.svg"
                            alt="Reform"
                            width={50}
                        />
 
                          </a>
                        </li>
                    </ul>
                  </div>
                </div>   
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">{intl.formatMessage({id:"footer_contact"})}</h3>
                  <ul role="list" className="mt-6 space-y-4">
                      <li >
                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {intl.formatMessage({id:"footer_direccion1"})}<br></br>
                        {intl.formatMessage({id:"footer_direccion2"})}
                        </a>
                      </li>
                      <li >
                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {intl.formatMessage({id:"footer_email"})}

                        </a>
                      </li><li >
                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {intl.formatMessage({id:"footer_whatsapp"})}

                        </a>
                      </li>
                  </ul>
                </div>    
                <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">{intl.formatMessage({id:"footer_datat"})}</h3>
                  <ul role="list" className="mt-6 space-y-4">
                      <li >
                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {intl.formatMessage({id:"footer_requests"})}
                        </a>
                      </li>
                      <li >
                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {intl.formatMessage({id:"footer_privacy"})}
                        </a>
                      </li>
                      <li >
                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {intl.formatMessage({id:"footer_terms"})}
                        </a>
                      </li>
                  </ul>
                </div>
            </div>
          </div>

          <div className="basis-12/12 md:basis-1/12 lg:basis-3/12">
          <div className="mt-10 lg:mt-0 md:max-w-[280px] lg:max-w-auto">
              <h3 className="text-sm font-semibold leading-6 text-gray-900">{intl.formatMessage({id:"footer_news"})}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
              {intl.formatMessage({id:"footer_news_p"})}
              </p>
              <form className="mt-6 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                  placeholder={intl.formatMessage({id:"news_text"})}
                />
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md bg-accent-1 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {intl.formatMessage({id:"footer_button"})}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>









       
          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
            <div className="flex space-x-6 md:order-2">
             
                <a href="#" className="text-gray-400 hover:text-gray-500">
              
                </a>
           
            </div>
           
          </div>
        </div>
      </footer>
    )
  }
  