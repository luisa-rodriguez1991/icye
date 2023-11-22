import Link from "next/link";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import Flag from "react-world-flags";

export default function Project({ item }: any) {
  const router = useRouter();
  const { locale } = router;

  const intl = useIntl();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-6 pb-16 sm:px-6 sm:py-10 lg:max-w-7xl">
        <div className="relative overflow-hidden rounded-lg lg:h-96">
          <div className="absolute inset-0">
            <img
              src={item.jetpack_featured_media_url}
              alt={item.title.rendered}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
          <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-accent-1 bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
            <div>
              <div className="flex gap-3 items-center py-3">
                <div>
                  <Flag code={item.acf.country} width="20" height="16" />
                </div>
                <h2 className="text-xl font-bold text-white flex items-center">
                  {item.title.rendered}
                  <span className="ml-2 inline-flex items-center gap-x-1.5 rounded-full bg-accent-2 px-2 py-1 text-xs font-medium text-accent-1">
                    <svg
                      className="h-1.5 w-1.5 fill-gray-400"
                      viewBox="0 0 6 6"
                      aria-hidden="true"
                    >
                      <circle cx={3} cy={3} r={3} />
                    </svg>
                    {item.acf.project_code}
                  </span>
                </h2>
              </div>
              <div
                className="mt-1 text-sm text-gray-300"
                dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
              />
            </div>
            <Link
              locale={locale}
              href={`/projects/${item.slug}`}
              className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
            >
              {intl.formatMessage({ id: "project_button" })}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
