import React from 'react'

function Marker({title, styles}) {
  return (
    <div className={` flex justify-center items-center px-[30px] py-[10px] text-[12px] font-bold rounded-[25px] max-w-fit ${styles}`}>{title}</div>
  )
}

export default Marker