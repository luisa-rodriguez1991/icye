import Breadcrumb from "@/components/breadcrump";
import Layout from "@/components/layout";
import Calendar from "@/components/calendar-events";
import { useIntl } from "react-intl";
import {getAllEvents, getPost} from "@/lib/api";
import { GetStaticProps } from "next";
import { useState } from "react";
import { Head } from "next/document";

export default function Index({ events, footer,page }: any) {
  const [open, setOpen] = useState(false);

  const intl = useIntl();

  return (
    <Layout footerInfo={footer} onOpenForm={setOpen} openForm={open}>
        <Head>
            <title>{intl.formatMessage({ id: "breadcrumb_events" })}</title>
            <link
                rel="canonical"
                href={`https://www.icyecolombia.com/events`}
            />
            <link rel="alternate" hrefLang="es" href="https://www.icyecolombia.com/es/events" />
            <link rel="alternate" hrefLang="en" href="https://www.icyecolombia.com/en/events" />
        </Head>
      <Breadcrumb
        miVariable={intl.formatMessage({ id: "breadcrumb_events" })}
      />

      <div className=" pt-12 pb-12 px-6 bg-white min-h-screen">
        <Calendar events={events} showAll={true} />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allEvents = await getAllEvents(locale);
    const footerInfo = await getPost(772, locale);

  return {
    props: { events: allEvents, footer:footerInfo },
  };
};
