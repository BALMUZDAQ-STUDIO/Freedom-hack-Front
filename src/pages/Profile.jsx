import { useParams } from 'react-router-dom'
import {SearchField, Header} from "../modules/index.js"
import {images,icons} from '../constants/index.js';
import {Marker} from '../UI/index.js';
function Profile() {
    const params = useParams();
    const data = {name: "Robert Paulson", gender:"Man", age:"23", skills:[{title:"Programmer", color:"bg-[#5E97FF]"},{title:"Project Admin", color:"bg-[#7BC308]"},{title:"Researcher", color:"bg-[#FF6E5E]"}]}
  return (
    <main>
      <Header/>
      <div className='mt-8'>
      <div className='ml-8'>
        <img src={images.avatar} className='h-[256px] w-[256]'/>
        <div className='flex items-center gap-2 mt-2'>
        <p className='text-black font-bold text-[24px]'>{data.name}</p>
        <img src={icons.star}/>
        </div>
        <p className="font-bold text-[16px] mt-2">{data.gender}, {data.age} years</p>
        <div className='flex flex-col mt-2'>
          <p className="text-[24px] font-bold">Skills</p>
          

        </div>
      </div>
      <div>
      </div>

      </div>
    </main>
  )
}

export default Profile