import React from 'react'

function VacancyCard(title) {
  return (
    <div className='w-[1200px] h-[240px] border-solid border-[6px] border-main bg-[#F1F1F1] rounded-[32px]'>
        <p>{title}</p>
        <p></p>
    </div>
  )
}

export default VacancyCard