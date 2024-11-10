import React, { useEffect, useState } from 'react'

import VacancyCard from '../components/VacancyCard';
import CandidateCard from '../components/CandidateCard';
import { useGlobalContext } from '../lib/context';
import {SearchField, Header} from "../modules/index.js"
import {icons,images} from "../constants/index.js";
import {getVacancies} from "../lib/api.js"
function Home() {
  const [data,setData] = useState([])
  useEffect(()=>{
    const preData = getVacancies();
    setData(preData["vacancies"]);
    console.log(data);
  },[])
  return (
    <main>
    <Header/>
    <SearchField/>
    <div className='flex flex-col items-center gap-8 mr-[3vw]'>
      {data.map((i)=>(
        <VacancyCard 
          key={i} 
          profession={data.profession}
          salary={data.salary}
          properties={data.properties}
          city={data.locate}
          candidatesCount={data.candidatesCount}
          id={data.id}
        />
      ))}
    </div>
    </main>
  )
}

export default Home 