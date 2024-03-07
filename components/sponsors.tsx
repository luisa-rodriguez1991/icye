import { useIntl } from "react-intl";
import Image from 'next/image'

export default function Sponsors({
  text,
  icon1,
  icon2,
  icon3,
  icon4,
  texticon1,
  texticon2,
  texticon3,
  texticon4,
}: any) {
  const intl = useIntl();

  // Alaid organizations

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center ">
          <span className="  bg-gradient-to-r from-accent-1 via-red-400 to-blue-400 inline-block text-transparent bg-clip-text"></span>
          <div
            className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "sponsors_title" }),
            }}
          />
        </div>
        <p className="mx-auto my-20 max-w-6xl text-center text-lg leading-8 text-gray-700">
          {text} 
        </p>

        <div className="mx-auto mt-20 mb-8 grid  grid-cols-4 items-center gap-x-12 gap-y-10  lg:mx-0 lg:max-w-none lg:grid-cols-4">

          <div className="text-center col-span-2 lg:col-span-1 ">
            <Image
              className="max-h-24 w-full object-contain mb-4 "
              src={icon1.sizes.medium}
              alt="Statamic"
              width={icon1.sizes["medium-width"]}
              height={icon1.sizes["medium-height"]}
            />
            <p className="text-black text-lg">{texticon1}</p>
          </div>

          <div className="text-center col-span-2 lg:col-span-1 ">
            <Image
              className="max-h-24 w-full object-contain mb-4"
              src={icon2.sizes.medium}
              alt="Statamic"
              width={icon2.sizes["medium-width"]}
              height={icon2.sizes["medium-height"]}
            />
            <p className="text-black text-lg">{texticon2}</p>
          </div>

          <div className="text-center col-span-2 lg:col-span-1 ">
            <Image
              className="max-h-24 w-full object-contain mb-4 "
              src={icon3.sizes.medium}
              alt="Statamic"
              width={icon3.sizes["medium-width"]}
              height={icon3.sizes["medium-height"]}
            />
            <p className="text-black text-lg">{texticon3}</p>
          </div>

          <div className="text-center col-span-2 lg:col-span-1">
            <Image
              className="max-h-24 w-full object-contain mb-4"
              src={icon4.sizes.medium}
              alt="Statamic"
              width={icon4.sizes["medium-width"]}
              height={icon4.sizes["medium-height"]}
            />
            <p className="text-black text-lg">{texticon4}</p>
          </div>
        
        </div>
        
      </div>
    </div>
  );
}
