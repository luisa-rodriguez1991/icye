import { useIntl } from "react-intl";


export default function Trust({title, item1, item2, item3, item4}) {
    const intl = useIntl()

    return (
        <div className="bg-white py-24 sm:pt-24 pb-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">{title}</h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10  lg:mx-0 lg:max-w-none lg:grid-cols-4">
                <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={item1}
                    alt="Reform"
                    width={150}
                    height={100}
                />
                <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={item2}
                    alt="Tuple"
                    width={150}
                    height={100}
                />
                <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={item3}
                    alt="SavvyCal"
                    width={150}
                    height={100}
                />
                <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={item4}
                    alt="Statamic"
                    width={150}
                    height={100}
                />
            </div>
        </div>
        </div>
    )
}



