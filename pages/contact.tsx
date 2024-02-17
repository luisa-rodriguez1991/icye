import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import ContactContent from "@/components/contact-content";
import { useIntl } from "react-intl";
import {getPage, getPost} from "@/lib/api";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Contact({ page, footer, footerInfo }: any) {
  const [open, setOpen] = useState(false);

  const intl = useIntl();
  const router = useRouter();
  const { locale } = router;

  return (
    <Layout footerInfo={footer} onOpenForm={setOpen} openForm={open}>
      <Head>
      <title>{intl.formatMessage({id:"title_contact"})}</title>
        <link rel="canonical" href="https://www.icyecolombia.com/contact" />
        
      </Head>
      <Breadcrumb
        miVariable={intl.formatMessage({ id: "breadcrumb_contact" })}
      />
      <ContactContent
       text={page.acf.contact_text}
       img={page.acf.contact_img}
       address={page.acf.contact_address}
       address2={page.acf.contact_address_2}
       email={page.acf.contact_email}
       whatsapp={page.acf.contact_whatsapp}

       />
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
