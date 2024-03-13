import { DocumentArrowDownIcon } from "@heroicons/react/20/solid";
import Layout from "@/components/layout";
import {
  getAllProjects,
  getCategoryNameById,
  getDetailProject, getPost,
} from "@/lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import Breadcrumb from "@/components/breadcrump";
import Flag from "react-world-flags";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useIntl } from "react-intl";

export default function Project({ page, listCategories, footer }: any) {
  const [open, setOpen] = useState(false);
  const intl = useIntl();
  const router = useRouter();
  const { locale } = router;
  return (
    <Layout footerInfo={footer} onOpenForm={setOpen} openForm={open}>
      <Head>
        <title>{intl.formatMessage({id:"title_project"})}</title>
        <link
          rel="canonical"
          href={`https://www.icyecolombia.com/${page.slug}`}
        />
        
      </Head>
      <Breadcrumb
        middleRoute="/projects"
        middleRouteName="Projects"
        miVariable={page.title.rendered}
      />

      <div className="bg-white">
        <div className="pt-6">
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 ">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={page.acf.page_project_img_1.sizes.large}
                alt={page.title.rendered}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={page.acf.page_project_img_2.sizes.large}
                  alt={page.title.rendered}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={page.acf.page_project_img_3.sizes.large}
                  alt={page.title.rendered}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={page.acf.page_project_img_4.sizes.large}
                alt={page.title.rendered}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Project info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 px-6 py-6 rounded-t-xl bg-accent-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl flex items-center">
                {page.title.rendered}
                <span className="ml-auto inline-flex items-center gap-x-1.5 rounded-full bg-white px-2 py-1 text-xs font-medium text-accent-1">
                  <svg
                    className="h-1.5 w-1.5 fill-gray-400"
                    viewBox="0 0 6 6"
                    aria-hidden="true"
                  >
                    <circle cx={3} cy={3} r={3} />
                  </svg>
                  {page.acf.project_code}
                </span>
              </h1>
            </div>

            {/* Options */}
            <div className=" flex flex-col pt-4 lg:row-span-3 px-6 lg:mt-0 bg-accent-2 lg:bg-white ">
              <div className=" bg-white p-6 rounded-lg lg:p-0 lg:rounded-none">
                <h2 className="text-3xl text-accent-1 font-bold ">
                  Basic Information
                </h2>
                <div className="mt-3">
                  Categories:
                  <div className="flex flex-wrap items-center gap-2 my-3 ">
                    {listCategories.map((category: any) => (
                      <span className=" rounded-full bg-accent-2 px-2 py-1 text-xs font-medium text-accent-1">
                        {category}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center mb-4 mt-2 ml-1 text-black ">
                    Country:{" "}
                    <Flag
                      className="ml-4 mt-1"
                      code={page.acf.country}
                      width="20"
                      height="16"
                    />
                  </div>
                </div>

                {page.acf.pdf && (
                  <div className="flex items-center text-black">
                    Download PDF:{" "}
                    <a 
                      href={page.acf.pdf}
                      target="_blank"
                      title={`Download PDF file about the project: ${page.title.rendered}`}
                    >
                      <DocumentArrowDownIcon className="text-accent-1 h-6 w-6" />
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="py-10 px-6 rounded-b-xl  bg-accent-2  lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div
                  className="space-y-6 css-wordpress text-black"
                  dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const pageInfo = await getDetailProject(params?.project, locale);
  const listCategoriesIds = pageInfo[0].categories;
  const categoryNames = await getCategoryNameById(listCategoriesIds, locale);
  const footerInfo = await getPost(772, locale);

  return {
    props: { page: pageInfo[0], listCategories: categoryNames, footer:footerInfo },
  };
};

export const getStaticPaths: GetStaticPaths = async (locale) => {
  const list = await getAllProjects("en");

  let finalArray = [];
  const en = list.map((i: any) => `/en/projects/${i.slug}`);
  const es = list.map((i: any) => `/es/projects/${i.slug}`);
  finalArray = [...es, ...en];

  return {
    paths: finalArray || [],
    fallback: false,
  };
};
