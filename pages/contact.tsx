import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import ContactContent from "@/components/contact-content";
import { useIntl } from "react-intl";
import { getPage } from "@/lib/api";
import { GetStaticProps } from "next";

export default function Contact({page}) {
  const intl = useIntl()



  return (
    <Layout>
      <Breadcrumb miVariable={intl.formatMessage({id:"breadcrumb_contact"})}/>
      <ContactContent text={page.acf.contact_text}/>
    </Layout>
   
  )
}


export const getStaticProps: GetStaticProps = async () => { 
  const pageInfo = await getPage(287) 

  return {
      props: {page: pageInfo}
  }
}