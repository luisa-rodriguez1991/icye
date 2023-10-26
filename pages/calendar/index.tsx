import Breadcrumb from "@/components/breadcrump";
import Layout from "@/components/layout";
import Calendar from "@/components/calendar-events";
import { useIntl } from "react-intl";

export default function Index() {
  const intl = useIntl()
  

  return (
    <Layout> 
    <Breadcrumb miVariable={intl.formatMessage({id:"breadcrumb_events"})}/>
    <Calendar showAll={true}/>
    </Layout>
  )
}