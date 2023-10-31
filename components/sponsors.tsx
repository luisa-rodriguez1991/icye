import { useIntl } from "react-intl";


export default function Sponsors({text, icon1, icon2, icon3, icon4}) {
    
    const intl = useIntl()

    return (
        <div className="bg-white py-6 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center ">

       
            <p className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl">
              {intl.formatMessage({id:"sponsors_title"})}
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            {text}
          </p>
        {/* <h2 className=" text-center text-2xl font-bold leading-10 tracking-tight text-accent-1">Organizaciones aliadas</h2> */}
            <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10  lg:mx-0 lg:max-w-none lg:grid-cols-4">
                <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={icon1}
                    alt="Reform"
                    width={150}
                    height={100}
                />
                <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={icon2}
                    alt="Tuple"
                    width={150}
                    height={100}
                />
                <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={icon3}
                    alt="SavvyCal"
                    width={150}
                    height={100}
                />
                <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={icon4}
                    alt="Statamic"
                    width={150}
                    height={100}
                />
            </div>
        </div>
        </div>
    )
}