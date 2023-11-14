import { useIntl } from "react-intl";

export default function Trust({ title, item1, item2, item3, item4, item1text, item2text, item3text, item4text}:any) {
  const intl = useIntl();

  return (
    <div className="bg-white py-24 sm:pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          {title}
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10  lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:mt-12 ">
          <div className=" text-center col-span-2 lg:col-span-1 ">
            <img
              className="max-h-12 w-full object-contain mb-4"
              src={item1}
              alt="Reform"
              width={150}
              height={100}
            />
            <p>{item1text}</p>
          </div>

          <div className=" text-center col-span-2 lg:col-span-1">
            <img
              className=" max-h-12 w-full object-contain mb-4"
              src={item2}
              alt="Tuple"
              width={150}
              height={100}
            />
            <p>{item2text}</p>
          </div>

          <div className=" text-center col-span-2 lg:col-span-1">
            <img
              className=" max-h-12 w-full object-contain mb-4"
              src={item3}
              alt="SavvyCal"
              width={150}
              height={100}
            />
            <p>{item3text}</p>
          </div>

          <div className=" text-center col-span-2 lg:col-span-1">
            <img
              className=" max-h-12 w-full object-contain mb-4"
              src={item4}
              alt="Statamic"
              width={150}
              height={100}
            />
            <p>{item4text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
