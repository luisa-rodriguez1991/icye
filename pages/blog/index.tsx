import Breadcrumb from "@/components/breadcrump";
import Layout from "@/components/layout";
import ListBlog from "@/components/list-blog";
import {getAllPost, getPost} from "@/lib/api";
import { GetStaticProps } from "next";
import { useState } from "react";
import { useIntl } from "react-intl";
import Head from "next/head";

export default function Index({ posts, footer, page }: any) {
  const [open, setOpen] = useState(false);

  const intl = useIntl();

  return (
    <Layout footerInfo={footer} onOpenForm={setOpen} openForm={open}>
     
      <Breadcrumb miVariable={intl.formatMessage({ id: "breadcrumb_blog" })} />
      <div className="bg-white pt-3 pb-24 sm:pb-32">
        <ListBlog posts={posts} showAll={true} />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allPostsData = await getAllPost(locale);
    const footerInfo = await getPost(772, locale);

  return {
    props: { posts: allPostsData, footer:footerInfo },
  };
};
