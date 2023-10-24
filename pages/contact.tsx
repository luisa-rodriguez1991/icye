import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import ContactContent from "@/components/contact-content";

export default function Contact() {
  return (
    <Layout>
      <Breadcrumb miVariable={"Contact"}/>
      <ContactContent/>
    </Layout>
   
  )
}
