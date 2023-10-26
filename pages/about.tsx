import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import AboutUs from "@/components/about-us-content";
import { useIntl } from "react-intl";

export default function About() {

  const intl = useIntl()
  
  return (
    <Layout>
       <Breadcrumb miVariable={intl.formatMessage({id:"breadcrumb_about"})}/>

    <AboutUs/>
    </Layout>
   
  )
}
