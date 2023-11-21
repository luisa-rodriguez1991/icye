import Breadcrumb from "@/components/breadcrump";
import Layout from "@/components/layout";
import Calendar from "@/components/calendar-events";
import { useIntl } from "react-intl";
import { getAllEvents } from "@/lib/api";
import { getAllPost } from "@/lib/api";
import { GetStaticProps } from "next";
import { useState } from "react";

export default function Index({events}:any) {
  const [open, setOpen] = useState(false)

  const intl = useIntl()
  

  return (
    <Layout onOpenForm={setOpen} openForm={open}>
 
      

    <Breadcrumb miVariable={intl.formatMessage({id:"breadcrumb_events"})}/>

    <div className=" p-6 bg-white min-h-screen">
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