import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Q-</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        <form>
            <input
                type='search'
                placeholder='Search...'
                className='bg-transparent focus:outline-none w-24 sm:w-64'
            />
            <FaSearch className='text-slate-700'/>
        </form>
        </div>
    </header>
  )
}
