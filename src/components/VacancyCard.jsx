import React from 'react'

const VacancyCard = ({profession, salary, properties, city, candidatesCount}) => {
  return (
    <div className='w-[1200px] h-[240px] border-solid border-[6px] border-main bg-[#F1F1F1] rounded-[32px] ml-[15px]'>
        <div className='ml-[32px] mb-[18px]'>
          <div className='flex mt-[15px]'>
            <h1 className='text-[34px] font-inter font-bold text-[#00874C]'>{profession}</h1>
            <p className='text-[16px] text-[#9A9A9A] ml-[750px] font-[700]'>{candidatesCount} candidates left</p>
          </div>
          <h2 className='text-[24px] font-inter font-bold flex mt-[5px]'>Salary: <p className='text-[#055532] text-[24px] ml-[10px]'>{salary}</p></h2>
          <h2 className='text-[24px] font-inter font-bold flex mt-[5px]'>Properties: <p className='text-[22px] text-[#828282] pt-[3px] pb-[3px] pl-[12px] pr-[12px] ml-[10px] bg-[#C5C5C5] rounded-[40px]'>{properties}</p></h2>
        </div>
        <div className='flex w-[1000px]'>
          <button className='text-white text-[25px] font-inter font-bold bg-[#055532] pt-[8px] pb-[8px] pl-[110px] pr-[110px] rounded-[30px] ml-[20px]'>More</button>
          <h2 className='flex text-[24px] font-inter font-bold ml-[30px] h-[30px] mt-[8px]'>City: <p className='text-[#055532] text-[24px] ml-[10px]'>{city}</p></h2>
          <button className='text-white text-[25px] font-inter font-bold bg-[#FF0000] pt-[8px] pb-[8px] pl-[16px] pr-[16px] rounded-[30px] ml-[585px]'>Urgent</button>
        </div>
    </div>
  )
}

export default VacancyCard