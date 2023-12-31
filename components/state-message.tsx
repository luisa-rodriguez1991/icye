import {
  ArchiveBoxXMarkIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
import { useIntl } from "react-intl";

export default function StateMessage({ h1, p, p2, icon, a }: any) {
  const intl = useIntl();
  return (
    <div>
      <div className="shadow-xl p-6 bg-accent-2 h-[400px] flex flex-col items-center justify-center mt-6 rounded-xl text-center">
        {icon === "checkicon" ? (
          <CheckCircleIcon className="text-green-600 h-16 w-16" />
        ) : (
          <ArchiveBoxXMarkIcon className="text-gray-600 h-16 w-16" />
        )}


        <h1 className=" text-base text-green-600">
          {intl.formatMessage({ id: h1 })}
        </h1>

        <p className="mt-2 text-2xl text-accent-1 font-bold tracking-tight">
          {intl.formatMessage({ id: p })}
        </p>
        <p className="mt-2 text-base text-gray-600">
          {intl.formatMessage({ id: p2 })}
        </p>
        <a
          className="mt-2 text-base text-gray-900"
          target="_blank" href="https://wa.link/2bk6ie"
        >
          {a}
        </a>
      </div>
    </div>

    
  );
}
