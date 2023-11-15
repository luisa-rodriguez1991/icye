import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import { useIntl } from "react-intl";
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import { GetStaticProps } from "next";
import { getPage } from "@/lib/api";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Privacy({page}:any) {
  
  const router = useRouter();
  const { locale } = router;
  const intl = useIntl()

  return (

    <Layout>
      <Head>
        <link rel="canonical" href={`https://www.icyecolombia.com/privacy-policy`} />
        <meta name="robots" content="noindex, nofollow"/>
      </Head>

      <Breadcrumb miVariable={intl.formatMessage({id:"breadcrumb_privacy"})}/>


      <div className="bg-white px-6 pb-24 lg:px-8 pt-12">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">ICYE</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{intl.formatMessage({id:"breadcrumb_privacy"})}</h1>
        <div className="mt-8" dangerouslySetInnerHTML={{__html:page.content.rendered}}/>

      
       
      </div>
    </div>
    </Layout>
   
  )
}

export const getStaticProps: GetStaticProps = async (locale) => { 
  const pageInfo = await getPage(575,locale) 

  return {
      props: {page: pageInfo}
  }
}