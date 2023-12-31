import { useIntl } from "react-intl";
import Button from "./button";
import Image from "next/image";

export default function Trajectory({ text, image }: any) {
  const intl = useIntl();

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 lg:pb-24 lg:pt-12 lg:overflow-visible lg:px-0">
      <div className="flex flex-col lg:flex-row mx-auto max-w-7xl justify-around px-6 lg:px-8">
        <div className="basis-12/12 lg:basis-6/12 flex items-center">
          <div className=" flex flex-col">
            <div className="flex">
              <div className="text-base  leading-7 text-gray-500 bg-accent-2 rounded-3xl px-6 ">
                {intl.formatMessage({ id: "trajectory_sub_title" })}
              </div>
            </div>

            <span className="  bg-gradient-to-r from-accent-1 via-red-400 to-blue-400 inline-block text-transparent bg-clip-text"></span>
            <div
              className="mt-6 text-3xl font-bold tracking-tight text-accent-1 sm:text-4xl"
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "trajectory_title" }),
              }}
            />

            
            <p className="mt-6 text-xl leading-8 text-gray-700">{text}</p>
            <div className="flex mt-6 ">
              <Button
                title={intl.formatMessage({ id: "trajectory_button" })}
                link="/about"
                text={intl.formatMessage({ id: "trajectory_button" })}
              />
            </div>
          </div>
        </div>
        <div className=" flex basis-12/12 lg:basis-6/12 pt-12 justify-center">
          <Image
            className="max-w-[100%]"
            src={image}
            alt=""
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
