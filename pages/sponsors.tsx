import Breadcrumb from "@/components/breadcrump";
import Layout from "@/components/layout";
import { useState } from "react";
import {getPage, getPost} from "@/lib/api";
import {GetStaticProps} from "next";

export default function Sponsors({footer}:any) {
  const [open, setOpen] = useState(false);

  return (
    <Layout footerInfo={footer} onOpenForm={setOpen} openForm={open}>
      <Breadcrumb miVariable={"Sponsors"} />
     
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    const footerInfo = await getPost(772, locale);
    return {
        props: { footer: footerInfo },
    };
};
