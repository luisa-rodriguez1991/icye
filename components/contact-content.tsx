import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import Image from 'next/image'

export default function ContactContent({
  text,
  img,
  address,
  address2,
  email,
  whatsapp,
}: any) {
  const router = useRouter();
  const intl = useIntl();
  const { locale } = router;


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl   py-12  lg:px-8 relative">
        <div className="lg:absolute lg:top-0 lg:bottom-0 lg:left-1/2 lg:right-1 mb-8 px-6">
          <Image
            className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-[70%] lg:mt-16 rounded-xl "
            src={img.sizes.large}
            alt=""
            width={img.sizes["large-width"]}
            height={img.sizes["large-height"]}
          />
        </div>

        <div className="pb-24  sm:pb-32 sm:pb-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pb-24">
          <div className="px-6 lg:px-8">
            <div className="lg:mx-auto lg:max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl">
                {intl.formatMessage({ id: "contact_content_title" })}
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">{text}</p>
            </div>
            <div className="mt-10 md:mt-0">
              <ul role="list" className="mt-6 space-y-4">
                {/* direccion */}
                <li>
                  <p className="text-sm leading-6 text-gray-600 ">
                    {address}
                    <br></br>
                    {address2}
                  </p>
                </li>
                {/* email */}
                <li>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {email}
                  </a>
                </li>
                {/* whatsapp */}
                <li className="flex ">
 
                  <img
                    className="col-span-2  max-h-6 w-auto object-contain lg:col-span-1 text-accent-1 mr-2"
                    src="/img/whatsapp.svg"
                    alt="Reform"
                    width={158}
                    height={48}
                  />
                  <a
                    target="_blank" href="https://wa.link/2bk6ie"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {whatsapp}
                  </a>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
