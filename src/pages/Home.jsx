import React, { useEffect } from 'react'
import Header from '../modules/Header'
import React, { useEffect, useState } from 'react'

import VacancyCard from '../components/VacancyCard';
import CandidateCard from '../components/CandidateCard';
import { useGlobalContext } from '../lib/context';
import {SearchField, Header} from "../modules/index.js"
import {icons} from "../constants/index.js";
const arr=[1,2,3,4,5];
function Home() {
  const {isLogin} = useGlobalContext();


  return (
    <main>
    <Header/>
    <SearchField/>
    <div className='flex flex-col items-end gap-8 mr-[3vw]'>
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