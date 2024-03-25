import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import ContactContent from "@/components/contact-content";
import { useIntl } from "react-intl";
import {getPage, getPost} from "@/lib/api";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Faqs from "@/components/faqs";

export default function Contact({ page, footer, footerInfo }: any) {
  const [open, setOpen] = useState(false);

  const intl = useIntl();
  const router = useRouter();
  const { locale } = router;

  return (
    <Layout footerInfo={footer} onOpenForm={setOpen} openForm={open}>
      <Head>
      <title>FAQs</title>
        <link rel="canonical" href="https://www.icyecolombia.com/faq" />
          <link rel="alternate" hrefLang="es" href="https://www.icyecolombia.com/es/faq" />
          <link rel="alternate" hrefLang="en" href="https://www.icyecolombia.com/en/faq" />
        
      </Head>
        <Faqs
            text={page.acf.faqs_text}
            question1={page.acf.faqs_question_1}
            answer1={page.acf.faqs_answer_1}
            question2={page.acf.faqs_question_2}
            answer2={page.acf.faqs_answer_2}
            question3={page.acf.faqs_question_3}
            answer3={page.acf.faqs_answer_3}
            question4={page.acf.faqs_question_4}
            answer4={page.acf.faqs_answer_4}
            question5={page.acf.faqs_question_5}
            answer5={page.acf.faqs_answer_5}
            question6={page.acf.faqs_question_6}
            answer6={page.acf.faqs_answer_6}
        />

    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    const pageInfo = await getPage(11, locale);

    const footerInfo = await getPost(772, locale);
  return {
    props: { page: pageInfo, footer: footerInfo },
  };
};
