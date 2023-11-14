/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  LinkIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";

const team = [
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Whitney Francis",
    email: "whitney.francis@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leonard Krasner",
    email: "leonard.krasner@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Floyd Miles",
    email: "floyd.miles@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Emily Selman",
    email: "emily.selman@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Form({ openIndicator, onSetOpen }) {
  const [agreed, setAgreed] = useState(false);

  return (
    <Transition.Root show={openIndicator} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[99999999999999999999]"
        onClose={onSetOpen}
      >
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                  <form className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1">
                      {/* Header */}
                      <div className="bg-accent-1 px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between space-x-3">
                          <div className="flex h-7 items-center">
                            <button
                              type="button"
                              className="relative text-gray-400 hover:text-gray-500"
                              onClick={() => onSetOpen(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Divider container */}
                      <div className="isolate bg-white px-6 py-20 sm:py-20 lg:px-8">
                        <div
                          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                          aria-hidden="true"
                        >
                         
                        </div>
                        <div className="mx-auto max-w-2xl text-center">
                          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Formulario en linea
                          </h2>
                          <p className="mt-2 text-lg leading-8 text-gray-600">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, nesciunt ipsum. Assumenda, explicabo eligendi.
                          </p>
                        </div>
                        <form
                          action="#"
                          method="POST"
                          className="mx-auto mt-16 max-w-xl sm:mt-20"
                        >
                          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                              >
                                First name
                              </label>
                              <div className="mt-2.5">
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="last-name"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                              >
                                Last name
                              </label>
                              <div className="mt-2.5">
                                <input
                                  type="text"
                                  name="last-name"
                                  id="last-name"
                                  autoComplete="family-name"
                                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-2">
                              <label
                                htmlFor="email"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                              >
                                Email
                              </label>
                              <div className="mt-2.5">
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  autoComplete="email"
                                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-2">
                              <label
                                htmlFor="phone-number"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                              >
                                Phone number
                              </label>
                              <div className="relative mt-2.5">
                            
                            
                                <input
                                  type="tel"
                                  name="phone-number"
                                  id="phone-number"
                                  autoComplete="tel"
                                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label
                                htmlFor="phone-number"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                              >
                                Programa de Interes
                              </label>

                              <div className="mt-2 -space-y-px rounded-md shadow-sm">
                                <div>
                                  <label htmlFor="country" className="sr-only">
                                    Program 
                                  </label>
                                  <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  >
                                    <option>Workcamp</option>
                                    <option>1 Año</option>
                                    <option>6 Meses</option>
                                    <option>3 Meses</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <Switch.Group
                              as="div"
                              className="flex gap-x-4 sm:col-span-2"
                            >
                              <div className="flex h-6 items-center">
                                <Switch
                                  checked={agreed}
                                  onChange={setAgreed}
                                  className={classNames(
                                    agreed ? "bg-indigo-600" : "bg-gray-200",
                                    "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                  )}
                                >
                                  <span className="sr-only">
                                    Agree to policies
                                  </span>
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      agreed
                                        ? "translate-x-3.5"
                                        : "translate-x-0",
                                      "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                                    )}
                                  />
                                </Switch>
                              </div>
                              <Switch.Label className="text-sm leading-6 text-gray-600">
                                By selecting this, you agree to our{" "}
                                <a
                                  href="#"
                                  className="font-semibold text-accent-1"
                                >
                                  privacy&nbsp;policy
                                </a>
                                .
                              </Switch.Label>
                            </Switch.Group>
                          </div>

                        </form>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          onClick={() => onSetOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md bg-accent-1 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
