import Breadcrumb from "@/components/breadcrump";
import Layout from "@/components/layout";
import Calendar from "@/components/calendar-events";
import { useIntl } from "react-intl";
import { getAllEvents } from "@/lib/api";

export default function Index({events}) {
  const intl = useIntl()
  

  return (
    <Layout> 
    <Breadcrumb miVariable={intl.formatMessage({id:"breadcrumb_events"})}/>
    <Calendar events={events} showAll={true}/>
    </Layout>
  )
}





export const getStaticProps: GetStaticProps = async () => {
  const allEvents = await getAllEvents()

  return {
      props: {events: allEvents}
  }
}