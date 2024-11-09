import React from 'react'
import { CustomButton, Marker } from '../UI/index.js'

const VacancyCard = ({profession, salary, properties, city, candidatesCount}) => {
  return (
<div className='w-[1200px] h-[240px] border-solid border-[3px] border-main bg-[#F1F1F1] rounded-[32px] ml-[15px]'>
        <div className='ml-[32px] mb-[4px]'>
    
          <div className='flex mt-[15px]'>
            <h1 className='text-[34px] font-inter font-extrabold'>{profession}</h1>
            <p className='text-[16px] text-[#9A9A9A] ml-[735px] font-[700]'>{candidatesCount} candidates left</p>
          </div>
          <h2 className='text-[24px] font-inter font-semibold flex mt-[12px]'>Salary: <p className='text-[#055532] text-[24px] ml-[10px]'>{salary}</p></h2>
          <h2 className='text-[24px] font-inter font-semibold flex mt-[12px]'>Properties: <p className='text-[22px] text-[#828282] pt-[3px] pb-[3px] pl-[12px] pr-[12px] ml-[10px] bg-[#C5C5C5] rounded-[40px]'>{properties}</p></h2>
        </div>
        <div className='flex w-[100%] '>
          <h2 className='flex text-[24px] font-inter font-bold ml-[30px] mt-[12px] '>City: <p className='text-[#055532] text-[24px] ml-[10px]'>{city}</p></h2>
          <div className='flex ml-[50%] items-center'>
            <Marker title="Urgent" styles="bg-[#FF0000] text-white"/>
          <CustomButton containerStyles='text-[23px] font-inter font-bold !bg-[#055532] w-[300px] h-[55px] rounded-[30px] ml-[20px] border-0 ml-0 mr-4 pl-0 pr-0' textStyles = "text-white" title = "More"/>
        </div>
        </div>
    </div>
  )
}

export default VacancyCard