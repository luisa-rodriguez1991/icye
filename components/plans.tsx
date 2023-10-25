import { useIntl } from "react-intl";
import { CheckIcon } from '@heroicons/react/20/solid'


  
  

export default function Plans () {
    const intl = useIntl()

    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="bg-white py-24 ">
        <div className="py-16 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight text-w sm:text-5xl text-accent-1">
            {intl.formatMessage({id:"plans_title"})}
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 text-accent-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore velit esse ad. Magnam cupiditate cum ipsam cumque debitis ad, qui mollitia sed maiores dolores omnis, sit vitae corrupti laborum inventore.
          </p>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">

        
             
                <div>
                        <div className='ring-1 ring-accent-1 rounded-3xl p-4'>
                            <h3 className=" text-center text-accent-1 text-lg font-semibold leading-8">{intl.formatMessage({id:"plans_title_plan"})}</h3>
                            <p className="mt-6 flex flex-col items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-accent-1 m-2">€ 6.700</span>
                            <span className="text-sm font-semibold leading-6 text-cyan-500">{intl.formatMessage({id:"plans_paragraph"})}</span>
                            </p>
                            <a
                            href="cosas y cosas"
                            aria-describedby="cosa"
                            className='bg-accent-1 text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 border border-white mt-6 block rounded-[50px] py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-white'
                            >
                            {intl.formatMessage({id:"plans_button"})}
                            </a>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including1"})}
                               
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including2"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including3"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including4"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including5"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including6"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including7"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including8"})}
                              
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including9"})}
                               
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including10"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including11"})}
                               
                                </li>
                            </ul>
                            
                        </div>
                </div>
                <div>
                        <div className='ring-1 ring-accent-1 rounded-3xl p-4'>
                            <h3 className=" text-center text-accent-1 text-lg font-semibold leading-8">{intl.formatMessage({id:"plans_title_plan"})}</h3>
                            <p className="mt-6 flex flex-col items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-accent-1 m-2">€ 6.700</span>
                            <span className="text-sm font-semibold leading-6 text-cyan-500">{intl.formatMessage({id:"plans_paragraph"})}</span>
                            </p>
                            <a
                            href="cosas y cosas"
                            aria-describedby="cosa"
                            className='bg-accent-1 text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 border border-white mt-6 block rounded-[50px] py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-white'
                            >
                            {intl.formatMessage({id:"plans_button"})}
                            </a>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including1"})}
                               
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including2"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including3"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including4"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including5"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including6"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including7"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including8"})}
                              
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including9"})}
                               
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including10"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including11"})}
                               
                                </li>
                            </ul>
                            
                        </div>
                </div>
                <div>
                        <div className='ring-1 ring-accent-1 rounded-3xl p-4'>
                            <h3 className=" text-center text-accent-1 text-lg font-semibold leading-8">{intl.formatMessage({id:"plans_title_plan"})}</h3>
                            <p className="mt-6 flex flex-col items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-accent-1 m-2">€ 6.700</span>
                            <span className="text-sm font-semibold leading-6 text-cyan-500">{intl.formatMessage({id:"plans_paragraph"})}</span>
                            </p>
                            <a
                            href="cosas y cosas"
                            aria-describedby="cosa"
                            className='bg-accent-1 text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 border border-white mt-6 block rounded-[50px] py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-white'
                            >
                            {intl.formatMessage({id:"plans_button"})}
                            </a>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including1"})}
                               
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including2"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including3"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including4"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including5"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including6"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including7"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including8"})}
                              
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including9"})}
                               
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including10"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including11"})}
                               
                                </li>
                            </ul>
                            
                        </div>
                </div>
                <div>
                        <div className='ring-1 ring-accent-1 rounded-3xl p-4'>
                            <h3 className=" text-center text-accent-1 text-lg font-semibold leading-8">{intl.formatMessage({id:"plans_title_plan"})}</h3>
                            <p className="mt-6 flex flex-col items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-accent-1 m-2">€ 6.700</span>
                            <span className="text-sm font-semibold leading-6 text-cyan-500">{intl.formatMessage({id:"plans_paragraph"})}</span>
                            </p>
                            <a
                            href="cosas y cosas"
                            aria-describedby="cosa"
                            className='bg-accent-1 text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 border border-white mt-6 block rounded-[50px] py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-white'
                            >
                            {intl.formatMessage({id:"plans_button"})}
                            </a>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including1"})}
                               
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including2"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including3"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including4"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including5"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including6"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including7"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including8"})}
                              
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including9"})}
                               
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including10"})}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {intl.formatMessage({id:"plans_including11"})}
                               
                                </li>
                            </ul>
                            
                        </div>
                </div>
              
                
                
              
                
                
            </div>

        </div>
        </div>
        
      </div>)
}



