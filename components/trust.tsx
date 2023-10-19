import { useIntl } from "react-intl";


export default function Trust() {
    const intl = useIntl()

    return (
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">{intl.formatMessage({id:"trust_org"})}</h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10  lg:mx-0 lg:max-w-none lg:grid-cols-4">
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



