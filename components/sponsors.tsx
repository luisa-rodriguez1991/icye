import { useIntl } from "react-intl";


export default function Sponsors() {
    
    const intl = useIntl()

    return (
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center ">

       
            <p className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl">
              {intl.formatMessage({id:"sponsors_title"})}
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore velit esse ad. Magnam cupiditate cum ipsam cumque debitis ad, qui mollitia sed maiores dolores omnis, sit vitae corrupti laborum inventore.

          </p>
        {/* <h2 className=" text-center text-2xl font-bold leading-10 tracking-tight text-accent-1">Organizaciones aliadas</h2> */}
            <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10  lg:mx-0 lg:max-w-none lg:grid-cols-4">
                <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src="/img/onu.png"
                    alt="Reform"
                    width={158}
                    height={48}
                />
                <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src="/img/unesco.png"
                    alt="Tuple"
                    width={158}
                    height={48}
                />
                <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src="/img/erasmus.png"
                    alt="SavvyCal"
                    width={158}
                    height={48}
                />
                <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src="/img/ccivs.png"
                    alt="Statamic"
                    width={158}
                    height={48}
                />
            </div>
        </div>
        </div>
    )
}