import Link from 'next/link'
import React from 'react'

const workouts = [


    {
      session: 'Week 4, Day 1',
      week: 4,
      block: 4,
      exercise1: 'Squat',
      scheduled: '14-07-2023',
    },
    {
      session: 'Week 4, Day 2',
      week: 4,
      block: 4,
      exercise1: 'Deadlift',
      scheduled: '16-07-2023',
    },
    {
      session: 'Week 4, Day 3',
      week: 4,
      block: 4,
      exercise1: 'Squat',
      scheduled: '18-07-2023',
    },
    {
      session: 'Week 4, Day 4',
      week: 4,
      block: 4,
      exercise1: 'Bench Press',
      scheduled: null,
    },
  ]



function Schedule() {
  return (
    <div>
      <h1 className='text-5xl justify-self-center pl-24 pr-24 pt-4'>Welcome Back, User</h1>
    
    <div className='grid grid-cols-1 gap-4 pl-24 pr-24 pt-24'>
          <h2 className='justify-self-center text-2xl text-center py-4'>Upcoming Workouts</h2>
          <ul role="list" className="lg:w-[500px] justify-self-center items-start row-start-2 divide-y divide-gray-100">
            {workouts.map((workouts) => (
              <li key={workouts.week} className="flex justify-between gap-x-6 py-5 px-5 hover:bg-gray-300">
                <div className="flex gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{workouts.session}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">Block {workouts.block}</p>
                  </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">{workouts.exercise1}</p>
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
          <div className='justify-self-center'>
          <Link href='/calendar'>
            <p className='max-w-[200px]  text-[#157A6E] cursor-pointer text-center'>See all workouts</p>
          </Link>
          </div>
    </div>
    </div>
  )
}

export default Schedule