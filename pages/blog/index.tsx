import Breadcrumb from "@/components/breadcrump";
import Layout from "@/components/layout";
import ListBlog from "@/components/list-blog";



export default function Index() {
  return (
    <Layout> 


    <Breadcrumb miVariable={"Blog"}/>









    <div className="bg-white pb-24 sm:pb-32">
      <ListBlog showAll={true}/>
    </div>
    </Layout>
   
  )
}

