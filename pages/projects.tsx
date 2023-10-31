import Breadcrumb from "@/components/breadcrump";
import ContentProjects from "@/components/content-projects";
import Layout from "@/components/layout";
import { getAllPost, getAllProjects } from "@/lib/api";
import { useIntl } from "react-intl";

export default function Projects({projects}) {

  const intl = useIntl()

  return (
    <Layout>
          <Breadcrumb miVariable={intl.formatMessage({id:"breadcrumb_projects"})}/>

          <ContentProjects list={projects}/>


    </Layout>
   
  )
}



export const getStaticProps: GetStaticProps = async () => {
  const allProjectsData = await getAllProjects()

  return {
      props: {projects:allProjectsData }
  }
}
