import Breadcrumb from "@/components/breadcrump";
import Layout from "@/components/layout";
import ListBlog from "@/components/list-blog";
import { getAllPost } from "@/lib/api";
import { useIntl } from "react-intl";



export default function Index({posts}) {

  const intl = useIntl()

  return (
    <Layout> 
      <Breadcrumb miVariable={intl.formatMessage({id:"breadcrumb_blog"})}/>
      <div className="bg-white pb-24 sm:pb-32">
        <ListBlog posts={posts}  showAll={true}/>
      </div>
    </Layout>
   
  )
}



export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getAllPost("en")

  return {
      props: {posts: allPostsData}
  }
}