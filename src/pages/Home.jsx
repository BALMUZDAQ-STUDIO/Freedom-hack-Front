import React, { useEffect } from 'react'
import Header from '../modules/Header'
import VacancyCard from '../components/VacancyCard';
import CandidateCard from '../components/CandidateCard';
import { useGlobalContext } from '../lib/context';
import {icons} from "../constants/index.js";

const arr=[1,2,3,4,5];
function Home() {
  const {isLogin} = useGlobalContext();

  useEffect(()=>{
    console.log(isLogin);
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
      <CandidateCard 
          avatarSrc={icons.avatar}
          name={"Daler Achmedov"}
          profession={"UX/UI Designer"}
          experience={"3 years"}
          rank={"85"}
          city={"Almaty"}
          date={"November 8, 2024"}
        />
    </div>
    </main>
  )
}

export default Home 