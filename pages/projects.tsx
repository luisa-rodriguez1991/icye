import Breadcrumb from "@/components/breadcrump";
import ContentProjects from "@/components/content-projects";
import Layout from "@/components/layout";
import { useIntl } from "react-intl";

export default function Projects() {

  const intl = useIntl()

  return (
    <Layout>
          <Breadcrumb miVariable={intl.formatMessage({id:"breadcrumb_projects"})}/>

          <ContentProjects/>


    </Layout>
   
  )
}
