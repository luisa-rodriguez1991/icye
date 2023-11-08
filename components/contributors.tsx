import { useIntl } from "react-intl";

import { useRouter } from 'next/router'



export default function Contributors({title, text, icon1,icontext1, icon2, icontext2, icon3, icontext3, icon4, icontext4, icon5, icontext5, icon6, icontext6}) {

    const intl = useIntl()
    const router = useRouter();
    const {locale} = router

    return (


      <div className="relative isolate overflow-hidden bg-white px-5 py-24 sm:py-32 lg:overflow-visible lg:px-0">

        <div className="flex gap-12 lg:gap-24 flex-col lg:flex-row mx-auto max-w-7xl  justify-around pt-5 lg:px-8"> 
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2  ">
            {/* titulo y texto */}
            <div className="mx-auto w-full max-w-xl lg:mx-0  sm:text-center lg:text-left">
              <h2 className="text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl">{title}</h2>
              <p className="mt-6 text-lg leading-8 ">
              {text}
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <a href="#" className="text-sm font-semibold text-white ">
                {intl.formatMessage({id:"contributors_contact_us"})}<span className="ml-1" aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            
            {/* iconos */}
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">

            <div className="flex flex-col items-center lg:ml-12">
              <img
                className="max-h-12 w-full object-contain mb-4"
                src={icon1}
                alt="Statamic"
                width={147}
                height={48}
              />
              <p>{icontext1}</p>
              </div> 

              <div className="flex flex-col items-center lg:ml-12">
              <img
                className="max-h-12 w-full object-contain mb-4"
                src={icon2}
                alt="Statamic"
                width={147}
                height={48}
              />
              <p>{icontext2}</p>
              </div> 

              <div className="flex flex-col items-center lg:ml-12">
              <img
                className="max-h-12 w-full object-contain mb-4"
                src={icon3}
                alt="Statamic"
                width={147}
                height={48}
              />
              <p>{icontext3}</p>
              </div> 

              <div className="flex flex-col items-center lg:ml-12">
              <img
                className="max-h-12 w-full object-contain mb-4"
                src={icon4}
                alt="Statamic"
                width={147}
                height={48}
              />
              <p>{icontext4}</p>
              </div> 

              <div className="flex flex-col items-center lg:ml-12">
              <img
                className="max-h-12 w-full object-contain mb-4"
                src={icon5}
                alt="Statamic"
                width={147}
                height={48}
              />
              <p>{icontext5}</p>
              </div> 

              <div className="flex flex-col items-center lg:ml-12">
              <img
                className="max-h-12 w-full object-contain mb-4"
                src={icon6}
                alt="Statamic"
                width={147}
                height={48}
              />
              <p>{icontext6}</p>
              </div>      


            </div>
          </div>
        </div>
      </div>
    )
  }
  