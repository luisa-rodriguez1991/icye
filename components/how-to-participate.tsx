import { FormattedMessage, useIntl } from "react-intl";

const incentives = [
  {
    name: "Inscripcion en linea",
    imageSrc: "/img/form.svg",
    description:
      "Inscribete en el botón al final de la descripción de cada programa que aparece más abajo y lee el documento que te enviaremos.",
  },
  {
    name: "Entrvista 1 a 1",
    imageSrc: "/img/chat.svg",
    description:
      "Recibirás un link para que agendes una cita personalizada en la que aclararemos todas tus dudas y te explicaremos lo que sigue..",
  },
  {
    name: "Asignacion de cupo",
    imageSrc: "/img/like.svg",
    description:
      "Una vez todo este claro, te pediremos $50.000 para comenzar el proceso administrativo, firmaremos algunos documentos y tendrás tu cupo..",
  },
];
export default function HowToParticipate({
  title1,
  title2,
  title3,
  text1,
  text2,
  text3,
}: any) {
  const intl = useIntl();

  return (
    <div className="bg-accent-2 ">
      <div className="mx-auto max-w-7xl px-6 lg:py-12 ">
        <div className=" bg-accent-2 py-6  ">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <div className="mx-auto max-w-7xl text-center">
                <div className="lg:mb-24 mb-16 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl">
                  <span className="bg-gradient-to-r from-accent-1 via-red-400 to-blue-400 inline-block text-transparent bg-clip-text"></span>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: intl.formatMessage({
                        id: "how_to_participate_title",
                      }),
                    }}
                  />
                  {/* How to <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>   participate ?</span> */}
                </div>
              </div>
            </div>
            {/* primer paso */}
            <div className=" mt-12 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
              <div className="lg:text-center sm:flex sm:text-left lg:block lg:text-center">
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <img
                      className="mx-auto h-16 w-16 "
                      src="/img/form.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{title1}</h3>
                  <div className="mt-2 text-lg leading-7 text-gray-700 " dangerouslySetInnerHTML={{__html:text1}}/>
                </div>
              </div>
              {/* segundo paso */}
              <div className="lg:text-center sm:flex sm:text-left lg:block lg:text-center">
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <img
                      className="mx-auto h-16 w-16 "
                      src="/img/chat.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{title2}</h3>
                  <div className="mt-2 text-lg leading-7 text-gray-700 " dangerouslySetInnerHTML={{__html:text2}}/>
                </div>
              </div>
              {/* tercer paso */}
              <div className="lg:text-center sm:flex sm:text-left lg:block lg:text-center">
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <img
                      className="mx-auto h-16 w-16 "
                      src="/img/like.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{title3}</h3>
                  <div className="mt-2 text-lg leading-7 text-gray-700 " dangerouslySetInnerHTML={{__html:text3}}/>                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[100px] lg:h-[200px]">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          width="100%"
          x="0px"
          y="0px"
          viewBox="0 0 500 250"
          enableBackground="new 0 0 500 250"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
