import { useParams } from 'react-router-dom'
import {SearchField, Header} from "../modules/index.js"
import {images,icons} from '../constants/index.js';
function Profile() {
    const params = useParams();
  return (
    <main>
      <Header/>
      <div className='mt-8'>
      <div className='ml-8'>
        <img src={images.avatar} className='h-[256px] w-[256]'/>
        <div className='flex items-center gap-2 mt-2'>
        <p className='text-black font-bold text-[24px]'>Robert Paulson</p>
        <img src={icons.star}/>
        </div>
        <p className="font-bold text-[14px] mt-2">Man, 23 years, 20.03.2024</p>
        <div className='flex flex-col '>
          <p></p>

        </div>
      </div>
      <div>
      </div>

      </div>
    </main>
  )
}

export default Profile