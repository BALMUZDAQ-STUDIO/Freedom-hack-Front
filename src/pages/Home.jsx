import React, { useEffect } from 'react'
import Header from '../modules/Header'
import VacancyCard from '../components/VacancyCard';
import { useGlobalContext } from '../lib/context';

const arr=[1,2,3,4,5];
function Home() {
  const {isLogin} = useGlobalContext();

  useEffect(()=>{
    console.log(isLogin);
  },[])

  return (
    <main>
    <Header/>
    <div className='flex flex-col gap-4'>
      {arr.map((i)=>(
        <VacancyCard key={i}/>
      ))}
    </div>
    </main>
  )
}

export default Home 