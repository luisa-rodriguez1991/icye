import { useState } from 'react'
import { useIntl } from "react-intl";


export default function AboutUs({text, img1, img2, img3, img4, img5, missiontext1, missiontext2, missiontext3, dataanalytic1, dataanalytic2, dataanalytic3, dataanalyticlabel1, dataanalyticlabel2, dataanalyticlabel3, visiontext, visionsubtitle1, visiontext1, visionsubtitle2, visiontext2, visionsubtitle3, visiontext3, visionsubtitle4, visiontext4, visionsubtitle5, visiontext5, visionsubtitle6, visiontext6, ourteamtext, ourteamimg}) {
  
  
  const intl = useIntl()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
   
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
         
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
           
          </div>
          <div className="">
            <div className="mx-auto max-w-7xl px-6 pb-32  sm:pt-8 lg:px-8 lg:pt-8">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-xl">
                  <h1 className="text-4xl font-bold tracking-tight text-accent-1 sm:text-6xl">
                  {intl.formatMessage({id:"about_us_title"})}
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    {text}
                   
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src={img1}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src={img2}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={img3}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src={img4}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={img5}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section vision*/}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8 ">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-accent-1 sm:text-4xl">{intl.formatMessage({id:"about_us_mission"})}</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600">
                  {missiontext1}
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                  <p>
                  {missiontext2}
                  </p>
                  <p className="mt-10">
                  {missiontext3}
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">

                  <div className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{dataanalyticlabel1}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-accent-1">{dataanalytic1}</dd>
                  </div>
                  
                  <div className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{dataanalyticlabel2}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-accent-1">{dataanalytic2}</dd>
                  </div>

                  <div className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{dataanalyticlabel3}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-accent-1">{dataanalytic3}</dd>
                  </div>

                </dl>
              </div>
            </div>
          </div>
        </div>


            {/* Values section mission */}
            <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-accent-1 sm:text-4xl">{intl.formatMessage({id:"about_us_vision"})}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {visiontext}
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            
            <div>
              <dt className="font-semibold text-xl text-gray-900">{visionsubtitle1}</dt>
              <dd className="mt-1 text-gray-600">{visiontext1}</dd>
            </div>

            <div>
              <dt className="font-semibold text-xl text-gray-900">{visionsubtitle2}</dt>
              <dd className="mt-1 text-gray-600">{visiontext1}</dd>
            </div>

            <div>      
              <dt className="font-semibold text-xl text-gray-900">{visionsubtitle3}</dt>
              <dd className="mt-1 text-gray-600">{visiontext1}</dd>
            </div>  

            <div>
              <dt className="font-semibold text-xl text-gray-900">{visionsubtitle4}</dt>
              <dd className="mt-1 text-gray-600">{visiontext1}</dd>
            </div>

            <div>
              <dt className="font-semibold text-xl text-gray-900">{visionsubtitle5}</dt>
              <dd className="mt-1 text-gray-600">{visiontext1}</dd>
            </div>

            <div>
              <dt className="font-semibold text-xl text-gray-900">{visionsubtitle6}</dt>
              <dd className="mt-1 text-gray-600">{visiontext1}</dd>
            </div>


         
          </dl>
        </div>



        {/* Our team */} 

        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8 mb-32">
            <div className="mb-20">
                <div className="mx-auto max-w-4xl text-center ">
                    <p className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl">
                    {intl.formatMessage({id:"about_us_team"})}
                    </p>
                </div>
                    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 ">
                    {ourteamtext}
                    </p>
            </div>

          <img
            src={ourteamimg}
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

    

        
      </main>

     
    </div>
  )
}
