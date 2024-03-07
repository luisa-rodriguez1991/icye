import { useState } from "react";
import { useIntl } from "react-intl";
import Image from 'next/image'




export default function AboutUs({
  text,
  img1,
  img2,
  img3,
  img4,
  img5,
  visionsubtitle1,
  visiontext1,
  visionsubtitle2,
  visiontext2,
  visionsubtitle3,
  visiontext3,
  visionsubtitle4,
  visiontext4,
  visionsubtitle5,
  visiontext5,
  visionsubtitle6,
  visiontext6,
  ourteamtext,
  ourteamimg,
  ourteamsubtitledescription1,
  ourteamsubtitledescription2,
  ourteamsubtitledescription3,
  ourteamsubtitledescription4,
  ourteamsubtitledescription5,
  ourteamtextdescrption1,
  ourteamtextdescrption2,
  ourteamtextdescrption3,
  ourteamtextdescrption4,
  ourteamtextdescrption5,
  teammemberimg1,
  teammemberimg2,
  teammemberimg3,
  teammemberimg4,
  teammemberimg5,
  teammemberimg6,
  teammemberimg7,
  teammemberimg8,
  teammembern1,
  teammembern2,
  teammembern3,
  teammembern4,
  teammembern5,
  teammembern6,
  teammembern7,
  teammembern8,
  teammemberp1,
  teammemberp2,
  teammemberp3,
  teammemberp4,
  teammemberp5,
  teammemberp6,
  teammemberp7,
  teammemberp8,
  teammemberd1,
  teammemberd2,
  teammemberd3,
  teammemberd4,
  teammemberd5,
  teammemberd6,
  teammemberd7,
  teammemberd8,
  
  
}: any) {
  const intl = useIntl();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          ></div>
          <div className="">
            <div className="mx-auto max-w-7xl px-6 pt-12 lg:px-8 lg:pt-8">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-xl">
                  <h1 className="text-4xl font-bold tracking-tight text-accent-1 sm:text-6xl">
                    {intl.formatMessage({ id: "about_us_title" })}
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    {text}
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg hidden sm:block leg:hidden"
                        src={img1.sizes.medium_large}
                        alt=""
                        width={img1.sizes["medium_large-width"]}
                        height={img1.sizes["medium_large-height"]}
                        
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                      

                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg hidden sm:block leg:hidden"
                        src={img2.sizes.medium_large}
                        alt=""
                        width={img2.sizes["medium_large-width"]}
                        height={img2.sizes["medium_large-height"]}
                       
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg hidden sm:block leg:hidden"
                        src={img3.sizes.medium_large}
                        alt=""
                        width={img3.sizes["medium_large-width"]}
                        height={img3.sizes["medium_large-height"]}
                        
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative ">
                      <Image
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        src={img4.sizes.medium_large}
                        alt=""
                        width={img4.sizes["medium_large-width"]}
                        height={img4.sizes["medium_large-height"]}
                        
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        src={img5.sizes.medium_large}
                        alt=""
                        width={img5.sizes["medium_large-width"]}
                        height={img5.sizes["medium_large-height"]}
                        
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />

                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values section vission */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-accent-1 sm:text-4xl">
              
               {intl.formatMessage({ id: "about_us_mission" })} {intl.formatMessage({ id: "about_us_vision" })}
            </h2>
            
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <dt className="font-semibold text-xl text-gray-900">
                {visionsubtitle1}
              </dt>
              <dd className="mt-1 text-gray-600">{visiontext1}</dd>
            </div>

            <div>
              <dt className="font-semibold text-xl text-gray-900">
                {visionsubtitle2}
              </dt>
              <dd className="mt-1 text-gray-600">{visiontext2}</dd>
            </div>

            <div>
              <dt className="font-semibold text-xl text-gray-900">
                {visionsubtitle3}
              </dt>
              <dd className="mt-1 text-gray-600">{visiontext3}</dd>
            </div>

            <div>
              <dt className="font-semibold text-xl text-gray-900">
                {visionsubtitle4}
              </dt>
              <dd className="mt-1 text-gray-600">{visiontext4}</dd>
            </div>

            <div>
              <dt className="font-semibold text-xl text-gray-900">
                {visionsubtitle5}
              </dt>
              <dd className="mt-1 text-gray-600">{visiontext5}</dd>
            </div>

            <div>
              <dt className="font-semibold text-xl text-gray-900">
                {visionsubtitle6}
              </dt>
              <dd className="mt-1 text-gray-600">{visiontext6}</dd>
            </div>
          </dl>
        </div>

        {/* Our team */}

        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8 mb-12">
          <div className="mb-20">
            <div className="mx-auto max-w-4xl text-center ">
              <p className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl">
                {intl.formatMessage({ id: "about_us_team" })}
              </p>
            </div>
            <p className=" relative mt-6 leading-8 text-gray-600 sm:max-w-md lg:max-w-none text-center text-lg  px-6">
              {ourteamtext}
            </p>
          </div>
          <div className="px-6 ">
            <Image
              className="aspect-[5/2] w-full object-cover rounded-3xl"
              src={ourteamimg.sizes.large}
              alt=""
              width={ourteamimg.sizes["large-width"]}
              height={ourteamimg.sizes["large-height"]}
              
            />
          </div>
                      
        </div>

        {/* TEAM DESCRIPTION */}

        <div className="sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8 mb-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0 pr-2">
          <h2 className="text-3xl font-bold tracking-tight text-accent-1 sm:text-3xl mb-16">{intl.formatMessage({ id: "about_us_team_sub" })}</h2>

          <p className="font-semibold text-2xl text-gray-900">{ourteamsubtitledescription1}</p>
          <p className="mt-6 text-lg leading-8 text-gray-600 mb-12">
          {ourteamtextdescrption1}
          </p>

          <p className="font-semibold text-2xl text-gray-900">{ourteamsubtitledescription2}</p>
          <p className="mt-6 text-lg leading-8 text-gray-600 mb-12">
          {ourteamtextdescrption2}
          </p>

          <p className="font-semibold text-2xl text-gray-900">{ourteamsubtitledescription3}</p>
          <p className="mt-6 text-lg leading-8 text-gray-600 mb-12">
          {ourteamtextdescrption3}
          </p>

          <p className="font-semibold text-2xl text-gray-900">{ourteamsubtitledescription4}</p>
          <p className="mt-6 text-lg leading-8 text-gray-600 mb-12">
          {ourteamtextdescrption4}
          </p>


          <p className="font-semibold text-2xl text-gray-900">{ourteamsubtitledescription5}</p>
          <p className="mt-6 text-lg leading-8 text-gray-600 mb-12 css-wordpress">
          {ourteamtextdescrption5}

          </p>

        </div>
        {/* photo + rol */}
        <div
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"

        > 
            {/* member1 */}
            {teammembern1 && (<div>
              <Image className="aspect-[2/2] w-full rounded-2xl object-cover"
               src={teammemberimg1.sizes.medium_large} 
               alt=""
               width={teammemberimg1.sizes["medium_large-width"]}
               height={teammemberimg1.sizes["medium_large-height"]} />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{teammembern1}</h3>
              <p className="text-base leading-7 text-gray-600">{teammemberp1}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{teammemberd1}</p>
             
            </div>)} 

            {/* url:{JSON.stringify(teammemberimg1.sizes.medium_large)}<br></br> */}
           {/* ancho:{JSON.stringify(icon1.sizes["thumbnail-width"])}<br></br>
            alto:{JSON.stringify(icon1.sizes["thumbnail-height"])}<br></br> */}

            {/* memeber2 */}
            {teammembern2 && (<div>
              <Image className="aspect-[2/2] w-full rounded-2xl object-cover" 
              src={teammemberimg2.sizes.medium_large} 
              alt="" 
              width={teammemberimg2.sizes["medium_large-width"]}
              height={teammemberimg2.sizes["medium_large-height"]}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{teammembern2}</h3>
              <p className="text-base leading-7 text-gray-600">{teammemberp2}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{teammemberd2}</p>
             
            </div>)}

            {/* memeber3 */}
            {teammembern3 && (<div>
              <Image className="aspect-[2/2] w-full rounded-2xl object-cover" 
              src={teammemberimg3.sizes.medium_large} 
              alt="" 
              width={teammemberimg3.sizes["medium_large-width"]}
              height={teammemberimg3.sizes["medium_large-height"]}
              
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{teammembern3}</h3>
              <p className="text-base leading-7 text-gray-600">{teammemberp3}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{teammemberd3}</p>
             
            </div>)}

            {/* memeber4 */}
            {teammembern4 && (<div>
              <Image className="aspect-[2/2] w-full rounded-2xl object-cover" 
              src={teammemberimg4.sizes.medium_large} 
              alt=""
              width={teammemberimg4.sizes["medium_large-width"]}
              height={teammemberimg4.sizes["medium_large-height"]}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{teammembern4}</h3>
              <p className="text-base leading-7 text-gray-600">{teammemberp4}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{teammemberd4}</p>
             
            </div>)}

            {/* member5 */}
            {teammembern5 && (<div>
              <Image className="aspect-[2/2] w-full rounded-2xl object-cover" 
              src={teammemberimg5.sizes.medium_large} 
              alt=""
              width={teammemberimg5.sizes["medium_large-width"]}
              height={teammemberimg5.sizes["medium_large-height"]}
               />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{teammembern5}</h3>
              <p className="text-base leading-7 text-gray-600">{teammemberp5}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{teammemberd5}</p>
             
            </div>)}

            {/* memeber6 */}
            {teammembern6 && (<div>
              <Image className="aspect-[2/2] w-full rounded-2xl object-cover" 
              src={teammemberimg6.sizes.medium_large} 
              alt=""
              width={teammemberimg6.sizes["medium_large-width"]}
              height={teammemberimg6.sizes["medium_large-height"]}
               />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{teammembern6}</h3>
              <p className="text-base leading-7 text-gray-600">{teammemberp6}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{teammemberd6}</p>
             
            </div>)}

            {/* memeber7 */}
            {teammembern7 && (<div>
              <Image className="aspect-[2/2] w-full rounded-2xl object-cover" 
              src={teammemberimg7.sizes.medium_large} 
              alt=""
              width={teammemberimg7.sizes["medium_large-width"]}
              height={teammemberimg7.sizes["medium_large-height"]}
               />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{teammembern7}</h3>
              <p className="text-base leading-7 text-gray-600">{teammemberp7}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{teammemberd7}</p>
             
            </div>)}

            {/* memeber8 */}
            {teammembern8 && (<div>
              <Image className="aspect-[2/2] w-full rounded-2xl object-cover" 
              src={teammemberimg8.sizes.medium_large}
              alt=""
              width={teammemberimg8.sizes["medium_large-width"]}
              height={teammemberimg8.sizes["medium_large-height"]}
               />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{teammembern8}</h3>
              <p className="text-base leading-7 text-gray-600">{teammemberp8}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{teammemberd8}</p>
             
            </div>)}

          
        </div>
      </div>
    </div>



      </main>
    </div>







    
    


  );
}



















