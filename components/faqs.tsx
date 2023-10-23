import { useIntl } from "react-intl";

const faqs = [
    {
      id: 1,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
  ]
  
  export default function Faqs() {
    
    return (
      <div className="bg-white py-24">
         <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl">
            {/* Frequently asked questions */} Preguntas frecuentes
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Have a different question and can’t find the answer you’re looking for? Reach out to our support team by{' '}
            <a href="#" className="font-semibold text-[#011f7fb3] hover:text-accent-1">
              sending us an email
            </a>{' '}
            and we’ll get back to you as soon as we can.          </p>
        <div className="mx-auto max-w-7xl px-6 mt-10 lg:px-8">
          <div className="">
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit? </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore atque, quo veniam ea tempora cupiditate fugiat magnam, sequi aliquid blanditiis exercitationem natus fuga ipsa expedita adipisci pariatur amet. Ipsam, necessitatibus.</dd>
                </div>
                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit? </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore atque, quo veniam ea tempora cupiditate fugiat magnam, sequi aliquid blanditiis exercitationem natus fuga ipsa expedita adipisci pariatur amet. Ipsam, necessitatibus.</dd>
                </div>
                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit? </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore atque, quo veniam ea tempora cupiditate fugiat magnam, sequi aliquid blanditiis exercitationem natus fuga ipsa expedita adipisci pariatur amet. Ipsam, necessitatibus.</dd>
                </div>

                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit? </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore atque, quo veniam ea tempora cupiditate fugiat magnam, sequi aliquid blanditiis exercitationem natus fuga ipsa expedita adipisci pariatur amet. Ipsam, necessitatibus.</dd>
                </div>
                
                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit? </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore atque, quo veniam ea tempora cupiditate fugiat magnam, sequi aliquid blanditiis exercitationem natus fuga ipsa expedita adipisci pariatur amet. Ipsam, necessitatibus.</dd>
                </div>
                
                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit? </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore atque, quo veniam ea tempora cupiditate fugiat magnam, sequi aliquid blanditiis exercitationem natus fuga ipsa expedita adipisci pariatur amet. Ipsam, necessitatibus.</dd>
                </div>
                
            </dl>
          </div>
        </div>
      </div>
    )
  }
  