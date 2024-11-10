import { useParams } from 'react-router-dom'
import {SearchField, Header} from "../modules/index.js"
import {images,icons} from '../constants/index.js';
import {Marker} from '../UI/index.js';
function Profile() {
    const params = useParams();
    const data = {name: "Robert Paulson", number:"+7 775 777 8765", email:"candidate@gmail.com", languages:"English - mother tongue \n Spanish - B1 (pre-intermediate)", gender:"Man", age:"23", education:"Higher education - Stanford university (2020)", skills:[{title:"UX/UI", color:"bg-[#5E97FF]"}, {title:"Python", color:"bg-[#7BC308]"}, {title:"C++", color:"bg-[#FF6E5E]"}]}
  return (
    <main>
  <Header />
  <div className="mt-8 flex ">
    <div className="ml-8 w-[30vw] flex flex-col">
      <img src={images.avatar} className="h-[256px] w-[256px]" alt="Avatar" />
      <div className="flex items-center gap-2 mt-8">
        <p className="text-[30px] font-bold">{data.name}</p>
        <img src={icons.star} alt="Star" />
      </div>

      <p className="font-bold text-[16px] mt-4">
        {data.gender}, {data.age} years
      </p>
      <div className="flex flex-col mt-2 justify-start">
        <p className="text-[30px] font-bold inline mb-4 ml-1">Skills</p>
        <div className="flex gap-4 h-auto w-[60%]"> 
          {data.skills.map((item, index) => (
            <Marker key={index} title={item.title} styles={item.color} />
          ))}
        </div>
      </div>
      <div className='mt-8 ml-2'>
        <p className="text-[30px] font-bold">Education</p>
        <p className="">{data.education}</p>
      </div>
      <div className='mt-8 ml-2'>
        <p className="text-[30px] font-bold">Language knowledge</p>
        <p className="whitespace-pre-line">{data.languages}</p>
      </div>
      <div className="flex flex-col gap-2 mt-8 ml-2">
      <a className='text-blue-600 whitespace-pre-line'>{data.number}</a>
      <a className='text-blue-600 whitespace-pre-line'>{data.email}</a>
    </div>
    </div>
    <div className='w-[1200px] h-[900px] bg-[#F7F7F7] rounded-3xl'>
      
    </div>
    
  </div>
</main>
  )
}

export default Profile