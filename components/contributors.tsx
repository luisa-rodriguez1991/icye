import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from 'next/image'

export default function Contributors({
  title,
  text,
  icon1,
  icon2,
  icon3,
  icon4,
  icontext1,
  icontext2,
  icontext3,
  icontext4 }: any) {
  const intl = useIntl();
  const router = useRouter();
  const { locale } = router;



  return (
    <div className="bg-accent-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
          <span className="  bg-gradient-to-r from-accent-1 via-red-400 to-blue-400 inline-block text-transparent bg-clip-text"></span>
          <div
            className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "contributors_title" }),
            }}
          />
            <p className="mt-6 text-lg leading-8 ">
              {text}
            </p>
            
            
            <div className="mt-8 flex items-center gap-x-6">
             
              <Link
                 locale={locale}
                 href="/contact"
                 className="text-base font-semibold text-gray-500 "
               >
                 {intl.formatMessage({ id: "contributors_contact_us" })}{" "}
                 <span className="ml-1" aria-hidden="true">
                   &rarr;
                 </span>{" "}
               </Link>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">

            {/* contibuidor1 */}
              { icon1 && (<div className="text-center col-span-2 lg:col-span-1" >
              <Image
                className="max-h-24 w-full object-contain "
                src={icon1.sizes.medium}
                alt="Tuple"
                width={icon1.sizes["medium-width"]}
                height={icon1.sizes["medium-height"]}
              />
              <p className="mt-2">{icontext1}</p>
            </div>)}  
            
            {/* url:{JSON.stringify(icon1.sizes.thumbnail)}<br></br>
           ancho:{JSON.stringify(icon1.sizes["thumbnail-width"])}<br></br>
            alto:{JSON.stringify(icon1.sizes["thumbnail-height"])}<br></br>  */}
            
            {/* contibuidor2 */}

           { icon2 && (<div className="text-center col-span-2 lg:col-span-1">
            <Image
              className="max-h-24 w-full object-contain "
              src={icon2.sizes.medium}
              alt="Reform"
              width={icon2.sizes["medium-width"]}
              height={icon2.sizes["medium-width"]}
            />
            <p className="mt-2">{icontext2}</p>
            </div>)}

          

            {/* contibuidor3 */}
            { icon3 && (<div className="text-center col-span-2 lg:col-span-1" >
              <Image
                className="max-h-24 w-full object-contain "
                src={icon3.sizes.medium}
                alt="Tuple"
                width={icon3.sizes["medium-width"]}
                height={icon3.sizes["medium-width"]}
              />
              <p className="mt-2">{icontext1}</p>
            </div>)}

            {/* contibuidor4 */}
            { icon4 && (<div className="text-center col-span-2 lg:col-span-1" >
              <Image
                className="max-h-24 w-full object-contain "
                src={icon4.sizes.medium}
                alt="Tuple"
                width={icon4.sizes["medium-width"]}
                height={icon4.sizes["medium-width"]}
              />
              <p className="mt-2">{icontext1}</p>
            </div>) }

          </div>
        </div>
      </div>
    </div>
  )
}



