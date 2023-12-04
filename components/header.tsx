import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Link from "next/link";
import { useIntl } from "react-intl";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import React from "react";

export default function Header({ onOpenForm }: any) {
  const [openSearch, setOpenSearch] = useState(false);
  const [key, setKey] = useState("");

  const router = useRouter();
  const { locale } = router;
  const intl = useIntl();

  const sendSearch = (e: any) => {
    e.key === "Enter" && window.location.replace(`/search/${key}`);
  }; 
  
  const onSendSearch = (e: any) => {
    e.preventDefault()
    key && window.location.replace(`/search/${key}`);
  }; 

  return (
    <>
      <Transition.Root
        show={openSearch}
        as={Fragment}
        afterLeave={() => alert("")}
        appear
      >
        <Dialog as="div" className="relative z-40" onClose={setOpenSearch}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <Combobox>
                  <div className="relative">
                    <form
                      className="flex flex-row align-center"
                      onSubmit={onSendSearch}
                    >
                      <MagnifyingGlassIcon
                        className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />


                      <Combobox.Input
                      onChange={(e)=>setKey(e.target.value)}                      
                      onKeyDown={sendSearch}
                        className="outline-0 h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                        placeholder="Search..."
                      />
                      <button
                        className="align-center px-3 py-2 bg-accent-2 hover:bg-accent-1 text-accent-1 hover:text-accent-2"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="bg-white sticky top-0 z-40 bg-white  shadow">
        <header className="relative ">
          <nav
            aria-label="Top"
            className=" mx-auto max-w-7xl py-3 sm:px-6 lg:px-8"
          >
            <div className="px-4 pb-14 sm:px-0 sm:pb-0">
              <div className="flex h-16 items-center justify-between">
                {/* Logo */}

                <div className="flex flex-1 min-w-[45px] lg:min-w-[120px] justify-start">
                  <Link locale={locale} href="/" className="flex">
                    {" "}
                    <span className="sr-only">Your Company</span>
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
                      className="hidden lg:flex ml-4 mt-1"
                      src="/img/logo.png"
                      alt="Logo ICYE Colombia"
                    />
                  </Link>
                </div>

                <div className="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
                  <div className="flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0">
                    <div className="flex">
                      <div className="flex items-center">
                        <div className="relative flex items-center ">
                          <Link
                            locale={locale}
                            href="/about"
                            className="whitespace-nowrap  block rounded-lg px-3 py-2 text-md font-semibold text-gray-700 hover:text-gray-900"
                          >
                            {intl.formatMessage({ id: "header_item_1" })}
                          </Link>
                          <Link
                            locale={locale}
                            href="/projects"
                            className=" whitespace-nowrap  block rounded-lg px-3 py-2 text-md font-semibold text-gray-700 hover:text-gray-900"
                          >
                            {intl.formatMessage({ id: "header_item_2" })}
                          </Link>
                          <Link
                            locale={locale}
                            href="/blog"
                            className="whitespace-nowrap   block rounded-lg px-3 py-2 text-md font-semibold text-gray-700 hover:text-gray-900"
                          >
                            {intl.formatMessage({ id: "header_item_3" })}
                          </Link>
                          <Link
                            locale={locale}
                            href="/events"
                            className=" whitespace-nowrap  block rounded-lg px-3 py-2 text-md font-semibold text-gray-700 hover:text-gray-900"
                          >
                            {intl.formatMessage({ id: "header_item_4" })}
                          </Link>
                          <Link
                            locale={locale}
                            href="/contact"
                            className="whitespace-nowrap   block rounded-lg px-3 py-2 text-md font-semibold text-gray-700 hover:text-gray-900"
                          >
                            {intl.formatMessage({ id: "header_item_8" })}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-end">
                  {/* Search */}
                  <button
                    onClick={() => setOpenSearch(true)}
                    className="p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </button>

                  {/* Cart */}
                  <div className="ml-4 flow-root ">
                    {locale === "en" ? (
                      <Link
                        href="#"
                        locale="es"
                        className="flex font-semibold  text-acent-1"
                      >
                        Español
                      </Link>
                    ) : (
                      <Link
                        locale="en"
                        href="#"
                        className="flex font-semibold text-acent-1"
                      >
                        English
                      </Link>
                    )}
                  </div>

                  <Link
                    locale={locale}
                    href="#"
                    onClick={() => onOpenForm(true)}
                    title="Como participar"
                    className="z-[999999] lg:z-[0] lg:ml-7 fixed top-auto bottom-0 left-0 rounded-[0px] lg:rounded-[40px] w-full lg:static text-center lg:w-auto  lg:min-w-[147px] bg-accent-1 p-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {intl.formatMessage({ id: "header_button" })}
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
