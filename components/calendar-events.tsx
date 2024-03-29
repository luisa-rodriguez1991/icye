import { CalendarIcon, MapPinIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import Image from 'next/image'

export default function Calendar({ text, events }: any) {
  const router = useRouter();
  const { locale } = router;
  const intl = useIntl();

  for (var o in events) {
    events[o].event_date = new Date(events[o].acf.event_date);
  }

  let sortedList = events.sort((a: any, b: any) => a.event_date - b.event_date);

  sortedList = sortedList.filter((x: any) => x.event_date > new Date());

  const all = sortedList.map((meeting: any) => (
    <li
      key={meeting.id}
      // fondo cuadros eventos
      className=" rounded-xl relative flex space-x-2 p-6  bg-accent-2 my-2 relative"
    >
      <Link
        locale={locale}
        className="absolute left-0 top-0 cursor-pointer w-full h-full"
        href={`/events/${meeting.slug}`}
      >
        <span className="absolute inset-0" />
      </Link>

      <Image
        className="h-14 w-14 flex-none rounded-full mx-2 lg:mx-4"
        src={meeting._embedded['wp:featuredmedia']['0'].media_details.sizes.thumbnail.source_url}
                  alt={meeting._embedded['wp:featuredmedia']['0'].alt_text}
                  width={meeting._embedded['wp:featuredmedia']['0'].media_details.sizes.thumbnail.width}
                  height={meeting._embedded['wp:featuredmedia']['0'].media_details.sizes.thumbnail.height}     />
      
     

      <div className="flex-auto ">

        <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">
          {meeting.title.rendered}
          
        </h3>
        <dl className="mt-2 flex flex-col text-gray-800 xl:flex-row justify-between">
          <div className="flex items-start space-x-3">
            <dt className="mt-0.5">
              <span className="sr-only">Date</span>
              <CalendarIcon
                className="h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            </dt>
            <dd>
              
            <time dateTime={meeting.acf.event_date}>
                            <span className="capitalize">
                            {new Date(meeting.acf.event_date).toLocaleDateString(locale, {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                              hour12: true
                            })}
                            </span>
                          </time>
            </dd>
          </div>
          <div className="mt-2 flex items-end space-x-3 xl:mr-3.5 xl:mt-0  xl:pr-3.5">
            <dt className="mt-0.5">
              <span className="sr-only">Location</span>
              <MapPinIcon
                className="h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            </dt>
            <dd>{meeting.acf.location}</dd>
          </div>
        </dl>
      </div>
    </li>
  ));

  return (
    <div className="mx-auto max-w-7xl ">
      <h2 className="text-base font-semibold leading-6 text-gray-900"></h2>
      <div className="mx-auto max-w-7xl text-center ">
        {/* titulo */}
        <p className="mt-2 text-lg font-bold tracking-tight text-accent-1 sm:text-5xl">
          {intl.formatMessage({ id: "calendar_title" })}
        </p>
      </div>
      <p className="mx-auto my-20 max-w-6xl text-center text-lg leading-8 text-gray-700 ">
        {text}
      </p>
      <div className="lg:grid lg:grid-cols-12 mx-auto max-w-4xl  pt-6 lg:pt-12 sm:pt-24 lg:px-8 ">
        <ol className=" divide-y divide-gray-100 text-sm leading-6 lg:col-span-12 ">
          {all}
        </ol>
      </div>
    </div>
  );
}
