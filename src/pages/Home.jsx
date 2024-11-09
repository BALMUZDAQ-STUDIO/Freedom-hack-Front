import React, { useEffect } from 'react'
import Footer from '../modules/Footer'
import VacancyCard from '../components/VacancyCard';

const arr=[1,2,3,4,5];
function Home() {

  useEffect(()=>{
    
    console.log(arr)
  },[])

  return (
    <main>
    <Footer/>
    <div className='flex flex-col gap-4'>
      {arr.map((i)=>(
        <VacancyCard key={i}/>
      ))}
    </div>
    </main>
  )
}

export default Home 