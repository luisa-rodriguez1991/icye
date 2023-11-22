import Breadcrumb from "@/components/breadcrump";
import ContentProjects from "@/components/content-projects";
import Layout from "@/components/layout";
import { getAllPost, getAllProjects, getCategoriesByParent } from "@/lib/api";
import { GetStaticProps } from "next";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon, MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";

export default function Projects({
  listCountries,
  listInterests,
  listTerms,
}: any) {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const { locale } = router;
  const intl = useIntl();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [list, setList] = useState([]);
  const [excludedListFilters, setExcludedListFilters] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      `http://184.72.130.92/wp-json/wp/v2/posts?categories=4&_fields=acf,jetpack_featured_media_url,id,content,slug,date,title,excerpt,categories&lang=${locale}${
        Object.keys(excludedListFilters).length > 0
          ? `&categories_exclude=${excludedListFilters}`
          : ""
      }`
    )
      .then((response) => response.json())
      .then((dog) => setList(dog));
  }, [excludedListFilters, locale]); // Only re-run the effect if count changes

  const setFilters = (categoryId: any, checked: any) => {
    checked ? removeCategory(categoryId) : addCategory(categoryId);
  };

  const removeCategory = (categoryId: any) => {
    setExcludedListFilters(excludedListFilters.filter((a) => a !== categoryId));
  };

  const addCategory = (categoryId: any) => {
    setExcludedListFilters([...excludedListFilters, categoryId]);
  };

  return (
    <Layout onOpenForm={setOpen} openForm={open}>
      <Breadcrumb
        miVariable={intl.formatMessage({ id: "breadcrumb_projects" })}
      />

      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        {intl.formatMessage({ id: "project_filter" })}
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      <h3 className="sr-only">Categories</h3>
                      <ul
                        role="list"
                        className="px-2 py-3 font-medium text-gray-900"
                      >
                        {listTerms.map((option: any, optionIdx: any) => (
                          <div key={option.id} className="flex items-center">
                            <input
                              id="lt"
                              name="lt"
                              onChange={(x) =>
                                setFilters(option.id, x.target.checked)
                              }
                              type="checkbox"
                              defaultChecked={true}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-lt`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.name}
                            </label>
                          </div>
                        ))}
                      </ul>

                      <Disclosure
                        as="div"
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              {/* responsive paises categoria boton de + */}
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {intl.formatMessage({
                                    id: "project_filter_title_2",
                                  })}
                                  {/* esto hay que ponerle version en ingle */}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {/* lista paises responsive */}
                                {listCountries.map(
                                  (option: any, optionIdx: any) => (
                                    <div
                                      key={option.id}
                                      className="flex items-center"
                                    >
                                      <input
                                        id={`filter-mobile-${option.id}-${optionIdx}`}
                                        name={`${option.id}[]`}
                                        type="checkbox"
                                        defaultChecked={true}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${option.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                      >
                                        {option.name}
                                      </label>
                                    </div>
                                  )
                                )}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>

                      <Disclosure
                        as="div"
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {intl.formatMessage({
                                    id: "project_filter_title_3",
                                  })}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {listInterests.map(
                                  (option: any, optionIdx: any) => (
                                    <div
                                      key={option.id}
                                      className="flex items-center"
                                    >
                                      <input
                                        id={`filter-mobile-${option.id}-${optionIdx}`}
                                        name={`${option.id}[]`}
                                        type="checkbox"
                                        defaultChecked={true}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${option.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                      >
                                        {option.name}
                                      </label>
                                    </div>
                                  )
                                )}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl px-6 pt-7 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
              <h1 className="mt-6 mb-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl">
                {intl.formatMessage({ id: "projects_title" })}
              </h1>

              <div className="flex items-center ">
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24  ">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  <div className="space-y-4 border-b border-gray-300 pb-6 text-sm font-medium text-gray-900">
                    <h3 className="mt-6 flow-root flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        {intl.formatMessage({ id: "project_filter_title_1" })}
                      </span>
                    </h3>

                    {listTerms.map((option: any) => (
                      <div key={option.id} className="flex items-center">
                        <input
                          id="lt"
                          name="lt"
                          onChange={(x) =>
                            setFilters(option.id, x.target.checked)
                          }
                          type="checkbox"
                          defaultChecked={true}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-lt`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {option.name}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4 border-b border-gray-300 pb-6 text-sm font-medium text-gray-900">
                    <h3 className="mt-3 flow-root flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        {intl.formatMessage({ id: "project_filter_title_2" })}
                      </span>
                    </h3>

                    <div className="space-y-4  ">
                      {listCountries.map((option: any, optionIdx: any) => (
                        <div key={option.id} className="flex items-center">
                          <input
                            id={`filter-${option.id}-${optionIdx}`}
                            name={`${option.id}[]`}
                            onChange={(x) =>
                              setFilters(option.id, x.target.checked)
                            }
                            type="checkbox"
                            defaultChecked={true}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor={`filter-${option.id}-${optionIdx}`}
                            className="ml-3 text-sm text-gray-600"
                          >
                            {option.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 border-b border-gray-300 pb-6 text-sm font-medium text-gray-900">
                    <h3 className="mt-3 flow-root flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        {intl.formatMessage({ id: "project_filter_title_3" })}
                      </span>
                    </h3>

                    <div className="space-y-4">
                      {listInterests.map((option: any, optionIdx: any) => (
                        <div key={option.id} className="flex items-center">
                          <input
                            id={`filter-${option.id}-${optionIdx}`}
                            name={`${option.id}[]`}
                            type="checkbox"
                            defaultChecked={true}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor={`filter-${option.id}-${optionIdx}`}
                            className="ml-3 text-sm text-gray-600"
                          >
                            {option.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </form>

                {/* Product grid */}
                <ContentProjects list={list}></ContentProjects>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const pageInfoCountries = await getCategoriesByParent(17, locale);
  const pageInfoInterests = await getCategoriesByParent(19, locale);
  const pageInfoTerms = await getCategoriesByParent(18, locale);

  return {
    props: {
      listCountries: pageInfoCountries,
      listInterests: pageInfoInterests,
      listTerms: pageInfoTerms,
    },
  };
};
