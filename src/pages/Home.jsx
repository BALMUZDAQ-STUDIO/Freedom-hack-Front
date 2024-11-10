import React, { useEffect, useState } from 'react'

import VacancyCard from '../components/VacancyCard';
import CandidateCard from '../components/CandidateCard';
import { useGlobalContext } from '../lib/context';
import {SearchField, Header} from "../modules/index.js"
import {icons,images} from "../constants/index.js";
const arr=[1,2,3,4,5];
function Home() {


  return (
    <main>
    <Header/>
    <SearchField/>
    <div className='flex flex-col items-center gap-8 mr-[3vw]'>
      {arr.map((i)=>(
        <VacancyCard 
          key={i} 
          profession={"C# programmer"}
          salary={"from 2000$"}
          properties={"3 year experience"}
          city={"Almaty"}
          candidatesCount={100}
          id={"2"}
          
        />
      ))}

    </div>
    </main>
  )
}

export default Home 