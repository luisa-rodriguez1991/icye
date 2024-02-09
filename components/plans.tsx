import { useIntl } from "react-intl";
import { CheckIcon } from "@heroicons/react/20/solid";
import { DocumentArrowDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

export default function Plans({
  text,
  title1,
  price1,
  cyantext1,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  pdf1,
  title2,
  price2,
  cyantext2,
  list2item1,
  list2item2,
  onOpenForm,
  list2item3,
  list2item4,
  list2item5,
  list2item6,
  list2item7,
  list2item8,
  list2item9,
  list2item10,
  list2item11,
  pdf2,
  title3,
  price3,
  cyantext3,
  list3item1,
  list3item2,
  list3item3,
  list3item4,
  list3item5,
  list3item6,
  list3item7,
  list3item8,
  list3item9,
  list3item10,
  list3item11,
  pdf3,
  title4,
  price4,
  cyantext4,
  list4item1,
  list4item2,
  list4item3,
  list4item4,
  list4item5,
  list4item6,
  list4item7,
  list4item8,
  list4item9,
  list4item10,
  list4item11,
  pdf4,
}: any) {
  const router = useRouter();
  const { locale } = router;
  const intl = useIntl();

  return (
    <div className="bg-white py-12">
      <div className="bg-white  ">
        <div className=" mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="  bg-gradient-to-r from-accent-1 via-red-400 to-blue-400 inline-block text-transparent bg-clip-text"></span>
            <div
              className=" text-4xl font-bold tracking-tight text-w sm:text-5xl text-accent-1"
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "plans_title" }),
              }}
            />
          </div>
          <p className="mx-auto my-20 max-w-6xl text-center text-lg leading-8 text-gray-600 text-accent-2">
            {text}
          </p>
          <div className=" py-6 mx-auto mt-4 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">

            <div className="  ">
              <div className=" flex flex-col justify-around ring-1 ring-accent-1 rounded-3xl p-4 lg:min-h-[790px]">
                <h3 className=" text-center text-accent-1 text-lg font-semibold ">
                  {title1}
                </h3>

                <div className="mt-6 flex flex-col  ">
                  <span className="text-2xl font-bold tracking-tight text-accent-1 ml-2">Desde</span>
                  <div className=" flex items-end">
                  <span className="text-3xl font-bold tracking-tight text-accent-1 ml-2">{price1}</span>
                  <span className="text-1xl font-bold tracking-tight text-accent-1 ml-1">COP</span>
                  </div>
                  <span className="text-base font-semibold leading-6 text-cyan-500 ml-2 mt-2">
                    {cyantext1}
                  </span>
                </div>

                <button
                  onClick={() => onOpenForm(true)}
                  className=" bg-accent-1 text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 border border-white mt-6 block rounded-[50px] py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-white"
                >
                  {intl.formatMessage({ id: "plans_button" })}
                </button>

                <ul role="list" className=" grow mt-8 space-y-3 text-sm leading-6 text-gray-600">

                  {item1 && ( <li className="flex gap-x-3 text-accent-1">
                    {item1}
                  </li> )}


                 {item2 && (<li className="flex gap-x-4 text-accent-1">
                    
                    {item2}
                  </li> )}


                  {item3 && (<li className="flex gap-x-4 text-accent-1">
                  
                    {item3}
                  </li>)}


                  {item4 && (  <li className="flex gap-x-4 text-accent-1">
               
                    {item4}
                  </li>)}


                  {item5 && (<li className="flex gap-x-4 text-accent-1">
                 
                    {item5}
                  </li>)}


                  {item6 && (<li className="flex gap-x-4 text-accent-1">
                   
                    {item6}
                  </li>)}


                  {item7 && ( <li className="flex gap-x-4 text-accent-1">
                  
                    {item7}
                  </li>)}


                  {item8 && ( <li className="flex gap-x-4 text-accent-1">
                   
                    {item8}
                  </li>)}


                  {item9 && ( <li className="flex gap-x-4 text-accent-1">
                   
                    {item9}
                  </li>)}


                  {item10 && (<li className="flex gap-x-4 text-accent-1">
                  
                    {item10}
                  </li>)}


                  {item11 && (<li className="flex gap-x-4 text-accent-1">
                  4
                    {item11}
                  </li>)}


                </ul>
             
              </div>
            </div>

            <div className="  ">
              <div className=" flex flex-col justify-around ring-1 ring-accent-1 rounded-3xl p-4 lg:min-h-[790px]">
                <h3 className=" text-center text-accent-1 text-lg font-semibold leading-8">
                  {title2}
                </h3>
                <div className="mt-6 flex flex-col  ">
                  <span className="text-2xl font-bold tracking-tight text-accent-1 ml-2">Desde</span>
                  <div className=" flex items-end">
                  <span className="text-3xl font-bold tracking-tight text-accent-1 ml-2">{price2}</span>
                  <span className="text-1xl font-bold tracking-tight text-accent-1 ml-1">COP</span>
                  </div>
                  <span className="text-base font-semibold leading-6 text-cyan-500 ml-2 mt-2">
                  {cyantext2}
                  </span>
                </div>

                <button
                  onClick={() => onOpenForm(true)}
                  className=" bg-accent-1 text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 border border-white mt-6 block rounded-[50px] py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-white"
                >
                  {intl.formatMessage({ id: "plans_button" })}
                </button>

                <ul
                  role="list"
                  className=" grow mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {list2item1 && ( <li className="flex gap-x-4 text-accent-1">
                
                    {list2item1}
                  </li>)}


                  {list2item2 && ( <li className="flex gap-x-4 text-accent-1">
                   
                    {list2item2}
                  </li>)}


                  {list2item3 && (<li className="flex gap-x-4 text-accent-1">
                  
                    {list2item3}
                  </li>)}


                  {list2item4 && (<li className="flex gap-x-4 text-accent-1">
                   
                    {list2item4}
                  </li>)}


                  {list2item5 && (<li className="flex gap-x-4 text-accent-1">
                   
                    {list2item5}
                  </li>)}


                  {list2item6 && (<li className="flex gap-x-4 text-accent-1">
                 
                    {list2item6}
                  </li>)}


                  {list2item7 && ( <li className="flex gap-x-4 text-accent-1">
                   
                    {list2item7}
                  </li>)}


                  {list2item8 && ( <li className="flex gap-x-4 text-accent-1">
                  
                    {list2item8}
                  </li>)}


                  {list2item9 && (<li className="flex gap-x-4 text-accent-1">
                   
                    {list2item9}
                  </li>)}


                  {list2item10 && (<li className="flex gap-x-4 text-accent-1">
                  
                    {list2item10}
                  </li>)}


                  {list2item11 && (<li className="flex gap-x-4 text-accent-1">
                 
                    {list2item11}
                  </li>)}



                </ul>

                {/* <div>
                    <a
                      className=" flex justify-center items-center bg-accent-2 text-accent-1  shadow-sm hover:bg-accent-1 hover:text-white border border-white mt-6 block rounded-[50px] py-2 px-3 text-center text-xs font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-white"
                      href={pdf2}
                      target="_blank"
                      title={`Download PDF file about the project: ${title1}`}
                    >
                      <DocumentArrowDownIcon className=" h-4 w-4 mr-1" />
                      {intl.formatMessage({ id: "plans_button_pdf" })}
                    </a>
                  </div> */}
              </div>
            </div>

            <div className="  ">
              <div className="flex flex-col justify-around  ring-1 ring-accent-1 rounded-3xl p-4 lg:min-h-[790px]">
                <h3 className=" text-center text-accent-1 text-lg font-semibold leading-8">
                  {title3}
                </h3>

                <div className="mt-6 flex flex-col  ">
                  <span className="text-2xl font-bold tracking-tight text-accent-1 ml-2">Desde</span>
                  <div className=" flex items-end">
                  <span className="text-3xl font-bold tracking-tight text-accent-1 ml-2">{price3}</span>
                  <span className="text-1xl font-bold tracking-tight text-accent-1 ml-1">COP</span>
                  </div>
                  <span className="text-base font-semibold leading-6 text-cyan-500 ml-2 mt-2">
                  {cyantext3}
                  </span>
                </div>

                <button
                  onClick={() => onOpenForm(true)}
                  className=" bg-accent-1 text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 border border-white mt-6 block rounded-[50px] py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-white"
                >
                  {intl.formatMessage({ id: "plans_button" })}
                </button>

                <ul
                  role="list"
                  className=" grow mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {list3item1 && ( <li className="flex gap-x-4 text-accent-1">
                   
                    {list3item1}
                  </li>)}


                  {list3item2 && (<li className="flex gap-x-4 text-accent-1">
                    
                    {list3item2}
                  </li>)}


                  {list3item3 && (<li className="flex gap-x-4 text-accent-1">
                    
                    {list3item3}
                  </li>)}


                  {list3item4 && (<li className="flex gap-x-4 text-accent-1">
                    
                    {list3item4}
                  </li>)}


                  {list3item5 && (<li className="flex gap-x-4 text-accent-1">
                    
                    {list3item5}
                  </li>)}

                  {list3item6 && (<li className="flex gap-x-4 text-accent-1">
                    
                    {list3item6}
                  </li>)}


                  {list3item7 && (<li className="flex gap-x-4 text-accent-1">
                    
                    {list3item7}
                  </li>)}


                  {list3item8 && (<li className="flex gap-x-4 text-accent-1">
                   
                    {list3item8}
                  </li>)}


                  {list3item9 && (<li className="flex gap-x-4 text-accent-1">
                    
                    {list3item9}
                  </li>)}


                  {list3item10 && (<li className="flex gap-x-4 text-accent-1">
                   
                    {list3item10}
                  </li>)}


                  {list3item11 && (<li className="flex gap-x-4 text-accent-1">
                   
                    {list3item11}
                  </li>)}



                </ul>
            
              </div>
            </div>

            <div className="  ">
              <div className="flex flex-col justify-around  ring-1 ring-accent-1 rounded-3xl p-4 lg:min-h-[790px]">
                <h3 className=" text-center text-accent-1 text-lg font-semibold leading-8">
                  {title4}
                </h3>

                <div className="mt-6 flex flex-col  ">
                  <span className="text-2xl font-bold tracking-tight text-accent-1 ml-2">Desde</span>
                  <div className=" flex items-end">
                  <span className="text-3xl font-bold tracking-tight text-accent-1 ml-2">{price4}</span>
                  <span className="text-1xl font-bold tracking-tight text-accent-1 ml-1">COP</span>
                  </div>
                  <span className="text-base font-semibold leading-6 text-cyan-500 ml-2 mt-2">
                  {cyantext4}
                  </span>
                </div>

                <button
                  onClick={() => onOpenForm(true)}
                  className=" bg-accent-1 text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 border border-white mt-6 block rounded-[50px] py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-white"
                >
                  {intl.formatMessage({ id: "plans_button" })}
                </button>

                <ul
                  role="list"
                  className=" grow mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >

                  {list4item1 && (<li className="flex gap-x-4 text-accent-1">
                    
                    {list4item1}
                  </li>)}


                  {list4item2 && (<li className="flex gap-x-4 text-accent-1">
                    
                    {list4item2}
                  </li>)}


                  {list4item3 && (<li className="flex gap-x-4 text-accent-1">
                    
                    {list4item3}
                  </li>)}


                  {list4item4 && (<li className="flex gap-x-4 text-accent-1">
                    
                    {list4item4}
                  </li>)}


                  {list4item5 && (<li className="flex gap-x-4 text-accent-1">
                    
                    {list4item5}
                  </li>)}


                  {list4item6 && (<li className="flex gap-x-4 text-accent-1">
                    
                    {list4item6}
                  </li>)}


                  {list4item7 && (<li className="flex gap-x-4 text-accent-1">
                    
                    {list4item7}
                  </li>)}


                  {list4item8 && (<li className="flex gap-x-4 text-accent-1">
                    
                    {list4item8}
                  </li>)}


                  {list4item9 && (<li className="flex gap-x-4 text-accent-1">
                    
                    {list4item9}
                  </li>)}


                  {list4item10 && (<li className="flex gap-x-4 text-accent-1">
                    
                    {list4item10}
                  </li>)}


                  {list4item11 && (<li className="flex gap-x-4 text-accent-1">
                    
                    {list4item11}
                  </li>)}



                </ul>

              
              </div>
            </div>
          </div>
            
        </div>
        <div className=" mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex  mb-24 justify-center">
              <a
                className=" flex justify-center w-1/2 items-center bg-accent-2 text-accent-1  shadow-sm hover:bg-accent-1 hover:text-white border border-white mt-6 block rounded-[50px] py-2 px-3 text-center text-xs font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-white"
                href={pdf4}
                target="_blank"
                title={`Download PDF file about the project: ${title1}`}
              >
                <DocumentArrowDownIcon className=" h-4 w-4 mr-1" />
                {intl.formatMessage({ id: "plans_button_pdf" })}
              </a>
            </div> 
          </div> 
      </div>
    </div>
  );
}
