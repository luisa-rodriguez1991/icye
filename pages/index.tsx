import Footer from "@/components/footer";
import Header from "@/components/header";
import SubHeader from "@/components/sub-header";
import Layout from "@/components/layout";
import Intro from "@/components/intro";
import Trust from "@/components/trust";
import Trajectory from "@/components/trajectory";
import Culture from "@/components/culture";
import Testimonials from "@/components/testimonials";
import Plans from "@/components/plans";
import HowToParticipate from "@/components/how-to-participate";
import Faqs from "@/components/faqs";
import Sponsors from "@/components/sponsors";
import Calendar from "@/components/calendar-events";
import ListBlog from "@/components/list-blog";
import ContactContent from "@/components/contact-content";

import { useIntl } from "react-intl";











export default function Home() {
  const intl = useIntl()


  return (
    
    <Layout>
      <Intro/>
      <Trust/>
      <Trajectory/>
      <HowToParticipate/>
      <Culture/>
      <Testimonials/>
      <Plans/>
      <Faqs/>
      <Sponsors/>
      <Calendar showAll={false}/>
      <div className="bg-white py-24 sm:py-32">
        <ListBlog showAll={false}/>
      </div>
    </Layout>
    
   
  )
}
