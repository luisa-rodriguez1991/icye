import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import ContactContent from "@/components/contact-content";
import { useIntl } from "react-intl";
import { getPage } from "@/lib/api";
import { GetStaticProps } from "next";
import  Head  from "next/head";
import { useRouter } from "next/router";

export default function Contact({page}:any) {
  const intl = useIntl()
  const router = useRouter();
  const { locale } = router;



  return (
    <Layout>
      <Head>
        <link rel="canonical" href="https://www.icyecolombia.com/contact" />
        <meta name="robots" content="noindex, nofollow"/>
      </Head>
      <Breadcrumb miVariable={intl.formatMessage({id:"breadcrumb_contact"})}/>
      <ContactContent text={page.acf.contact_text}/>
    </Layout>
   
  )
}


export const getStaticProps: GetStaticProps = async ({locale}) => { 
  const pageInfo = await getPage(287,locale) 

  return {
      props: {page: pageInfo}
  }
}