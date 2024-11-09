import React from 'react'

function Marker({title, styles}) {
  return (
    <div className={` flex justify-center items-center px-[30px] py-[14px] text-[12px] font-bold rounded-full ${styles}`}>{title}</div>
  )
}

export default Marker