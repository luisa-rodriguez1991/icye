import { useIntl } from "react-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Footer({ info }: any) {
  const intl = useIntl();
  const router = useRouter();
  const { locale } = router;
  const [userData, setUserData] = useState();
  const [confirmation, setConfirmation] = useState(false);

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => setUserData(data);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    };

    userData &&
      fetch("http://localhost:5001/newsletter", requestOptions) // ⬅️ 1) llamada a la API, el resultado es una Promise
        .then((response) => response.status === 200 && setConfirmation(true)); // ⬅️ 3) aquí ya tenemos la respuesta en formato objeto
  }, [userData]);

  const changeConfirmation = () => setConfirmation(false);

  return (
    <footer className="bg-accent-2" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 px-14 lg:px-8 lg:pt-32">
        <div className="flex flex-col lg:flex-row ">
          <div className="basis-12/12 md:basis-11/12 lg:basis-9/12">
            <div className="grow grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="mt-10 md:mt-0">
                <div className="mb-5">
                  <div className="flex flex-1 min-w-[55px] justify-start">
                    <a href="#" className="-m-1.5 p-1.5 flex">
                      <Image
                        width={48}
                        height={55}
                        className=""
                        src="/img/icon.png"
                        alt="Icono ICYE Colombia"
                      />
                      <Image
                        width={96}
                        height={58}
                        className="hidden lg:flex ml-2"
                        src="/img/logo.png"
                        alt="Logo ICYE Colombia"
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                    {intl.formatMessage({ id: "footer_col-1-title" })}
                  </p>
                </div>
                <div>
                  <ul role="list" className="mt-6 flex gap-3">
                    <li>
                      <a
                        href="https://www.facebook.com/icye.colombia1981?mibextid=LQQJ4d"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        <img
                          className="col-span-2 max-h-8 w-auto object-contain lg:col-span-1 text-accent-1"
                          src="/img/fb.svg"
                          alt="Reform"
                          width={158}
                          height={48}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/icyecol?s=11&t=9YLWP7xQ4sPUbASieVVc8A"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        <img
                          className="col-span-2  max-h-8 w-auto object-contain lg:col-span-1 text-accent-1"
                          src="/img/twitterx.svg"
                          alt="Reform"
                          width={158}
                          height={48}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/icyecolombia?igshid=MzRlODBiNWFlZA=="
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        <img
                          className="col-span-2 hover:fill-accent-1 max-h-8 w-auto object-contain lg:col-span-1 text-accent-1"
                          src="/img/instagram.svg"
                          alt="Reform"
                          width={50}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  {intl.formatMessage({ id: "footer_contact" })}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {/* direccion */}
                  <li>
                    <p className="text-sm leading-6 text-gray-600 ">
                      {info.acf.footer_contact_address}
                      <br></br>
                      {info.acf.footer_contact_address_2}
                    </p>
                  </li>
                  {/* email */}
                  <li>
                    <a
                      href={`mailto:${info.acf.footer_contact__email}`}
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {info.acf.footer_contact__email}
                    </a>
                  </li>
                  <li className="flex ">
                    <img
                      className="col-span-2  max-h-6 w-auto object-contain lg:col-span-1 text-accent-1 mr-2"
                      src="/img/whatsapp.svg"
                      alt="Reform"
                      width={158}
                      height={48}
                    />
                    <a
                      href="https://wa.link/2bk6ie"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {info.acf.footer_contact_whatsapp}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  {intl.formatMessage({ id: "footer_datat" })}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      locale={locale}
                      href="/request-complains"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "footer_requests" })}
                    </Link>
                  </li>
                  <li>
                    <Link
                      locale={locale}
                      href="/privacy-policy"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "footer_privacy" })}
                    </Link>
                  </li>
                  <li>
                    <Link
                      locale={locale}
                      href="/terms-conditions"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {intl.formatMessage({ id: "footer_terms" })}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="basis-12/12 md:basis-1/12 lg:basis-3/12">
            <div className="mt-10 lg:mt-0 md:max-w-[280px] lg:max-w-auto">
              <h3 className="text-sm font-semibold leading-6 text-gray-900">
                {intl.formatMessage({ id: "footer_news" })}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {intl.formatMessage({ id: "footer_news_p" })}
              </p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                  <div className="mt-6 sm:flex sm:max-w-md">
                    <input
                      type="email"
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      onChange={() => changeConfirmation()}
                      id="email-address"
                      className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                      placeholder={intl.formatMessage({ id: "news_text" })}
                    />

                    <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center rounded-md bg-accent-1 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        {intl.formatMessage({ id: "footer_button" })}
                      </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    {errors.email && (
                      <span className="text-red-400 text-sm">
                        {intl.formatMessage({
                          id: "contact_form_email_confirmation",
                        })}
                      </span>
                    )}
                    {confirmation && (
                      <span className="text-accent-1 text-sm">
                        {intl.formatMessage({ id: "contact_form_email_sent" })}
                      </span>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500"></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
