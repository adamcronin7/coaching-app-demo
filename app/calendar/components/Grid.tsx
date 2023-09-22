import React from 'react'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const blocks = [


  {
    id: 1,
    name: 'Block 1',
  },
  {
    id: 2,
    name: 'Block 2',
  },
  {
    id: 3,
    name: 'Block 3',
  },
  {
    id: 4,
    name: 'Block 4',
  },
]

const weeks = [


  {
    id: 1,
    name: 'Week 1',
  },
  {
    id: 2,
    name: 'Week 2',
  },
  {
    id: 3,
    name: 'Week 3',
  },
  {
    id: 4,
    name: 'Week 4',
  },
]


const workouts = [
  {
    session: 'Session 2',
    exercises: ["Squat", "Bench", "Deadlift"],
    sets: ['3x5', '3x5', '3x4'],
    week: 4,
    block: 4,
    exercise1: 'Squats',
    scheduled: '14-07-2023',
  },
  {
    session: 'Week 2, Session 2',
    exercises: ["Deadlift", "Overhead Press", "Rows"],
    sets: ['3x5', '3x5', '3x4'],
    week: 4,
    block: 4,
    exercise1: 'Deadlifts',
    scheduled: '16-07-2023',
  },
  {
    session: 'Week 2, Session 3',
    exercises: ["Squat", "Bench"],
    sets: ['2x7', '3x8'],
    week: 4,
    block: 4,
    exercise1: 'Squats',
    scheduled: '18-07-2023',
  },
  {
    session: 'Week 2, Session 4',
    exercises: ["Bench", "Pull Ups", "Dips"],
    sets: ['3x5', '3x5', '3x4'],
    week: 4,
    block: 4,
    exercise1: 'Bench Press',
    scheduled: null,
  },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}
  

function Grid() {

  const [blockSelected, setBlockSelected] = useState(blocks[3])

  const [weekSelected, setWeekSelected] = useState(weeks[3])

  const filteredWorkouts = workouts.filter((item) => item.week === weekSelected.id && item.block === blockSelected.id)


  return (
    <div>
    {/* Selectors */}
    <div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 pl-24 pr-24 pt-4'>
      <div>
      <Listbox value={blockSelected} onChange={setBlockSelected}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Choose Block</Listbox.Label>
            <div className="relative mt-2">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#499F68] sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  <span className="ml-3 block truncate">{blockSelected.name}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {blocks.map((blocks) => (
                    <Listbox.Option
                      key={blocks.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'bg-[#499F68] text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      value={blocks}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span
                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                              {blocks.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-[#499F68]',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
      </div>

      <div>
      <Listbox value={weekSelected} onChange={setWeekSelected}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Choose Week</Listbox.Label>
            <div className="relative mt-2">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#499F68] sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  <span className="ml-3 block truncate">{weekSelected.name}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {weeks.map((weeks) => (
                    <Listbox.Option
                      key={weeks.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'bg-[#499F68] text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      value={weeks}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span
                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                              {weeks.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-[#499F68]',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
      </div>
      </div>
      </div>


    {/* Workout list */}
    <div className='flex justify-center gap-4 pl-24 pr-24 pt-4'>
    <ul role="list" className="lg:w-[1000px] justify-self-center items-start divide-y divide-gray-100">
            {filteredWorkouts.map((workouts) => (
              <li key={workouts.week} className="flex justify-between gap-x-6 py-5 px-5 hover:bg-gray-300">
                <div className="flex gap-x-4">
                  <div className="min-w-0 flex-auto">
                  {workouts.exercises.map((exercises, index) =>
                    <p className="text-sm font-semibold leading-6 text-gray-900">{exercises}: &nbsp; {workouts.sets[index]}</p>
                  )}
                  </div>
                </div>
                
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">{workouts.scheduled}</p>
                  {workouts.scheduled ? (
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Scheduled: <time dateTime={workouts.scheduled}>{workouts.scheduled}</time>
                    </p>
                  ) : (
                    <div className="mt-1 flex items-center gap-x-1.5">
                      <p className="text-xs leading-5 text-gray-500">Unscheduled</p>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
    </div>
    </div>
  )
}

export default Grid
