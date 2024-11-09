import React from 'react'
import { CustomButton } from '../UI/index.js'

const CandidateCard = ({name, avatarSrc, profession, experience, rank, city, date}) => {
  return (
    <div className='w-[1200px] h-[240px] border-solid border-[6px] border-main bg-[#F1F1F1] rounded-[32px] ml-[15px] flex'>
        <img src={avatarSrc} alt="avatar" width={"200px"} height={"200px"} className='ml-[45px] mt-[15px]'/>
        
        <div className='flex-inline ml-[50px]'>
            <div className='flex mt-[15px]'>
                <h1 className='text-[34px] font-inter font-extrabold'>{name}</h1>
                <p className='text-[16px] text-[#9A9A9A] ml-[370px] font-[700]'>updated on {date}</p>
            </div>

            <h2 className='text-[24px] font-inter font-semibold text-[#055532]'>{profession}</h2>

            <h2 className='flex mt-[15px] text-[24px] font-inter font-semibold'>Experience: <p className='text-[24px] font-inter font-semibold text-[#055532] ml-[10px]'>{experience}</p></h2>

            <div className='flex w-[100%]'>
                <div>
                    <h2 className='flex text-[24px] font-inter font-semibold' >Rank: <p className='text-[24px] font-inter font-semibold ml-[10px]'>{rank}/100</p></h2>
                    <h2 className='flex text-[24px] font-inter font-semibold' >City: <p className='text-[24px] font-inter font-semibold text-[#055532] ml-[10px]'>{city}</p></h2>
                </div>
                <CustomButton containerStyles='text-[23px] font-inter font-bold !bg-[#055532] w-[300px] h-[55px] rounded-[30px] ml-[435px] border-0 ml-0 mr-0 pl-0 pr-0 mt-[10px]' textStyles = "text-white" title = "More"/>
            </div>
        </div>
    </div>
  )
}

export default CandidateCard