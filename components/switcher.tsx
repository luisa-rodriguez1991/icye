import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const mailingLists = [
  { id: 1, title: 'Newsletter', description: 'Last message sent an hour ago', users: '621 users' },
  { id: 2, title: 'Existing Customers', description: 'Last message sent 2 weeks ago', users: '1200 users' },
  { id: 3, title: 'Trial Users', description: 'Last message sent 4 days ago', users: '2740 users' },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Switcher({register}:any) {
  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])

  return (
    <RadioGroup {...register("type")} >
      <RadioGroup.Label className="text-base font-semibold leading-6 text-gray-900">
        Select a mailing list
      </RadioGroup.Label>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
          <RadioGroup.Option value='y'
            className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none border-gray-300"
          >
               <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                      hola
                    </RadioGroup.Label>
                    <RadioGroup.Description as="span" className="mt-1 flex items-center text-sm text-gray-500">
                      mundo
                    </RadioGroup.Description>
                    <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-gray-900">
                    luisas
                    </RadioGroup.Description>
                  </span>
                </span>
              </>
          </RadioGroup.Option>

          <RadioGroup.Option value='b'
            className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none border-gray-300"
          >
               <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                      hola
                    </RadioGroup.Label>
                    <RadioGroup.Description as="span" className="mt-1 flex items-center text-sm text-gray-500">
                      mundo
                    </RadioGroup.Description>
                    <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-gray-900">
                    luisas
                    </RadioGroup.Description>
                  </span>
                </span>
              </>
          </RadioGroup.Option>

          <RadioGroup.Option value='a'
            className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none border-gray-300"
          >
               <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                      hola
                    </RadioGroup.Label>
                    <RadioGroup.Description as="span" className="mt-1 flex items-center text-sm text-gray-500">
                      mundo
                    </RadioGroup.Description>
                    <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-gray-900">
                    luisas
                    </RadioGroup.Description>
                  </span>
                </span>
              </>
          </RadioGroup.Option>
      </div>
    </RadioGroup>
  )
}
