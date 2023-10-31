import { useIntl } from "react-intl";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Button from "./button";
import Image from 'next/image'


export default function Trajectory({title, text, image}) {
    const intl = useIntl()

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 pb-24 sm:py-32 lg:overflow-visible lg:px-0">

        <div className="flex flex-col lg:flex-row mx-auto max-w-7xl  justify-around p-5 lg:px-8">        
            <div className="basis-12/12 lg:basis-6/12 flex items-center">
                <div className=" flex flex-col">
                    <div className="flex">
                        <div className="text-base  leading-7 text-gray-500 bg-accent-2 rounded-3xl px-6 py-1">{intl.formatMessage({id:"trajectory_sub_title"})}</div>
                    </div>

                    
                    <h1 className="mt-6 text-3xl font-bold tracking-tight text-accent-1 sm:text-4xl">{title}</h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                    {text}
                    </p>
                    <div className="flex mt-6 ">
                    <Button title={intl.formatMessage({id:"trajectory_button"})} link="/about" text={intl.formatMessage({id: "trajectory_button"})}/>
                    </div>
                </div>
            </div>        
            <div className=" flex basis-12/12 lg:basis-6/12 justify-center">
           
                <Image
                      width={1024}
                      height={921}
                    className="max-w-[100%]"
                    src={image}
                    alt=""
                />
            </div>   
        </div>
    
  
    </div>
  )
}
