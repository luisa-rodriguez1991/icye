import { useIntl } from "react-intl";

export default function Sponsors({ text, icon1, icon2, icon3, icon4, texticon1, texticon2, texticon3, texticon4 }:any) {
  const intl = useIntl();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center ">
          <p className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl">
            {intl.formatMessage({ id: "sponsors_title" })}
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          {text}
        </p>
        {/* <h2 className=" text-center text-2xl font-bold leading-10 tracking-tight text-accent-1">Organizaciones aliadas</h2> */}
        <div className="mx-auto mt-20 mb-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10  lg:mx-0 lg:max-w-none lg:grid-cols-4">

          <div className="flex flex-col items-center lg:ml-12">
            <img
              className="max-h-12 w-full object-contain mb-4 "
              src={icon1}
              alt="Statamic"
              width={147}
              height={48}
            />
            <p>{texticon1}</p>
          </div>

          <div className="flex flex-col items-center lg:ml-12">
            <img
              className="max-h-12 w-full object-contain mb-4"
              src={icon2}
              alt="Statamic"
              width={147}
              height={48}
            />
            <p>{texticon2}</p>
          </div>

          <div className="flex flex-col items-center lg:ml-12">
            <img
              className="max-h-12 w-full object-contain mb-4 "
              src={icon3}
              alt="Statamic"
              width={147}
              height={48}
            />
            <p>{texticon3}</p>
          </div>

          <div className="flex flex-col items-center lg:ml-12">
            <img
              className="max-h-12 w-full object-contain mb-4"
              src={icon4}
              alt="Statamic"
              width={147}
              height={48}
            />
            <p>{texticon4}</p>
          </div>

         
        </div>
      </div>
    </div>
  );
}
