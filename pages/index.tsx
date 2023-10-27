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
import { getAllPost, getAllEvents } from "@/lib/api";
import { GetStaticProps } from "next";

export default function Home({posts, eventsList}) {

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
      <Calendar events={eventsList} showAll={false}/>
      <div className="bg-white py-24 sm:py-32">
        <ListBlog posts={posts} showAll={false}/>
      </div>
    </Layout>
    
   
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getAllPost("en")
  const eventsList = await getAllEvents() 

  return {
      props: {posts: allPostsData, eventsList: eventsList}
  }
}

