import { useIntl } from "react-intl";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Button from "./button";
import Image from 'next/image'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { useState } from "react";

  
  

export default function Plans () {
    const intl = useIntl()

    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="bg-accent-1 py-24 ">
        <div className="py-16 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight text-w sm:text-5xl text-white">
             Nuestros Programas
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 text-indigo-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore velit esse ad. Magnam cupiditate cum ipsam cumque debitis ad, qui mollitia sed maiores dolores omnis, sit vitae corrupti laborum inventore.
          </p>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">

                <div>
                        <div className='ring-1 ring-indigo-600 rounded-3xl p-4'>
                            <h3 className=" text-center text-white text-lg font-semibold leading-8">INTERCAMBIO ICY</h3>
                            <p className="mt-6 flex flex-col items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-white m-2">€ 6.700</span>
                            <span className="text-sm font-semibold leading-6 text-accent-2">1 Año en alguno de 42 países miembros que incluye:</span>
                            </p>
                            <a
                            href="cosas y cosas"
                            aria-describedby="cosa"
                            className='bg-accent-1 text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 border border-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-white'
                            >
                            Quiero inscribirme
                            </a>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Proceso de Preparación en Colombia
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Seguro Médico y de Vida
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Hospedaje y Alimentación
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Dinero de Bolsillo Mensual
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Campamentos, Encuentros y Actividades
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Curso Básico de Idioma
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Costos Administrativos
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Reunión de Retorno
                                </li>

                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Febrero y Agosto
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                18 a 26 años (Excepciones Posibles)
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Hospedar un Extranjero
                                </li>








                            </ul>
                        </div>
                </div>
                <div>
                        <div className='ring-1 ring-indigo-600 rounded-3xl p-4'>
                            <h3 className=" text-center text-white text-lg font-semibold leading-8">INTERCAMBIO ICY</h3>
                            <p className="mt-6 flex flex-col items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-white m-2">€ 6.700</span>
                            <span className="text-sm font-semibold leading-6 text-accent-2">1 Año en alguno de 42 países miembros que incluye:</span>
                            </p>
                            <a
                            href="cosas y cosas"
                            aria-describedby="cosa"
                            className='bg-accent-1 text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 border border-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-white'
                            >
                            Quiero inscrribirme
                            </a>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Proceso de Preparación en Colombia
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Seguro Médico y de Vida
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Hospedaje y Alimentación
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Dinero de Bolsillo Mensual
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Campamentos, Encuentros y Actividades
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Curso Básico de Idioma
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Costos Administrativos
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Reunión de Retorno
                                </li>

                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Febrero y Agosto
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                18 a 26 años (Excepciones Posibles)
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Hospedar un Extranjero
                                </li>








                            </ul>
                        </div>
                </div>
                <div>
                        <div className='ring-1 ring-indigo-600 rounded-3xl p-4'>
                            <h3 className=" text-center text-white text-lg font-semibold leading-8">INTERCAMBIO ICY</h3>
                            <p className="mt-6 flex flex-col items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-white m-2">€ 6.700</span>
                            <span className="text-sm font-semibold leading-6 text-accent-2">1 Año en alguno de 42 países miembros que incluye:</span>
                            </p>
                            <a
                            href="cosas y cosas"
                            aria-describedby="cosa"
                            className='bg-accent-1 text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 border border-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-white'
                            >
                            Quiero inscrribirme
                            </a>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Proceso de Preparación en Colombia
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Seguro Médico y de Vida
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Hospedaje y Alimentación
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Dinero de Bolsillo Mensual
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Campamentos, Encuentros y Actividades
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Curso Básico de Idioma
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Costos Administrativos
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Reunión de Retorno
                                </li>

                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Febrero y Agosto
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                18 a 26 años (Excepciones Posibles)
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Hospedar un Extranjero
                                </li>








                            </ul>
                        </div>
                </div>
                <div>
                        <div className='ring-1 ring-indigo-600 rounded-3xl p-4'>
                            <h3 className=" text-center text-white text-lg font-semibold leading-8">INTERCAMBIO ICY</h3>
                            <p className="mt-6 flex flex-col items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-white m-2">€ 6.700</span>
                            <span className="text-sm font-semibold leading-6 text-accent-2">1 Año en alguno de 42 países miembros que incluye:</span>
                            </p>
                            <a
                            href="cosas y cosas"
                            aria-describedby="cosa"
                            className='bg-accent-1 text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 border border-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-white'
                            >
                            Quiero inscrribirme
                            </a>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Proceso de Preparación en Colombia
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Seguro Médico y de Vida
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Hospedaje y Alimentación
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Dinero de Bolsillo Mensual
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Campamentos, Encuentros y Actividades
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Curso Básico de Idioma
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Costos Administrativos
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Reunión de Retorno
                                </li>

                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Febrero y Agosto
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                18 a 26 años (Excepciones Posibles)
                                </li>
                                <li className="flex gap-x-3 text-white">
                                <CheckIcon className="h-6 w-5 flex-none text-pink-dark" aria-hidden="true" />
                                Hospedar un Extranjero
                                </li>








                            </ul>
                        </div>
                </div>
            </div>

        </div>
        </div>
        
      </div>)
}



