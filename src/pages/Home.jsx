import React, { useEffect } from 'react'
import Header from '../modules/Header'
import VacancyCard from '../components/VacancyCard';

const arr=[1,2,3,4,5];
function Home() {

  useEffect(()=>{
    
    console.log(arr)
  },[])

  return (
    <main>
    <Header/>
    <div className='flex flex-col gap-4 mt-[15px]'>
      {arr.map((i)=>(
        <VacancyCard 
          key={i} 
          profession={"C# programmer"}
          salary={"from 2000$"}
          properties={"3 year experience"}
          city={"Almaty"}
          candidatesCount={100}
        />
      ))}
    </div>
    </main>
  )
}

export default Home 