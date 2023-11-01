import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import { useIntl } from "react-intl";
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import { getPage } from "@/lib/api";
import { GetStaticProps } from "next";

export default function Request({page}) {


  console.log(page)
  const intl = useIntl()
  return (
    <Layout>
      <Breadcrumb miVariable={intl.formatMessage({id:"breadcrumb_Request"})}/>
      <div className="bg-white  ">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-24"> 
          <div className="max-w-3xl"> 
            <p className="text-base font-semibold leading-7 text-accent-1">ICYE</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{intl.formatMessage({id:"breadcrumb_Request"})}</h1>
            <div className="mt-8" dangerouslySetInnerHTML={{__html:page.content.rendered}}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async () => { 
  const pageInfo = await getPage(304) 

  return {
      props: {page: pageInfo}
  }
}