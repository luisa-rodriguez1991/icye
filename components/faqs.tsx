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
  
  export default function Faqs({text, question1, answer1, question2, answer2, question3, answer3, question4, answer4, question5, answer5, question6, answer6}) {

    const intl = useIntl()
    
    return (
      <div className="bg-accent-2 px-5 py-20 ">
          <div className="mx-auto max-w-4xl text-center ">
            <p className=" text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl">
            {/* Frequently asked questions */} {intl.formatMessage({id:"faqs_title"})}
            </p>
          </div>
          <div className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600" dangerouslySetInnerHTML={{__html:text}} />
        <div className="mx-auto max-w-7xl px-6 mt-12 lg:px-8">
          <div className="">
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
                <div>
                  <dt className="text-md font-semibold leading-7 text-gray-900">{question1}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{answer1}</dd>
                </div>
                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">{question2}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{answer2}</dd>
                </div>
                <div>
                  <dt className="text-md font-semibold leading-7 text-gray-900">{question3}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{answer3}</dd>
                </div>

                <div>
                  <dt className="text-md font-semibold leading-7 text-gray-900">{question4}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{answer4}</dd>
                </div>
                
                <div>
                  <dt className="text-md font-semibold leading-7 text-gray-900">{question5}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{answer5}</dd>
                </div>
                
                <div>
                  <dt className="text-md font-semibold leading-7 text-gray-900">{question6}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{answer6}</dd>
                </div>
                
            </dl>
          </div>
        </div>
      </div>
    )
  }
  