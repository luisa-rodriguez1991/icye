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
  

          <main className="mx-auto max-w-7xl px-6 pt-7 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
              <h1 className="mt-6 mb-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl">
                {intl.formatMessage({ id: "projects_title" })}
              </h1>

         
            </div>

            <section aria-labelledby="products-heading" className="pb-24  ">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="col-span-4 lg:col-span-1 justify-around lg:justify-normal flex flex-row lg:flex-col">
                  <div className="space-y-4 border-b border-gray-300 pb-6 text-sm font-medium text-gray-900">
                    <h3 className="mt-3 flow-root flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
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



                    <h3 className="md:hidden mt-3 flow-root flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        {intl.formatMessage({ id: "project_filter_title_3" })}
                      </span>
                    </h3>

                      {listInterests.map((option: any, optionIdx: any) => (
                        <div key={option.id} className="md:hidden flex items-center">
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
                    <h3 className="hidden md:block mt-3 flow-root flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        {intl.formatMessage({ id: "project_filter_title_3" })}
                      </span>
                    </h3>

                      {listInterests.map((option: any, optionIdx: any) => (
                        <div key={option.id} className="flex items-center hidden md:block">
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
  const pageInfoCountries = await getCategoriesByParent(17, locale, true);
  const pageInfoInterests = await getCategoriesByParent(19, locale, true);
  const pageInfoTerms = await getCategoriesByParent(18, locale, false);

  return {
    props: {
      listCountries: pageInfoCountries,
      listInterests: pageInfoInterests,
      listTerms: pageInfoTerms,
    },
  };
};
