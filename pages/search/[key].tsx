import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import { useIntl } from "react-intl";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SearchContent from "@/components/search-content";
import {getCategoryNameById, getDetailProject, getPost} from "@/lib/api";
import {GetStaticPaths, GetStaticProps} from "next";
import StateMessage from "@/components/state-message";

export default function Key({ page, footer }: any) {
  const router = useRouter();
  const {locale} = router

  const [open, setOpen] = useState(false);
  const [results, setResults] = useState();
  const intl = useIntl();

  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      fetch(
        `https://editingwp.icyecolombia.com/wp-json/wp/v2/posts?search=${router.query.key}&_fields=id,title,categories,excerpt,slug&lang=${locale}`
      ) // ⬅️ 1) llamada a la API, el resultado es una Promise
        .then((response) => response.json()) // ⬅️ 2) cuando la petición finalice, transformamos la respuesta a JSON (response.json() también es una Promise)
        .then((dog) => setResults(dog));
    }
  }, [router.query]);

  return (
    <Layout footerInfo={footer} onOpenForm={setOpen} openForm={open}>
      <Head>
        <link
          rel="canonical"
          href={`https://www.icyecolombia.com/privacy-policy`}
        />
        
      </Head>

      <Breadcrumb middleRouteName={"Search"} miVariable={router.query.key} />

      <div className="bg-white px-6 pb-24 lg:px-8 pt-12">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-accent-1">
            ICYE
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {intl.formatMessage({ id: "search_result_title",})} {router.query.key}
          </h1>


          <div className="mt-8 text-center">
         
            {results?(<SearchContent searchinfo={results} />):

            (<StateMessage 
            h1="search_result_title" 
            p="search_result_message_faild"
            p2="search_result_message_faild_contact" 
            a="+57 310 7346918"
            icon="box"/>)}

          </div>


          
        </div>
      </div>
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async ({ params, locale }) => {

  const footerInfo = await getPost(772, locale);

  return {
    props: { footer:footerInfo },
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}