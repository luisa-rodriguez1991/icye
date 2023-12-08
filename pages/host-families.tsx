import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import { useState } from "react";
import {getPage, getPost} from "@/lib/api";
import {GetStaticProps} from "next";

export default function HostFamilies({footer}) {
  const [open, setOpen] = useState(false);

  return (
    <Layout footerInfo={footer} onOpenForm={setOpen} openForm={open}>
      <Breadcrumb miVariable={"Host families"} />
      esto es Host families
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    const pageInfo = await getPage(804, locale);
    const footerInfo = await getPost(772, locale);
    return {
        props: { page: pageInfo, footer: footerInfo },
    };
};
