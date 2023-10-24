import {
  CalendarIcon,
  MapPinIcon,
} from '@heroicons/react/20/solid'

const meetings = [
  {
    id: 1,
    date: 'January 10th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Event title created by ICYE Colombia',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Bogotá',
  },
  {
    id: 2,
    date: 'January 10th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Event title created by ICYE Colombia',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Bogotá',
  },
  {
    id: 3,
    date: 'January 10th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Event title created by ICYE Colombia',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Bogotá',
  },
  {
    id: 4,
    date: 'January 10th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Event title created by ICYE Colombia',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Bogotá',
  },
  {
    id: 5,
    date: 'January 10th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Event title created by ICYE Colombia',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Bogotá',
  },
  {
    id: 6,
    date: 'January 10th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Event title created by ICYE Colombia',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Bogotá',
  },
  // More meetings...
]
const days = [
  { date: '2021-12-27' },
  { date: '2021-12-28' },
  { date: '2021-12-29' },
  { date: '2021-12-30' },
  { date: '2021-12-31' },
  { date: '2022-01-01', isCurrentMonth: true },
  { date: '2022-01-02', isCurrentMonth: true },
  { date: '2022-01-03', isCurrentMonth: true },
  { date: '2022-01-04', isCurrentMonth: true },
  { date: '2022-01-05', isCurrentMonth: true },
  { date: '2022-01-06', isCurrentMonth: true },
  { date: '2022-01-07', isCurrentMonth: true },
  { date: '2022-01-08', isCurrentMonth: true },
  { date: '2022-01-09', isCurrentMonth: true },
  { date: '2022-01-10', isCurrentMonth: true },
  { date: '2022-01-11', isCurrentMonth: true },
  { date: '2022-01-12', isCurrentMonth: true, isToday: true },
  { date: '2022-01-13', isCurrentMonth: true },
  { date: '2022-01-14', isCurrentMonth: true },
  { date: '2022-01-15', isCurrentMonth: true },
  { date: '2022-01-16', isCurrentMonth: true },
  { date: '2022-01-17', isCurrentMonth: true },
  { date: '2022-01-18', isCurrentMonth: true },
  { date: '2022-01-19', isCurrentMonth: true },
  { date: '2022-01-20', isCurrentMonth: true },
  { date: '2022-01-21', isCurrentMonth: true },
  { date: '2022-01-22', isCurrentMonth: true, isSelected: true },
  { date: '2022-01-23', isCurrentMonth: true },
  { date: '2022-01-24', isCurrentMonth: true },
  { date: '2022-01-25', isCurrentMonth: true },
  { date: '2022-01-26', isCurrentMonth: true },
  { date: '2022-01-27', isCurrentMonth: true },
  { date: '2022-01-28', isCurrentMonth: true },
  { date: '2022-01-29', isCurrentMonth: true },
  { date: '2022-01-30', isCurrentMonth: true },
  { date: '2022-01-31', isCurrentMonth: true },
  { date: '2022-02-01' },
  { date: '2022-02-02' },
  { date: '2022-02-03' },
  { date: '2022-02-04' },
  { date: '2022-02-05' },
  { date: '2022-02-06' },
]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Calendar({showAll}) {

  const getFirst3Meetings = meetings.filter((meeting) => (meeting.id < 4) )

  const first3 = getFirst3Meetings.map((meeting) =>  (

    <li key={meeting.id} className="relative flex space-x-6 py-6 xl:static bg-accent-2 my-2">
      
            <img src={meeting.imageUrl} alt="" className="h-14 w-14 flex-none rounded-full mx-4" />
            <div className="flex-auto ">
              <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{meeting.name}</h3>
                <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row justify-between">
              <div className="flex items-start space-x-3">
                    <dt className="mt-0.5">
                    <span className="sr-only">Date</span>
                    <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <time dateTime={meeting.datetime}>
                      {meeting.date} at {meeting.time}
                    </time>
                  </dd>
              </div>
                <div className="mt-2 flex items-end space-x-3 xl:mr-3.5 xl:mt-0  xl:pr-3.5">
                  <dt className="mt-0.5">
                      <span className="sr-only">Location</span>
                      <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>{meeting.location}</dd>
                  </div>
                </dl>
              </div>
          </li>
  ))

  const all = meetings.map((meeting) =>  (

          <li key={meeting.id} className="relative flex space-x-6 py-6 xl:static bg-accent-2 my-2">
            <img src={meeting.imageUrl} alt="" className="h-14 w-14 flex-none rounded-full mx-4" />
            <div className="flex-auto ">
              <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{meeting.name}</h3>
                <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row justify-between">
              <div className="flex items-start space-x-3">
                    <dt className="mt-0.5">
                    <span className="sr-only">Date</span>
                    <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <time dateTime={meeting.datetime}>
                      {meeting.date} at {meeting.time}
                    </time>
                  </dd>
              </div>
                <div className="mt-2 flex items-end space-x-3 xl:mr-3.5 xl:mt-0  xl:pr-3.5">
                  <dt className="mt-0.5">
                      <span className="sr-only">Location</span>
                      <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>{meeting.location}</dd>
                  </div>
                </dl>
              </div>
          </li>
   
  ))

  







  return (
   <div className='bg-white'>
     <div className='mx-auto max-w-2xl py-24 '>
      <h2 className="text-base font-semibold leading-6 text-gray-900"></h2>
      <div className="mx-auto max-w-4xl text-center ">
            <p className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl">
            Upcoming meetings
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore velit esse ad. Magnam cupiditate cum ipsam cumque debitis ad, qui mollitia sed maiores dolores omnis, sit vitae corrupti laborum inventore.
          </p>
      <div className="lg:grid lg:grid-cols-12 mx-auto max-w-4xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 ">
        <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-12 ">
        {showAll ? all : first3}
        </ol> 
      </div>
    </div>
   </div>
  )
}
