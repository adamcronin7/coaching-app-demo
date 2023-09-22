import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import RemoveModal from './RemoveModal'
import AddModal from './AddModal'

const people = [


    {
      name: 'Athlete One',
      email: 'athlete1@athlete.com',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Athlete Two',
      email: 'athlete2@athlete.com',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Athlete Three',
      email: 'athlete3@athlete.com',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Athlete Four',
      email: 'athlete4@athlete.com',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Athlete Five',
      email: 'athlete5@athlete.com',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]

function Athletes() {
  return (
    <div>
    <div className='grid grid-cols-1 gap-4 pl-24 pr-24 py-8'>
        <h2 className='justify-self-center text-2xl text-center py-4'>Athletes</h2>
        <ul role="list" className="lg:w-[500px] justify-self-center items-start row-start-2 divide-y divide-gray-100">
            {people.map((person) => (
            <li key={person.email} className="flex justify-between gap-x-6 py-5 px-5 hover:bg-gray-300">
                <div className="flex gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                </div>
                </div>
                <div className="hidden self-center sm:flex sm:flex-col sm:items-end">
                <RemoveModal/>
                </div>
            </li>
            ))}
        </ul>
        <div className='justify-self-center'>
            <AddModal/>
        </div>
    </div>
    </div>
  )
}

export default Athletes