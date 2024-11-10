import React from "react";
import { useParams } from "react-router-dom";
import VacancyCard from "../components/VacancyCard";
import CandidateCard from "../components/CandidateCard";
import { useGlobalContext } from "../lib/context";
import { SearchField, Header } from "../modules/index.js";
import { icons, images } from "../constants/index.js";

const Favorites = () => {
  const [data,setData] = useState([])
    const params = useParams();
    useEffect(()=>{
        const preData = getVacancies();
        setData(preData["vacancies"]);
        console.log(data);
      },[])

    return (
        <main >
            <Header />
            <SearchField />

            <div className="flex flex-row-reverse  justify-end  gap-4 mr-[3vw]">
                <div className="flex flex-col gap-4">
                    {data.map((i) => (
                        <CandidateCard
                        avatarSrc={images.avatar}
                        name={data.name}
                        profession={data.profession}
                        experience={data.experience}
                        rank={data.rank}
                        city={data.locate}
                        date={data.date}
                        skils={data.skils}
                        id={data.id}
                    />
                    ))}
                </div>
                <div className="flex flex-col items-start ml-10 bg-[#F1F1F1] rounded-3xl px-10 py-5 border-solid border-main border-[3px]">
                    <div>
                        <p className="font-bold text-main text-[64px]">Filters</p>
                    </div>
                    <div>
                        <p className="font-bold text-[36px]">Gender</p>
                        <ul className="text-[36px]">
                            <li>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="options1"
                                        className="mr-2 w-6 h-6"
                                    />
                                    Male
                                </label>
                            </li>
                            <li>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="options1"
                                        className="mr-2 w-6 h-6"
                                    />
                                    Female
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <p className="font-bold text-[36px]">Locate</p>
                        <ul className="text-[36px]">
                            <li>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="options2"
                                        className="mr-2 w-6 h-6"
                                    />
                                    Almaty
                                </label>
                            </li>
                            <li>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="options2"
                                        className="mr-2 w-6 h-6"
                                    />
                                    Astana
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <p className="font-bold text-[36px]">Relocate</p>
                        <ul className="text-[36px]">
                            <li>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="options3"
                                        className="mr-2 w-6 h-6"
                                    />
                                    Ready to relocate
                                </label>
                            </li>
                            <li>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="options3"
                                        className="mr-2 w-6 h-6"
                                    />
                                    Not desired to relocate
                                </label>
                            </li>
                            <li>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="options3"
                                        className="mr-2 w-6 h-6"
                                    />
                                    Not ready to relocate
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <p className="font-bold text-[36px]">Experience</p>
                        <ul className="text-[36px]">
                            <li>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="options4"
                                        className="mr-2 w-6 h-6"
                                    />
                                    {"<"} 1 years
                                </label>
                            </li>
                            <li>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="options4"
                                        className="mr-2 w-6 h-6"
                                    />
                                    1-5 years
                                </label>
                            </li>
                            <li>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="options4"
                                        className="mr-2 w-6 h-6"
                                    />
                                    {">"} 5 years
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <p className="font-bold text-[36px]">Relevance</p>
                        
                        
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Favorites