import { useIntl } from "react-intl";

import { useRouter } from 'next/router'



export default function Contributors({title, text, icon1,icontext1, icon2, icontext2, icon3, icontext3, icon4, icontext4, icon5, icontext5, icon6, icontext6}) {

    const intl = useIntl()
    const router = useRouter();
    const {locale} = router

    return (


      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-accent-1">{title}</h2>
              <p className="mt-6 text-lg leading-8 ">
              {text}
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <a href="#" className="text-sm font-semibold text-white ">
                {intl.formatMessage({id:"contributors_contact_us"})}<span className="ml-1" aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <img 
                className="max-h-12 w-full object-contain object-right"
                src={icon1}
                alt="Tuple"
                width={105}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-right"
                src={icon2}
                alt="Reform"
                width={104}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-right"
                src={icon3}
                alt="SavvyCal"
                width={140}
                height={100}
              />
              <img
                className="max-h-12 w-full object-contain object-right"
                src={icon4}
                alt="Laravel"
                width={136}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-right"
                src={icon5}
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-right"
                src={icon6}
                alt="Statamic"
                width={147}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  