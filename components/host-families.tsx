import { useIntl } from "react-intl";
import Button from "./button";
import {ArrowLongRightIcon, CheckIcon} from "@heroicons/react/24/solid";
import Image from 'next/image'


export default function HostFamilies() {
    const intl = useIntl()

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="flex gap-24 flex-col lg:flex-row mx-auto max-w-7xl  justify-around p-5 lg:px-8"> 
                
            <div className="basis-12/12 lg:basis-6/12 flex items-center">
                <div className=" flex flex-col">
                    
                    <h1 className="mt-6 text-3xl font-bold tracking-tight text-accent-1 sm:text-4xl">Familias Hospederas</h1>
                        <div className="space-y-3 my-5">
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                            ¿ Qué es?
                            </p>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quasi quos ex porro labore magnam amet voluptatum itaque totam, aliquam dolore voluptatibus consequuntur voluptas ipsum optio vero tempora inventore necessitatibus.
                            </p>
                        </div>

                        <div className="space-y-3 my-5">
                            <p className=" text-xl leading-8 text-gray-700">
                            ¿ En qué consiste?
                            </p>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quasi quos ex porro labore magnam amet voluptatum itaque totam, aliquam dolore voluptatibus consequuntur voluptas ipsum optio vero tempora inventore necessitatibus.
                            </p>
                        </div>
                        <div className="flex flex-col my-5 space-y-2">
                            <div className="flex items-center space-x-3">
                                <p>Derechos</p>
                                <ArrowLongRightIcon className="h-4 w-4 text-accent-1" aria-hidden="true" />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, nobis facere animi, ratione harum iure. </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <p>Deberes</p>
                                <ArrowLongRightIcon className="h-4 w-4 text-accent-1" aria-hidden="true" />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, nobis facere animi, ratione harum iure. </p>
                            </div>
                                  
                           
                        </div>
                    <div className="flex mt-6 ">
                    <Button title="Como participar en ICYE" link="#" text="Quiero ser familia hospedera"/>
                    </div>
                </div>
            </div>      
            <div className="basis-12/12 lg:basis-6/12 flex w-full justify-center">
                <Image
                    width={759}
                    height={441}
                    className="max-w-[100%] rounded-3xl"
                    src="/img/hfamilies.png"
                    alt=""
                />
            </div>      
        </div>
    </div>
  )
}
