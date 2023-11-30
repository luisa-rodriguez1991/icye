import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { useIntl } from "react-intl";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";
import StateMessage from "./state-message";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Form({ openIndicator, onSetOpen }: any) {
  const intl = useIntl();
  const router = useRouter();
  const { locale } = router;
  const [userData, setUserData] = useState();
  const [confirmation, setConfirmation] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    setUserData(data);
  };

  console.log(watch("customerType"));

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    };

    userData &&
      fetch("http://localhost:5001/form", requestOptions).then(
        (response) => response.status === 200 && setConfirmation(true)
      ); // ⬅️ 3) aquí ya tenemos la respuesta en formato objeto
  }, [userData]);

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
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
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
                        ></div>
                        <div className="mx-auto max-w-2xl text-center">
                          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {intl.formatMessage({
                              id: "Registration_form_title",
                            })}
                          </h2>
                          <p className="mt-4 text-lg leading-8 text-gray-600">
                            {intl.formatMessage({
                              id: "Registration_form_text",
                            })}
                          </p>
                        </div>

                        {confirmation ? (
                          <StateMessage
                            h1="Registration_form_statemessage_green"
                            p="Registration_form_statemessage_h1_blue"
                            p2="Registration_form_statemessage_grey"
                            a="+57 310 7346918"
                            icon="checkicon"
                          />
                        ) : (
                          // Formulario despues de titulo y texto
                          <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="mt-16 pb-24"
                          >
                            <div>
                              {/* Tipo de participante menu */}
                              <h3 className="text-xl font-bold text-gray-900 pb-4 mb-8">
                                {intl.formatMessage({
                                  id: "Registration_form_subtitle",
                                })}
                              </h3>

                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {watch("customerType") === "mentor" ? (
                                  <div className="relative  border-accent-1 bg-accent-1 text-white px-4 py-3 rounded-lg ">
                                    {/* boton full */}
                                    <input
                                      className="opacity-0 left-0 top-0 absolute h-full w-full "
                                      {...register("customerType")}
                                      type="radio"
                                      value="mentor"
                                    />

                                    <span className="flex justify-start ">
                                      <span className="flex flex-col">
                                        <label className=" text-sm font-medium text-white">
                                          {intl.formatMessage({
                                            id: "Registration_form_interest_1",
                                          })}
                                        </label>
                                      </span>
                                    </span>
                                    <CheckCircleIcon
                                      className={classNames(
                                        watch("customerType") !== "mentor"
                                          ? "invisible"
                                          : "",
                                        "absolute top-1 right-1 h-5 w-5 font-semibold text-white"
                                      )}
                                      aria-hidden="true"
                                    />
                                  </div>
                                ) : (
                                  <div className="relative  border-accent-2 bg-accent-2 text-accent-1 px-4 py-3 rounded-lg ">
                                    <input
                                      className="opacity-0  left-0 top-0 absolute h-full w-full "
                                      {...register("customerType")}
                                      type="radio"
                                      value="mentor"
                                    />

                                    <span className="flex justify-start">
                                      <span className="flex flex-col ">
                                        <label className="block text-sm font-medium text-gray-900">
                                          {intl.formatMessage({
                                            id: "Registration_form_interest_1",
                                          })}
                                        </label>
                                      </span>
                                    </span>
                                  </div>
                                )}

                                {watch("customerType") === "familias" ? (
                                  <div className="relative  border-accent-1 bg-accent-1 text-white px-4 py-3 rounded-lg ">
                                    {/* boton full */}
                                    <input
                                      className="opacity-0 left-0 top-0 absolute h-full w-full "
                                      {...register("customerType")}
                                      type="radio"
                                      value="familias"
                                    />

                                    <span className="flex justify-start ">
                                      <span className="flex flex-col">
                                        <label className=" text-sm font-medium text-white">
                                          {intl.formatMessage({
                                            id: "Registration_form_interest_2",
                                          })}
                                        </label>
                                      </span>
                                    </span>
                                    <CheckCircleIcon
                                      className={classNames(
                                        watch("customerType") !== "familias"
                                          ? "invisible"
                                          : "",
                                        "absolute top-1 right-1 h-5 w-5 font-semibold text-white"
                                      )}
                                      aria-hidden="true"
                                    />
                                  </div>
                                ) : (
                                  <div className="relative  border-accent-2 bg-accent-2 text-accent-1 px-4 py-3 rounded-lg ">
                                    <input
                                      className="opacity-0  left-0 top-0 absolute h-full w-full "
                                      {...register("customerType")}
                                      type="radio"
                                      value="familias"
                                    />

                                    <span className="flex justify-start">
                                      <span className="flex flex-col ">
                                        <label className="block text-sm font-medium text-gray-900">
                                          {intl.formatMessage({
                                            id: "Registration_form_interest_2",
                                          })}
                                        </label>
                                      </span>
                                    </span>
                                  </div>
                                )}

                                {watch("customerType") === "participante" ? (
                                  <div className="relative  border-accent-1 bg-accent-1 text-white px-4 py-3 rounded-lg ">
                                    <input
                                      className="opacity-0  left-0 top-0 absolute h-full w-full "
                                      {...register("customerType")}
                                      type="radio"
                                      value="participante"
                                    />
                                    <span className="flex justify-start">
                                      <span className="flex flex-col">
                                        <label className="block text-sm font-medium text-white">
                                          {intl.formatMessage({
                                            id: "Registration_form_interest_3",
                                          })}
                                        </label>
                                      </span>
                                    </span>
                                    <CheckCircleIcon
                                      className={classNames(
                                        watch("customerType") !== "participante"
                                          ? "invisible"
                                          : "",
                                        "absolute top-1 right-1 h-5 w-5 font-semibold text-white"
                                      )}
                                      aria-hidden="true"
                                    />
                                  </div>
                                ) : (
                                  <div className="relative  border-accent-2 bg-accent-2 text-accent-1 px-4 py-3 rounded-lg ">
                                    <input
                                      className="opacity-0  left-0 top-0 absolute h-full w-full "
                                      {...register("customerType")}
                                      type="radio"
                                      value="participante"
                                    />
                                    <span className="flex justify-start">
                                      <span className="flex flex-col">
                                        <label className="block text-sm font-medium text-gray-900">
                                          {intl.formatMessage({
                                            id: "Registration_form_interest_3",
                                          })}
                                        </label>
                                      </span>
                                    </span>
                                  </div>
                                )}

                                {watch("customerType") === "donante" ? (
                                  <div className="relative  border-accent-1 bg-accent-1 text-white px-4 py-3 rounded-lg ">
                                    <input
                                      className="opacity-0  left-0 top-0 absolute h-full w-full "
                                      {...register("customerType")}
                                      type="radio"
                                      value="donante"
                                    />
                                    <span className="flex justify-start">
                                      <span className="flex flex-col">
                                        <label className="block text-sm font-medium text-white">
                                          {intl.formatMessage({
                                            id: "Registration_form_interest_4",
                                          })}
                                        </label>
                                      </span>
                                    </span>
                                    <CheckCircleIcon
                                      className={classNames(
                                        watch("customerType") !== "donante"
                                          ? "invisible"
                                          : "",
                                        "absolute top-1 right-1 h-5 w-5 font-semibold text-white"
                                      )}
                                      aria-hidden="true"
                                    />
                                  </div>
                                ) : (
                                  <div className="relative  border-accent-2 bg-accent-2 text-accent-1 px-4 py-3 rounded-lg ">
                                    <input
                                      className="opacity-0  left-0 top-0 absolute h-full w-full "
                                      {...register("customerType")}
                                      type="radio"
                                      value="donante"
                                    />
                                    <span className="flex justify-start">
                                      <span className="flex flex-col">
                                        <label className="block text-sm font-medium text-gray-900">
                                          {intl.formatMessage({
                                            id: "Registration_form_interest_4",
                                          })}
                                        </label>
                                      </span>
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* registro de datos y elecciones */}
                            <input
                              type="hidden"
                              {...register("local")}
                              value={locale}
                            />
                            {watch("customerType") && (
                              <div className="my-12 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                {/* primer nombre */}
                                <div>
                                  <label
                                    htmlFor="firstname"
                                    className="block text-sm font-semibold leading-6 text-gray-900"
                                  >
                                    {intl.formatMessage({
                                      id: "contact_form_firstname",
                                    })}
                                  </label>
                                  <div className="mt-2.5">
                                    <input
                                      type="text"
                                      {...register("firstname", {
                                        required: true,
                                        maxLength: 80,
                                      })}
                                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {errors.firstname && (
                                      <span className="text-red-400">
                                        {intl.formatMessage({
                                          id: "contact_form_firstname_confirmation",
                                        })}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                {/* apellido */}
                                <div>
                                  <label
                                    htmlFor="lastname"
                                    className="block text-sm font-semibold leading-6 text-gray-900"
                                  >
                                    {intl.formatMessage({
                                      id: "contact_form_lastname",
                                    })}
                                  </label>
                                  <div className="mt-2.5">
                                    <input
                                      type="text"
                                      {...register("lastname", {
                                        required: true,
                                        maxLength: 100,
                                      })}
                                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {errors.lastname && (
                                      <span className="text-red-400">
                                        {intl.formatMessage({
                                          id: "contact_form_lastname_confirmation",
                                        })}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                {/* email */}
                                <div>
                                  <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold leading-6 text-gray-900"
                                  >
                                    {intl.formatMessage({
                                      id: "contact_form_email",
                                    })}
                                  </label>
                                  <div className="mt-2.5">
                                    <input
                                      type="email"
                                      {...register("email", {
                                        required: true,
                                        pattern: /^\S+@\S+$/i,
                                      })}
                                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {errors.email && (
                                      <span className="text-red-400">
                                        {intl.formatMessage({
                                          id: "contact_form_email_confirmation",
                                        })}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                {/* telefono */}
                                <div>
                                  <div className="flex justify-between text-sm leading-6">
                                    <label
                                      htmlFor="phone"
                                      className="block font-semibold text-gray-900"
                                    >
                                      {intl.formatMessage({
                                        id: "contact_form_phone",
                                      })}
                                    </label>
                                    <p
                                      id="phone-description"
                                      className="text-gray-400"
                                    >
                                      {intl.formatMessage({
                                        id: "contact_form_phone_optional",
                                      })}
                                    </p>
                                  </div>
                                  <div className="mt-2.5">
                                    <input
                                      type="text"
                                      {...register("phone", { maxLength: 20 })}
                                      aria-describedby="phone-description"
                                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                {/* Eleccion programa */}
                                {watch("customerType") !== "donante" && (
                                  <div>
                                    <label
                                      htmlFor="programm"
                                      className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                      {intl.formatMessage({
                                        id: "Registration_form_subtitle_p",
                                      })}
                                    </label>
                                    <select
                                      id="programm"
                                      {...register("programm")}
                                      className="mt-2 block w-full rounded-md border-0 py-2 h-[40px] pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-accent-1 sm:text-sm sm:leading-6"
                                    >
                                      <option></option>
                                      <option>
                                        {intl.formatMessage({
                                          id: "Registration_form_option_1",
                                        })}
                                      </option>
                                      <option>
                                        {intl.formatMessage({
                                          id: "Registration_form_option_2",
                                        })}
                                      </option>
                                      <option>
                                        {intl.formatMessage({
                                          id: "Registration_form_option_3",
                                        })}
                                      </option>
                                      <option>
                                        {intl.formatMessage({
                                          id: "Registration_form_option_4",
                                        })}
                                      </option>
                                    </select>
                                  </div>
                                )}

                                {/* Pais */}
                                {watch("customerType") !== "donante" && (
                                  <div>
                                    <label
                                      htmlFor="location"
                                      className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                      {intl.formatMessage({
                                        id: "Registration_form_subtitle_c",
                                      })}
                                    </label>
                                    <select
                                      id="location"
                                      {...register("country")}
                                      className="mt-2 block w-full rounded-md border-0 py-2 h-[40px] pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-accent-1 sm:text-sm sm:leading-6"
                                    >
                                      <option></option>
                                      <option>United States</option>
                                      <option>Canada</option>
                                      <option>Mexico</option>
                                    </select>
                                  </div>
                                )}

                                {/* mensaje */}
                                <div className="sm:col-span-2">
                                  <div className="flex justify-between text-sm leading-6">
                                    <label
                                      htmlFor="message"
                                      className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                      {intl.formatMessage({
                                        id: "contact_form_hcwh",
                                      })}
                                    </label>
                                    <p
                                      id="message-description"
                                      className="text-gray-400"
                                    >
                                      {intl.formatMessage({
                                        id: "contact_form_hcwh_size",
                                      })}
                                    </p>
                                  </div>
                                  <div className="mt-2.5">
                                    <textarea
                                      {...register("message", {})}
                                      rows={4}
                                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                              </div>
                            )}

                            <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                              <button
                                type="submit"
                                className="rounded-[40px] bg-accent-1 px-6 py-4  font-semibold text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              >
                                {" "}
                                {intl.formatMessage({
                                  id: "contact_form_button",
                                })}{" "}
                              </button>
                            </div>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
