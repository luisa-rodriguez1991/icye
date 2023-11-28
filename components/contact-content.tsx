import { useIntl } from "react-intl";
import Button from "./button";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

export default function ContactContent({ text,img }: any) {
  const router = useRouter();
  const intl = useIntl();
 

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl   py-12  lg:px-8 relative">
        <div className="lg:absolute lg:top-0 lg:bottom-0 lg:left-1/2 lg:right-1 mb-8 px-6">
          <img
            className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-[70%]"
            src={img}
            alt=""
          />
        </div>
        <div className="pb-24  sm:pb-32 sm:pb-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pb-24">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl">
                {intl.formatMessage({ id: "contact_content_title" })}
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">{text}</p>

         TODO reemplazar con direccion telefono email clickeables y mensaje de wa
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
