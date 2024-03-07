import { useIntl } from "react-intl";

export default function Faqs({
  text,
  question1,
  answer1,
  question2,
  answer2,
  question3,
  answer3,
  question4,
  answer4,
  question5,
  answer5,
  question6,
  answer6,
}: any) {
  const intl = useIntl();

  return (
    <div className="bg-accent-2 px-4 py-20  ">
      <div className="mx-auto max-w-6xl text-center ">
        <span className="bg-gradient-to-r from-accent-1 via-red-400 to-blue-400 inline-block text-transparent bg-clip-text"></span>
        <div
          className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl"
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "faqs_title" }),
          }}
        />
      </div>
      <div
        className="mx-auto px-4 my-20 max-w-6xl text-center text-lg leading-8 text-gray-700 css-wordpress"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <div className="mx-auto max-w-7xl lg:px-6 sm:px-2 mt-12 ">
        <div className="">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            <div>
              <dt className="text-xl font-semibold leading-7 text-gray-900">
                {question1}
              </dt>
              <dd className="mt-2 text-lg leading-7 text-gray-600">
                {answer1}
              </dd>
            </div>
            <div>
              <dt className="text-xl font-semibold leading-7 text-gray-900">
                {question2}
              </dt>
              <dd className="mt-2 text-lg leading-7 text-gray-600">
                {answer2}
              </dd>
            </div>
            <div>
              <dt className="text-xl font-semibold leading-7 text-gray-900">
                {question3}
              </dt>
              <dd className="mt-2 text-lg leading-7 text-gray-600">
                {answer3}
              </dd>
            </div>

            <div>
              <dt className="text-xl font-semibold leading-7 text-gray-900">
                {question4}
              </dt>
              <dd className="mt-2 text-lg leading-7 text-gray-600">
                {answer4}
              </dd>
            </div>

            <div>
              <dt className="text-xl font-semibold leading-7 text-gray-900">
                {question5}
              </dt>
              <dd className="mt-2 text-lg leading-7 text-gray-600">
                {answer5}
              </dd>
            </div>

            <div>
              <dt className="text-xl font-semibold leading-7 text-gray-900">
                {question6}
              </dt>
              <dd className="mt-2 text-lg leading-7 text-gray-600">
                {answer6}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
