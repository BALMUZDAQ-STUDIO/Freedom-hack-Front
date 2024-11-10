import React, { useState } from "react";
import { Header } from "../modules";
import { icons } from "../constants/index.js";
import { CustomButton } from "../UI";

function Create() {
    const [name, setName] = useState("");

    const [files, setFiles] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(0);
    function handleMultipleChange(event) {
        setFiles([...event.target.files]);
    }

    const [inputValue, setInputValue] = useState("");
    const [inputValue1, setInputValue1] = useState("");

    const [createdObjects, setCreatedObjects] = useState([]);
    const [createdObjects1, setCreatedObjects1] = useState([]);

    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && inputValue.trim()) {
            setCreatedObjects([...createdObjects1, inputValue]);
            setInputValue(""); // обнуляем инпут
        }
    };
    const handleKeyPress1 = (event) => {
        if (event.key === "Enter" && inputValue1.trim()) {
            setCreatedObjects1([
                ...createdObjects1,
                inputValue1.match(
                    /^(?:https?:\/\/)?(?:[^\.]+\.)*([^\.]+)\.[^\.]+\//
                )[1],
            ]);
            setInputValue1(""); // обнуляем инпут
        }
    };
    return (
        <main className="flex justify-center flex-col">
            <Header />
            <p className="text-[#055532] text-[64px] text-center font-bold">
                Create vacancy
            </p>
            <form onSubmit={(e) => e.preventDefault()} >
                <div className="flex ">
                    <div>
                        <div className="ml-6">
                            <p className="font-bold text-[24px] m-2">
                                Vacancy name
                            </p>
                            <input
                                className="bg-[#F2F2F2] rounded-[80px] h-[80px] w-[640px] text-[#055532] [text-[24px] font-bold pl-5 focus:outline-[#055532]"
                                placeholder="Enter vacancy name..."
                            />
                        </div>
                        <div className="ml-6">
                            <p className="font-bold text-[24px] mt-6 m-2">
                                Salary
                            </p>
                            <div className="flex items-center">
                                <input
                                    className="bg-[#F2F2F2] rounded-[80px] h-[80px] w-[172px] text-[24px] font-bold pl-5 focus:outline-[#055532] mr-2"
                                    placeholder="From"
                                />
                                <div className="h-1 w-2 bg-[#055532]"></div>
                                <input
                                    className="bg-[#F2F2F2] rounded-[80px] text-[#055532] h-[80px] w-[172px] text-[24px] font-bold pl-5 focus:outline-[#055532] ml-2"
                                    placeholder="To"
                                />
                                <p className="font-bold text-[30px] m-2">$</p>
                                <div className="ml-4">
                                    <select
                                        name="select"
                                        className="h-[60px] w-[150px] bg-[#F2F2F2] text-[24px] text-[#055532] font-bold flex justify-center items-center text-center rounded-3xl"
                                    >
                                        <option value="value1">Hour</option>
                                        <option value="value2" selected>
                                            Day
                                        </option>
                                        <option value="value3">Mounth</option>
                                        <option value="value4">Year</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="ml-6">
                            <p className="font-bold text-[24px] m-2 mt-8 ">
                                Properties
                            </p>
                            <div className="flex flex-row gap-2 items-center">
                                <input
                                    className="bg-[#F2F2F2] rounded-[80px]  text-[#055532] h-[50px] w-[150px] text-[16px] font-bold pl-5 focus:outline-[#055532] "
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Add property +"
                                />
                                {createdObjects.map((text, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#055532] text-[#fff] rounded-[80px] h-[50px] w-[150px] text-[16px] font-bold  flex justify-center items-center"
                                    >
                                        {text}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="ml-6 mt-8">
                            <p className="font-bold text-[24px] m-2">
                                Time state
                            </p>
                            <select
                                name="select"
                                className="h-[60px] w-[150px] bg-[#F2F2F2] text-[20px] text-[#055532] font-bold flex justify-center items-center text-center rounded-3xl"
                            >
                                <option value="value5">urgently</option>
                                <option value="value6" selected>
                                    Not urgent
                                </option>
                                <option value="value7">not required</option>
                            </select>
                        </div>
                        <div className="ml-6 mt-8">
                            <p className="font-bold text-[24px] m-2">
                                Amount of workers
                            </p>
                            <input
                                className="bg-[#F2F2F2] rounded-[80px] h-[60px] text-[#055532] w-[140px] text-[20px] font-bold text-center focus:outline-[#055532]"
                                placeholder="..."
                            />
                        </div>
                        <div className="ml-6">
                            <p className="font-bold text-[24px] m-2 mt-8 ">
                                Link
                            </p>
                            <div className="flex flex-row gap-2 items-center">
                                <input
                                    className="bg-[#F2F2F2] rounded-[80px] text-[#055532] h-[50px] w-[150px] text-[16px] font-bold pl-5 focus:outline-[#055532] "
                                    type="text"
                                    value={inputValue1}
                                    onChange={handleInputChange1}
                                    onKeyPress={handleKeyPress1}
                                    placeholder="Add link"
                                />
                                {createdObjects1.map((text, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#055532] text-[#fff] rounded-[80px] px-[20px] py-[15px] text-[16px] font-bold  flex justify-center items-center"
                                    >
                                        {text}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="ml-24 mt-8">
                        <p className="text-[36px] font-bold">
                            Vacancy description
                        </p>
                        <input
                            className="bg-[#F2F2F2] text-start items-start justify-start pb-40 pl-10 rounded-[30px] h-[240px] w-[940px] text-[24px] font-bold  focus:outline-[#055532]"
                            placeholder="Enter vacancy name..."
                        />
                        <label className="block">
                            <div className="bg-[#F2F2F2] border-[3px] border-[#055532] border-dashed  w-[940px] h-[340px] rounded-[48px] cursor-pointer mt-8">
                                <img
                                    src={icons.uploadFile}
                                    alt="Upload Icon"
                                    className="upload-icon h-[128px] text-center align-center justify-center ml-auto mr-auto mt-[100px]"
                                />
                                <h2 className="text-center text-[24px] font-bold mb-[25px]">
                                    Drag files here to upload
                                </h2>
                            </div>
                            <input
                                type="file"
                                onChange={handleMultipleChange}
                                multiple
                                hidden
                            />
                        </label>
                        <div className="flex justify-end mt-4">
                            <CustomButton
                                title="Create vacancy"
                                containerStyles="bg-[#055532] py-2 px-6"
                                textStyles="text-white"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </main>
    );
}

export default Create;
