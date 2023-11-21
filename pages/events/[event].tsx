import Layout from "@/components/layout";
import { getAllEvents, getDetailProject, getAllPost } from "@/lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import Breadcrumb from "@/components/breadcrump";

import { CalendarIcon, MapPinIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Event({ page }: any) {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const { locale } = router;

  return (
    <Layout onOpenForm={setOpen} openForm={open}>
      <Head>
        <link
          rel="canonical"
          href={`https://www.icyecolombia.com/${page.slug}`}
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Breadcrumb
        middleRoute="/events"
        middleRouteName="Events"
        miVariable={page.title.rendered}
      />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-8 py-8  lg:px-8 relative">
          <div className="lg:flex lg:items-center lg:justify-between"></div>

          {/* contenido y foto */}
          <div className="relative isolate overflow-hidden  py-12 lg:overflow-visible">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 ">
                <div className="lg:pr-4">
                  <div className="min-w-0 flex-1 ">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                      {page.title.rendered}
                    </h2>

                    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 mb-12">
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <MapPinIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        {page.acf.location}
                      </div>

                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <CalendarIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        {page.acf.event_date}
                      </div>
                    </div>
                  </div>
                  <div
                    className="lg:max-w-lg"
                    dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                  />
                </div>
              </div>
              <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img
                  className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                  src={page.jetpack_featured_media_url}
                  alt=""
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
  const pageInfo = await getDetailProject(params?.event, locale);

  return {
    props: { page: pageInfo[0] },
  };
};

export const getStaticPaths: GetStaticPaths = async (locale) => {
  const allProjects = await getAllEvents(locale);
  let finalArray = [];
  const en = allProjects.map((i: any) => `/en/events/${i.slug}`);
  const es = allProjects.map((i: any) => `/es/events/${i.slug}`);
  finalArray = [...es, ...en];

  return {
    paths: finalArray || [],
    fallback: false,
  };
};
