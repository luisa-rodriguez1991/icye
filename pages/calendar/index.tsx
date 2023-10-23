import Breadcrumb from "@/components/breadcrump";
import Layout from "@/components/layout";
import Calendar from "@/components/calendar-events";

export default function Index() {
  return (
    <Layout> 
    <Breadcrumb miVariable={"Calendar"}/>
    <Calendar showAll={true}/>
    </Layout>
  )
}