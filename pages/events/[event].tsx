import Layout from "@/components/layout";
import {getAllEvents, getDetailProject, getAllPost, getPost} from "@/lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import Breadcrumb from "@/components/breadcrump";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useIntl } from "react-intl";
import Image from 'next/image'

export default function Event({ page, footer }: any) {
  const [open, setOpen] = useState(false);
  const intl = useIntl();
  const router = useRouter();
  const { locale } = router;

  return (
    <Layout footerInfo={footer} onOpenForm={setOpen} openForm={open}>
      <Head>
      <title>{intl.formatMessage({id:"title_event"})}</title>
        <link
          rel="canonical"
          href={`https://www.icyecolombia.com/${page.slug}`}
        />
        
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
                    <h2 className="text-2xl font-bold leading-7 text-gray-900  sm:text-3xl sm:tracking-tight">
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
                          <time dateTime={page.acf.event_date}>
                            <span className="capitalize">
                            {new Date(page.acf.event_date).toLocaleDateString(locale, {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                              hour12: true
                            })}
                            </span>
                          </time>
                        
                      </div>
                    </div>
                  </div>
                  <div
                    className="lg:max-w-lg css-wordpress text-black"
                    dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                  />
                </div>
              </div>
              <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <Image
                  className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                  src={page._embedded['wp:featuredmedia']['0'].media_details.sizes.large?page._embedded['wp:featuredmedia']['0'].media_details.sizes.large.source_url:page._embedded['wp:featuredmedia']['0'].media_details.sizes.medium.source_url}
                  alt={page._embedded['wp:featuredmedia']['0'].alt_text}
                  width={page._embedded['wp:featuredmedia']['0'].media_details.sizes.large?page._embedded['wp:featuredmedia']['0'].media_details.sizes.large.width:page._embedded['wp:featuredmedia']['0'].media_details.sizes.medium.width}
                  height={page._embedded['wp:featuredmedia']['0'].media_details.sizes.large?page._embedded['wp:featuredmedia']['0'].media_details.sizes.large.height:page._embedded['wp:featuredmedia']['0'].media_details.sizes.medium.height}
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
  const footerInfo = await getPost(772, locale);

  return {
    props: { page: pageInfo[0], footer:footerInfo },
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
