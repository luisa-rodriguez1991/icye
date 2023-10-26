import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import ContactContent from "@/components/contact-content";
import { useIntl } from "react-intl";

export default function Contact() {
  const intl = useIntl()



  return (
    <Layout>
      <Breadcrumb miVariable={intl.formatMessage({id:"breadcrumb_contact"})}/>
      <ContactContent/>
    </Layout>
   
  )
}
