import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import { Key, ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode } from "react";

export default function SearchContent({ searchinfo }: any) {
  const router = useRouter();
  const { locale } = router;
  return (
    <ul
      role="list"
      className="divide-y divide-gray-100 overflow-hidden shadow-xl p-6 bg-accent-2 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
    >
      {searchinfo &&
        searchinfo.map((result: { id: Key | null | undefined; categories: number[]; slug: any; title: { rendered: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | PromiseLikeOfReactNode | null | undefined; }; excerpt: { rendered: any; }; }) => (
          <li
            key={result.id}
            className="relative flex justify-between gap-x-6 px-4 py-5 bg-white sm:px-6"
          >
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-xl font-semibold leading-6 text-gray-900">
                  {result.categories.includes(3) && (
                    <a href={`/${locale}/blog/${result.slug}`}>
                      <span className="absolute inset-x-0 -top-px bottom-0" />
                      {result.title.rendered}
                    </a>
                  )}

                  {result.categories.includes(4) && (
                    <a href={`/${locale}/projects/${result.slug}`}>
                      <span className="absolute inset-x-0 -top-px bottom-0" />
                      {result.title.rendered}
                    </a>
                  )}

                  {result.categories.includes(5) && (
                    <a href={`/${locale}/events/${result.slug}`}>
                      <span className="absolute inset-x-0 -top-px bottom-0" />
                      {result.title.rendered}
                    </a>
                  )}
                </p>
                <div className="mt-1 flex text-xs leading-5 text-gray-500">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: result.excerpt.rendered,
                    }}
                    className="relative truncate"
                  />
                </div>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-x-4">
              <ChevronRightIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </div>
          </li>
        ))}
    </ul>
  );
}
