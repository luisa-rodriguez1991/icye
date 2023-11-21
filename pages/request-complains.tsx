import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import { useIntl } from "react-intl";
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import { getPage } from "@/lib/api";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";


export default function Request({page}:any) {
  const [open, setOpen] = useState(false)

  const router = useRouter();
  const { locale } = router;

  const intl = useIntl()
  return (
    <Layout onOpenForm={setOpen} openForm={open}>

       <Head>
        <link rel="canonical" href={`https://www.icyecolombia.com/request-complains`} />
        <meta name="robots" content="noindex, nofollow"/>
      </Head>
      <Breadcrumb miVariable={intl.formatMessage({id:"breadcrumb_Request"})}/>
      
        <div className="bg-white px-6 pb-24 lg:px-8 pt-12"> 
          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700"> 
            <p className="text-base font-semibold leading-7 text-indigo-600">ICYE</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{intl.formatMessage({id:"breadcrumb_Request"})}</h1>
            <div className="mt-8" dangerouslySetInnerHTML={{__html:page.content.rendered}}/>
          </div>
        </div>
      
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (locale) => { 
  const pageInfo = await getPage(304,locale) 

  return {
      props: {page: pageInfo}
  }
}