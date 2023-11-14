import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import { useIntl } from "react-intl";
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import { getPage } from "@/lib/api";
import { GetStaticProps } from "next";

export default function Terms({page}:any) {
  

  console.log(page)
  const intl = useIntl()

  return (

    <Layout>

      <Breadcrumb miVariable={intl.formatMessage({id:"breadcrumb_terms"})}/>

      <div className="bg-white px-6 pb-24 lg:px-8 pt-12">
      <div className="mx-auto  max-w-4xl sm:px-6 lg:px-8 text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">ICYE</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{intl.formatMessage({id:"breadcrumb_terms"})}</h1>
        <div className="mt-8" dangerouslySetInnerHTML={{__html:page.content.rendered}}/>
      
       
      </div>
    </div>
    </Layout>
   
  )
}
export const getStaticProps: GetStaticProps = async () => { 
  const pageInfo = await getPage(581) 

  return {
      props: {page: pageInfo}
  }
}