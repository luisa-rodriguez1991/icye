import { useIntl } from "react-intl";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Button from "./button";
import {CheckIcon} from "@heroicons/react/24/solid";
import Image from 'next/image'


export default function Culture() {
    const intl = useIntl()

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="flex gap-24 flex-col lg:flex-row mx-auto max-w-7xl  justify-around p-5 lg:px-8"> 
            <div className="basis-12/12 lg:basis-6/12 flex w-full justify-center">
                <Image
                    width={1056}
                    height={950}
                    className="max-w-[100%] rounded-3xl"
                    src="/img/portada_bg.jpg"
                    alt=""
                />
            </div>         
            <div className="basis-12/12 lg:basis-6/12 flex items-center">
                <div className=" flex flex-col">
                    <div className="flex">
                        <div className="text-sm  leading-7 text-gray-500 bg-accent-2 rounded-3xl px-6 py-1">{intl.formatMessage({id:"culrute_sub_title"})}</div>
                    </div>

                    
                    <h1 className="mt-6 text-3xl font-bold tracking-tight text-accent-1 sm:text-4xl">{intl.formatMessage({id:"culrute_title"})}</h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">{intl.formatMessage({id:"culrute_paragraph"})}
                    
                    </p>
                    <ul className="mt-6 text-xl leading-8 text-gray-700">
                        <li className="flex item-center ">
                            <div className="w-8 h-8 p-2 bg-accent-2 rounded-[50%] mr-2">
                                <CheckIcon className="h-4 w-4 text-accent-1" aria-hidden="true" />
                            </div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </li>

                        <li className="flex item-center mt-3">
                            <div className="w-8 h-8 p-2 bg-accent-2 rounded-[50%] mr-2">
                                <CheckIcon className="h-4 w-4 text-accent-1" aria-hidden="true" />
                            </div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </li>

                        <li className="flex item-center  mt-3">
                            <div className="w-8 h-8 p-2 bg-accent-2 rounded-[50%] mr-2">
                                <CheckIcon className="h-4 w-4 text-accent-1" aria-hidden="true" />
                            </div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </li>

                        <li className="flex item-center  mt-3">
                            <div className="w-8 h-8 p-2 bg-accent-2 rounded-[50%] mr-2">
                                <CheckIcon className="h-4 w-4 text-accent-1" aria-hidden="true" />
                            </div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </li> 

                    </ul>
                    <div className="flex mt-6 ">
                    <Button title="Como participar en ICYE" link="#" text="¿Como participar?"/>
                    </div>
                </div>
            </div>        
        </div>
    </div>
  )
}
