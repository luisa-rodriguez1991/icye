import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import AboutUs from "@/components/about-us-content";

export default function About() {
  return (
    <Layout>
      <Breadcrumb miVariable={"About us"}/>

    <AboutUs/>
    </Layout>
   
  )
}
