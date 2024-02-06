import { useIntl } from "react-intl";
import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// export default function Culture({
//   text,
//   item1,
//   item2,
//   item3,
//   item4,
//   item5,
//   onOpenForm,
// }: any) {
//   const intl = useIntl();

//   return (
//     <div className="relative isolate overflow-hidden bg-white px-5 py-24 sm:py-32 lg:overflow-visible lg:px-0">
//       <div className="flex gap-12 lg:gap-24 flex-col lg:flex-row mx-auto max-w-7xl px-6 justify-around pt-5 lg:px-8">
//         <div className="basis-12/12 lg:basis-6/12 flex w-full justify-center">
//           <Image
//             width={1056}
//             height={950}
//             className="max-w-[100%] rounded-3xl"
//             src="/img/blog4.png"
//             alt=""
//           />
//         </div>
//         <div className="basis-12/12 lg:basis-6/12 flex">
//           <div className=" flex flex-col ">
//             <div className="flex">
//               <div className="text-sm  leading-7 text-gray-500 bg-accent-2 rounded-3xl px-6 py-1">
//                 {intl.formatMessage({ id: "culrute_sub_title" })}
//               </div>
//             </div>

//             <span className="  bg-gradient-to-r from-accent-1 via-red-400 to-blue-400 inline-block text-transparent bg-clip-text"></span>
//             <div
//               className="mt-6 text-3xl font-bold tracking-tight text-accent-1 sm:text-4xl"
//               dangerouslySetInnerHTML={{
//                 __html: intl.formatMessage({ id: "culrute_title" }),
//               }}
//             />

//             <p className="mt-6 text-xl leading-8 text-gray-700">{text}</p>
//             <ul className="mt-6 text-xl leading-8 text-gray-700">
//               <li className="flex item-center ">
//                 <div className="w-8 h-8 p-2 bg-accent-2 rounded-[50%] mr-2">
//                   <CheckIcon
//                     className="h-4 w-4 text-accent-1"
//                     aria-hidden="true"
//                   />
//                 </div>
//                 {item1}
//               </li>

//               <li className="flex item-center mt-3">
//                 <div className="w-8 h-8 p-2 bg-accent-2 rounded-[50%] mr-2">
//                   <CheckIcon
//                     className="h-4 w-4 text-accent-1"
//                     aria-hidden="true"
//                   />
//                 </div>
//                 {item2}
//               </li>

//               <li className="flex item-center  mt-3">
//                 <div className="w-8 h-8 p-2 bg-accent-2 rounded-[50%] mr-2">
//                   <CheckIcon
//                     className="h-4 w-4 text-accent-1"
//                     aria-hidden="true"
//                   />
//                 </div>
//                 {item3}
//               </li>

//               <li className="flex item-center  mt-3">
//                 <div className="w-8 h-8 p-2 bg-accent-2 rounded-[50%] mr-2">
//                   <CheckIcon
//                     className="h-4 w-4 text-accent-1"
//                     aria-hidden="true"
//                   />
//                 </div>
//                 {item4}
//               </li>

//               <li className="flex item-center  mt-3">
//                 <div className="w-8 h-8 p-2 bg-accent-2 rounded-[50%] mr-2">
//                   <CheckIcon
//                     className="h-4 w-4 text-accent-1"
//                     aria-hidden="true"
//                   />
//                 </div>
//                 {item5}
//               </li>
//             </ul>

//             <div className="mt-6 flex items-center gap-x-6">
//               <button
//                 onClick={() => onOpenForm(true)}
//                 className="z-[999999] lg:z-[0]  fixed top-auto bottom-0 left-0 rounded-[0px] lg:rounded-[40px] w-full lg:static text-center lg:w-auto  lg:min-w-[147px] bg-accent-1 p-4 text-sm font-semibold text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 {intl.formatMessage({ id: "header_button" })}
//               </button>
//             </div>

//             {/* <div className="flex mt-6 ">
//                     <Button title={intl.formatMessage({id:"header_button"})} link="#" text={intl.formatMessage({id:"header_button"})}/>
//                     </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
    
//   );
// }




import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const values = [
  {
    name: 'Experiencia Intercultura',
    description:
      'Sumergirse en una nueva cultura durante el voluntariado proporciona una experiencia intercultural enriquecedora, fomentando la comprensión global y la apreciación de la diversidad.',
  },
  {
    name: 'Desarrollo de Habilidades Personales',
    description:
      'Participar en un programa de voluntariado social brinda la oportunidad de desarrollar habilidades personales como la empatía, la paciencia, la comunicación efectiva, flexibilidad, capacidad para resolver problemas, entre otras.',
  },
  {
    name: 'Adquisición de Experiencia Laboral',
    description:
      'Para aquellos que buscan ingresar al mercado laboral, el voluntariado social puede proporcionar experiencia valiosa que puede destacar en el currículum.',
  },
  {
    name: 'Construcción de Redes de Contactos',
    description:
      'Al tener contacto con personas de diversas procedencias y colaborar en proyectos sociales, se establecen conexiones valiosas que pueden ser beneficiosas en el ámbito personal y profesional.',
  },
  {
    name: 'Mejora del Idioma',
    description:
      ' Participar en un programa de voluntariado en un entorno donde se habla un idioma diferente puede ayudar a mejorar las habilidades lingüísticas de manera práctica y natural.',
  },
  {
    name: 'Crecimiento Profesional',
    description:
      'El voluntariado social puede contribuir al crecimiento profesional al proporcionar oportunidades para adquirir y perfeccionar habilidades específicas relacionadas con el área de trabajo voluntario.',
  },
  {
    name: 'Desarrollo de la Autoconfianza',
    description:
      'Enfrentar nuevos desafíos y superar obstáculos durante el voluntariado contribuye al desarrollo de la autoconfianza y la resiliencia.',
  },
  {
    name: 'Conciencia Social',
    description:
      ' El voluntariado social fomenta la conciencia social al abordar problemas y desafíos reales, creando una mayor comprensión de las cuestiones sociales y promoviendo la responsabilidad cívica.',
  },
  {
    name: 'Memorias y Experiencias Inolvidables',
    description:
      ' El programa de voluntariado social crea recuerdos duraderos y experiencias inolvidables al vivir situaciones únicas y significativas junto con otros voluntarios y miembros de la comunidad.',
  },

]

export default function Culture({text}:any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const intl = useIntl();

  return (
    <div className="bg-white">
     

     <div className="relative isolate overflow-hidden bg-white px-5 py-24 sm:py-32 lg:overflow-visible lg:px-0">
       
  
        {/* Values section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto max-w-4xl text-center mb-12 ">
          <span className="  bg-gradient-to-r from-accent-1 via-red-400 to-blue-400 inline-block text-transparent bg-clip-text"></span>
          <div
            className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "culrute_title"  }),
            }}
          />
        </div>
            <p className=" text-lg leading-8 text-gray-600">
            {text}
            </p>
          </div>
          <div className="mt-12 xl:mx-auto xl:max-w-7xl xl:px-8 mb-12">
          <div className="px-6">
            <img
              src="/img/blog4.png"
              alt=""
              className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
            />
          </div>
        </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

      </div>

     
    </div>
  )
}
