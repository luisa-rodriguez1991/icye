import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Contributors({ text, img }: any) {
  const intl = useIntl();
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="relative isolate overflow-hidden bg-accent-2 px-5 py-12 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="flex gap-12 lg:gap-24 flex-col lg:flex-row mx-auto max-w-7xl  justify-around pt-5 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2  ">
          {/* titulo y texto */}
          <div className="mx-auto w-full max-w-xl lg:mx-0  sm:text-center lg:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl">
              {intl.formatMessage({ id: "contributors_title" })}
            </h2>
            <p className="mt-6 text-lg leading-8 ">{text}</p>
            <div className="mt-8 flex items-center gap-x-6">
              <Link
                locale={locale}
                href="/contact"
                className="text-sm font-semibold text-gray-500 "
              >
                {intl.formatMessage({ id: "contributors_contact_us" })}{" "}
                <span className="ml-1" aria-hidden="true">
                  &rarr;
                </span>{" "}
              </Link>
            </div>
          </div>

          {/* iconos */}
          <div className="mx-auto w-full max-w-xl  items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            <img className="" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
