import {
  CalendarIcon,
  MapPinIcon,
} from '@heroicons/react/20/solid'
import { useIntl } from 'react-intl'

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Calendar({text, pageInfo, events, showAll}:any) {
  const intl = useIntl()
  const all = events.map((meeting) =>  (

          <li key={meeting.id} className="relative flex space-x-6 py-6 xl:static bg-accent-2 my-2">
            <img src={meeting.jetpack_featured_media_url} alt="" className="h-14 w-14 flex-none rounded-full mx-4" />
            <div className="flex-auto ">
              <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{meeting.title.rendered}</h3>
                <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row justify-between">
              <div className="flex items-start space-x-3">
                    <dt className="mt-0.5">
                    <span className="sr-only">Date</span>
                    <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <time dateTime={meeting.date}>
                    <span className='capitalize'>{new Date(meeting.acf.event_date).toLocaleDateString("es-CO", { weekday: "long"})}, </span>
                    <span className='capitalize'>{new Date(meeting.acf.event_date).toLocaleDateString("es-CO", { day: "numeric"})} </span> 
                    de  <span className='capitalize'>{new Date(meeting.acf.event_date).toLocaleDateString("es-CO", { month: "long"})} </span>
                    del <span className='capitalize'>{new Date(meeting.acf.event_date).toLocaleDateString("es-CO", { year: "numeric"})} </span>
                    
                     <span className='font-semibold'> {new Date(meeting.acf.event_date).toLocaleTimeString("es-CO",{ hour: "2-digit", minute: "2-digit", hour12: true })} </span>
                    </time>
                  </dd>
              </div>
                <div className="mt-2 flex items-end space-x-3 xl:mr-3.5 xl:mt-0  xl:pr-3.5">
                  <dt className="mt-0.5">
                      <span className="sr-only">Location</span>
                      <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>{meeting.acf.location}</dd>
                  </div>
                </dl>
              </div>
          </li>
   
  ))

  return (
   <div className='bg-white p-5'>
     <div className='mx-auto max-w-2xl  '>
      <h2 className="text-base font-semibold leading-6 text-gray-900"></h2>
      <div className="mx-auto max-w-4xl text-center ">
            <p className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl">
            {intl.formatMessage({id:"calendar_title"})}
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 ">
         {text}
          </p>
      <div className="lg:grid lg:grid-cols-12 mx-auto max-w-4xl px-6 pb-6 pt-12 sm:pt-24 lg:px-8 ">
        <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-12 ">
        {all }
        </ol> 
      </div>
    </div>
   </div>
  )
}
