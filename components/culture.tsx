import { useIntl } from "react-intl";
import { useState } from 'react'
import Image from 'next/image'



export default function Culture({
  img,
  text,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  textitem1,
  textitem2,
  textitem3,
  textitem4,
  textitem5,
  textitem6,
  textitem7,
  textitem8,
  textitem9,
}:any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const intl = useIntl();

  return (
    <div className="bg-white">
     

     <div className="relative isolate overflow-hidden bg-white  pt-12 pb-24  lg:overflow-visible lg:px-0">
       
  
        {/* Values section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-6xl text-center">
          <div className="mx-auto max-w-6xl text-center mb-12 ">
          <span className=" bg-gradient-to-r from-accent-1 via-red-400 to-blue-400 inline-block text-transparent bg-clip-text"></span>
          <div
            className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "culrute_title"  }),
            }}
          />
        </div>
            <p className=" text-lg leading-8 text-gray-700">
            {text}
            </p>
          </div>
          <div className="mt-12 xl:mx-auto xl:max-w-6xl xl:px-8 mb-12">
          <div className="">
            <Image
              className="sm:aspect-[5/3] lg:aspect-[5/2] w-full object-cover rounded-3xl"
              src={img.sizes.large}
              alt=""
              width={img.sizes["large-width"]}
              height={img.sizes["large-height"]}
              
            />
           

          </div>
        </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
           

            <div>
                <dt className="font-semibold text-xl text-gray-900">{item1}</dt>
                <dd className="mt-1 text-lg text-gray-600 text-justify">{textitem1}</dd>
            </div>

            <div>
                <dt className="font-semibold text-xl text-gray-900">{item2}</dt>
                <dd className="mt-1 text-lg text-gray-600 text-justify">{textitem2}</dd>
            </div>

            <div>
                <dt className="font-semibold text-xl text-gray-900">{item3}</dt>
                <dd className="mt-1 text-lg text-gray-600 text-justify">{textitem3}</dd>
            </div>

            <div>
                <dt className="font-semibold text-xl text-gray-900">{item4}</dt>
                <dd className="mt-1 text-lg text-gray-600 text-justify">{textitem4}</dd>
            </div>

            <div>
                <dt className="font-semibold text-xl text-gray-900">{item5}</dt>
                <dd className="mt-1 text-lg text-gray-600 text-justify">{textitem5}</dd>
            </div>

            <div>
                <dt className="font-semibold text-xl text-gray-900">{item6}</dt>
                <dd className="mt-1 text-lg text-gray-600 text-justify">{textitem6}</dd>
            </div>

            <div>
                <dt className="font-semibold text-xl text-gray-900">{item7}</dt>
                <dd className="mt-1 text-lg text-gray-600 text-justify">{textitem7}</dd>
            </div>

            <div>
                <dt className="font-semibold  text-xl text-gray-900">{item8}</dt>
                <dd className="mt-1 text-lg text-gray-600 text-justify">{textitem8}</dd>
            </div>

            <div>
                <dt className="font-semibold text-xl text-gray-900">{item9}</dt>
                <dd className="mt-1 text-lg text-gray-600 text-justify">{textitem9}</dd>
            </div>

          </dl>
        </div>

      </div>

     
    </div>
  )
}
