import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import { useIntl } from "react-intl";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SearchContent from "@/components/search-content";

export default function Key({ page }: any) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [results, setResults] = useState();
  const intl = useIntl();

  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      fetch(
        `http://184.72.130.92/wp-json/wp/v2/posts?search=${router.query.key}&_fields=id,title,categories,excerpt,slug`
      ) // ⬅️ 1) llamada a la API, el resultado es una Promise
        .then((response) => response.json()) // ⬅️ 2) cuando la petición finalice, transformamos la respuesta a JSON (response.json() también es una Promise)
        .then((dog) => setResults(dog));
    }
  }, [router.query]);

  return (
    <Layout onOpenForm={setOpen} openForm={open}>
      <Head>
        <link
          rel="canonical"
          href={`https://www.icyecolombia.com/privacy-policy`}
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Breadcrumb middleRouteName={"Search"} miVariable={router.query.key} />

      <div className="bg-white px-6 pb-24 lg:px-8 pt-12">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            ICYE
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Search: {router.query.key}
          </h1>
          <div className="mt-8">
            <SearchContent searchinfo={results} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
