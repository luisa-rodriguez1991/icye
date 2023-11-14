import Breadcrumb from "@/components/breadcrump";
import Layout from "@/components/layout";
import ListBlog from "@/components/list-blog";
import { getAllPost } from "@/lib/api";
import { GetStaticProps } from "next";
import { useIntl } from "react-intl";



export default function Index({posts}:any) {

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



export const getStaticProps: GetStaticProps = async ({locale}) => {
  const allPostsData = await getAllPost(locale)

  return {
      props: {posts: allPostsData}
  }
}