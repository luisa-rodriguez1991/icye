import { useIntl } from "react-intl";
import { CheckIcon } from '@heroicons/react/20/solid'
import { DocumentArrowDownIcon } from '@heroicons/react/20/solid'


  
  

export default function Plans ({ page, text, title1, price1, cyantext1, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, pdf1, title2, price2, cyantext2, list2item1, list2item2, list2item3, list2item4, list2item5, list2item6, list2item7, list2item8, list2item9, list2item10, list2item11, pdf2, title3, price3, cyantext3, list3item1, list3item2, list3item3, list3item4, list3item5, list3item6, list3item7, list3item8, list3item9, list3item10, list3item11, pdf3, title4, price4, cyantext4, list4item1, list4item2, list4item3, list4item4, list4item5, list4item6, list4item7, list4item8, list4item9, list4item10, list4item11, pdf4 }) {
    const intl = useIntl()

    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="bg-white  ">
        <div className=" mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight text-w sm:text-5xl text-accent-1">
            {intl.formatMessage({id:"plans_title"})}
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 text-accent-2">
          {text}
          </p>
          <div className="isolate py-6 mx-auto mt-4 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">

        
                <div>
                        <div className='ring-1 ring-accent-1 rounded-3xl p-4'>
                            <h3 className=" text-center text-accent-1 text-lg font-semibold leading-8">{title1}</h3>
                            <p className="mt-6 flex flex-col items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-accent-1 m-2"> {price1}</span>
                            <span className="text-sm font-semibold leading-6 text-cyan-500">{cyantext1}</span>
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
                                {item1}
                               
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {item2}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {item3}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {item4}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {item5}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {item6}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {item7}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {item8}
                              
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {item9}
                               
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {item10}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {item11}
                               
                                </li>

                                <div>

                                    <a  className=' flex justify-center items-center bg-accent-2 text-accent-1  shadow-sm hover:bg-accent-1 hover:text-white border border-white mt-6 block rounded-[50px] py-2 px-3 text-center text-xs font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-white'
                                        href={pdf1} target='_blank' title={`Download PDF file about the project: ${title1}`}
                                        ><DocumentArrowDownIcon className=' h-4 w-4 mr-1'/>{intl.formatMessage({id:"plans_button_pdf"})}
                                    </a>
                                    
                                </div>


                            </ul>
                            
                        </div>
                </div>

                <div>
                        <div className='ring-1 ring-accent-1 rounded-3xl p-4'>
                            <h3 className=" text-center text-accent-1 text-lg font-semibold leading-8">{title2}</h3>
                            <p className="mt-6 flex flex-col items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-accent-1 m-2">{price2}</span>
                            <span className="text-sm font-semibold leading-6 text-cyan-500">{cyantext2}</span>
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
                                {list2item1}
                               
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list2item2}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list2item3}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list2item4}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list2item5}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list2item6}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list2item7}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list2item8}
                              
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list2item9}
                               
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list2item10}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list2item11}
                               
                                </li>

                                <div>

                                    <a  className=' flex justify-center items-center bg-accent-2 text-accent-1  shadow-sm hover:bg-accent-1 hover:text-white border border-white mt-6 block rounded-[50px] py-2 px-3 text-center text-xs font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-white'
                                        href={pdf1} target='_blank' title={`Download PDF file about the project: ${title1}`}
                                        ><DocumentArrowDownIcon className=' h-4 w-4 mr-1'/>{intl.formatMessage({id:"plans_button_pdf"})}
                                    </a>
                                    
                                </div>
                            </ul>
                            
                        </div>
                </div>

                <div>
                        <div className='ring-1 ring-accent-1 rounded-3xl p-4'>
                            <h3 className=" text-center text-accent-1 text-lg font-semibold leading-8">{title3}</h3>
                            <p className="mt-6 flex flex-col items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-accent-1 m-2">{price3}</span>
                            <span className="text-sm font-semibold leading-6 text-cyan-500">{cyantext3}</span>
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
                                {list3item1}
                               
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list3item2}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list3item3}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list3item4}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list3item5}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list3item6}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list3item7}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list3item8}
                              
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list3item9}
                               
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list3item10}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list3item11}
                               
                                </li>

                                <div>

                                    <a  className=' flex justify-center items-center bg-accent-2 text-accent-1  shadow-sm hover:bg-accent-1 hover:text-white border border-white mt-6 block rounded-[50px] py-2 px-3 text-center text-xs font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-white'
                                        href={pdf1} target='_blank' title={`Download PDF file about the project: ${title1}`}
                                        ><DocumentArrowDownIcon className=' h-4 w-4 mr-1'/>{intl.formatMessage({id:"plans_button_pdf"})}
                                    </a>
                                    
                                </div>

                            </ul>
                            
                        </div>
                </div>
                
                <div>
                        <div className='ring-1 ring-accent-1 rounded-3xl p-4'>
                            <h3 className=" text-center text-accent-1 text-lg font-semibold leading-8">{title4}</h3>
                            <p className="mt-6 flex flex-col items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-accent-1 m-2">{price4}</span>
                            <span className="text-sm font-semibold leading-6 text-cyan-500">{cyantext4}</span>
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
                                {list4item1}
                               
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list4item2}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list4item3}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list4item4}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list4item5}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list4item6}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list4item7}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list4item8}
                              
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list4item9}
                               
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list4item10}
                                
                                </li>
                                <li className="flex gap-x-3 text-accent-1">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                {list4item11}
                               
                                </li>

                                <div>

                                    <a  className=' flex justify-center items-center bg-accent-2 text-accent-1  shadow-sm hover:bg-accent-1 hover:text-white border border-white mt-6 block rounded-[50px] py-2 px-3 text-center text-xs font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-white'
                                        href={pdf1} target='_blank' title={`Download PDF file about the project: ${title1}`}
                                        ><DocumentArrowDownIcon className=' h-4 w-4 mr-1'/>{intl.formatMessage({id:"plans_button_pdf"})}
                                    </a>
                                    
                                </div>
                            </ul>
                            
                        </div>
                </div>
              
                
                
              
                
                
            </div>

        </div>
        </div>
        
      </div>)
}



