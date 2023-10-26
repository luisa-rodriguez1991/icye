import Breadcrumb from "@/components/breadcrump";
import Layout from "@/components/layout";
import ListBlog from "@/components/list-blog";
import { useIntl } from "react-intl";



export default function Index() {

  const intl = useIntl()

  return (
    <Layout> 


    <Breadcrumb miVariable={intl.formatMessage({id:"breadcrumb_blog"})}/>









    <div className="bg-white pb-24 sm:pb-32">
      <ListBlog showAll={true}/>
    </div>
    </Layout>
   
  )
}

