import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import ContactContent from "@/components/contact-content";
import { useIntl } from "react-intl";
import { getPage } from "@/lib/api";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Contact({ page }: any) {
  const [open, setOpen] = useState(false);

  const intl = useIntl();
  const router = useRouter();
  const { locale } = router;

  return (
    <Layout onOpenForm={setOpen} openForm={open}>
      <Head>
        <link rel="canonical" href="https://www.icyecolombia.com/contact" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Breadcrumb
        miVariable={intl.formatMessage({ id: "breadcrumb_contact" })}
      />
      <ContactContent
       text={page.acf.contact_text}
       img={page.acf.contact_img.sizes.large} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (locale) => {
  const pageInfo = await getPage(287, locale);

  return {
    props: { page: pageInfo },
  };
};
