import React, { useState } from 'react'
import { Header } from '../modules'
function Create() {
    const [name, setName] = useState("")
  return (
    <main className="flex justify-center flex-col">
        <Header/>
        <p className='text-[#055532] text-[64px] text-center font-bold'>Create vacancy</p>
        <form>
        <div className="flex ">
        <div>
            <div className='ml-6'>
                <p className='font-bold text-[24px] m-2'>Vacancy name</p>
                <input className="bg-[#F2F2F2] rounded-[80px] h-[80px] w-[640px] text-[24px] font-bold pl-5" placeholder='Enter vacancy name...'/>
            </div>
            <div className='ml-6'>
                <p className='font-bold text-[24px] m-2'>Vacancy name</p>
                <div className='flex items-center'>
                <input className="bg-[#F2F2F2] rounded-[80px] h-[80px] w-[172px] text-[24px] font-bold pl-5" />
                <div className=''></div>
                <input className="bg-[#F2F2F2] rounded-[80px] h-[80px] w-[172px] text-[24px] font-bold pl-5" />

                </div>
            </div>

        </div>
        <div></div>
        </div>
        </form>
    </main>
  )
}

export default Create