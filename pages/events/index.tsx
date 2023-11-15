import Breadcrumb from "@/components/breadcrump";
import Layout from "@/components/layout";
import Calendar from "@/components/calendar-events";
import { useIntl } from "react-intl";
import { getAllEvents } from "@/lib/api";
import { getAllPost } from "@/lib/api";
import { GetStaticProps } from "next";

export default function Index({events}:any) {
  const intl = useIntl()
  

  return (
    <Layout> 
      

    <Breadcrumb miVariable={intl.formatMessage({id:"breadcrumb_events"})}/>

    <div className=" p-5 bg-accent-2 ">
    <Calendar events={events}   showAll={true}/>
    </div>
    </Layout>
  )
}





export const getStaticProps: GetStaticProps = async ({locale}) => {
  const allEvents = await getAllEvents(locale)

  return {
    
      props: {events: allEvents}
  }
}