import { useIntl } from "react-intl";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Button from "./button";
import Image from 'next/image'


export default function Trajectory() {
    const intl = useIntl()

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">

        <div className="flex flex-col lg:flex-row mx-auto max-w-7xl  justify-around p-5 lg:px-8">        
            <div className="basis-12/12 lg:basis-6/12 flex items-center">
                <div className=" flex flex-col">
                    <div className="flex">
                        <div className="text-base  leading-7 text-gray-500 bg-accent-2 rounded-3xl px-6 py-1">Trayectoria & colavoracion</div>
                    </div>

                    
                    <h1 className="mt-6 text-3xl font-bold tracking-tight text-accent-1 sm:text-4xl">Mas de 40 años cambiando vidas de jóvenes</h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                    ICYE Colombia es miembro de la federación internacional de ICYE, fundada hace más de 70 años y que tiene su sede en Berlin, Alemania. Año tras año hemos facilitado a jóvenes, colombianos y extranjeros, el vivir una experiencia en nuestros diferentes programas: Intercambio, Voluntariado y EVS/ESC.
                    </p>
                    <div className="flex mt-6 ">
                    <Button title="Como participar en ICYE" link="#" text="¿Quienes somos?"/>
                    </div>
                </div>
            </div>        
            <div className=" flex basis-12/12 lg:basis-6/12 justify-center">
           
                <Image
                      width={1056}
                      height={950}
                    className="max-w-[100%]"
                    src="/img/trajec.png"
                    alt=""
                />
            </div>   
        </div>
    
  
    </div>
  )
}
