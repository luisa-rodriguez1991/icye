import { CheckIcon } from '@heroicons/react/24/solid'
import {Battery0Icon} from "@heroicons/react/24/solid";
import { useIntl } from 'react-intl';

const incentives = [
  {
    name: 'Inscripcion en linea',
    imageSrc: '/img/form.svg',
    description: "Inscribete en el botón al final de la descripción de cada programa que aparece más abajo y lee el documento que te enviaremos.",
  },
  {
    name: 'Entrvista 1 a 1',
    imageSrc: '/img/chat.svg',
    description: "Recibirás un link para que agendes una cita personalizada en la que aclararemos todas tus dudas y te explicaremos lo que sigue..",
  },
  {
    name: 'Asignacion de cupo',
    imageSrc: '/img/like.svg',
    description:
      "Una vez todo este claro, te pediremos $50.000 para comenzar el proceso administrativo, firmaremos algunos documentos y tendrás tu cupo..",
  },
]
export default function HowToParticipate({title1, title2, title3, text1, text2, text3}) {
  
  const intl = useIntl()

  return (
    <div className="bg-accent-2">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-accent-2 px-6 py-16 sm:p-16">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <div className="mx-auto max-w-4xl text-center">
              <p className="mb-24 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl">
               {intl.formatMessage({id:"how_to_participate_title"})}
              </p>
            </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">




                 <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                    <img className="mx-auto h-16 w-16 " src='/img/form.svg' alt="" />
                    </div>
                    </div>
                    <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                      <h3 className="text-xl font-bold text-gray-900">{title1}</h3>        
                      <p className="mt-2  text-gray-600">{text1}</p> 
                    </div>
                 </div>     
                 
                 <div  className="text-center sm:flex sm:text-left lg:block lg:text-center">

                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                    <img className="mx-auto h-16 w-16 " src='/img/chat.svg' alt="" />
                    </div>
                    </div>
                    <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                      <h3 className="text-xl font-bold text-gray-900">{title2}</h3>        
                      <p className="mt-2  text-gray-600">{text2}</p>
                    </div>
                 
                 </div>     
                 
                 <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                      <div className="sm:flex-shrink-0">
                      <div className="flow-root">
                      <img className="mx-auto h-16 w-16 " src='/img/like.svg' alt="" />
                      </div>
                      </div>
                      <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                        <h3 className="text-xl font-bold text-gray-900">{title3}</h3>        
                        <p className="mt-2  text-gray-600">{text3}</p>
                      </div>
                 
                 </div>








             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




