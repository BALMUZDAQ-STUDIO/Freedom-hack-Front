import React, {useState} from "react";
import { icons } from "../constants/index.js";
import {Header} from "../modules/index.js";
import '../uploadFiles.css'
import {CustomButton} from "../UI/index.js"

function Upload1() {
    const [files, setFiles] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(0);
    function handleMultipleChange(event) {
        setFiles([...event.target.files]);
    }

    const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
        onUploadProgress: function(progressEvent) {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        }
      };

      function handleSubmit(event) {
        event.preventDefault();
        const url = 'http://localhost:3000/uploadFile';
        const formData = new FormData();
        formData.append('file', file);
    
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
          onUploadProgress: function(progressEvent) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percentCompleted);
          }
        };
    
        axios.post(url, formData, config)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Error uploading file: ", error);
          });
      }
      /*function FileProgressBar({ fileName }) {
        return (
          <div className="flex items-center">
            <div className="w-full">
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }} />
              </div>
            </div>
            <div className="ml-2 text-gray-500">{fileName}</div>
          </div>
        );
      }*/
    

    return (
      <main>
        <Header/>
        <h2 className="text-center text-[64px] font-bold mb-[25px] text-[#055532]">Upload files</h2>
        <div className="flex justify-center text-center align-center w-[800px] h-auto flex-col ml-auto mr-auto mt-">
              <label className="block">
                <div className="bg-[#F2F2F2] border-[3px] border-[#055532] border-dashed ml-[15px] w-[800px] h-[400px] rounded-[48px] cursor-pointer">
                  <img src={icons.uploadFile} alt="Upload Icon" className="upload-icon h-[128px] text-center align-center justify-center ml-auto mr-auto mt-[100px]"/>
                  <h2 className="text-center text-[24px] font-bold mb-[25px]">Drag files here to upload</h2>
                </div>
                <input type="file" onChange={handleMultipleChange} multiple hidden />
              </label>
                {files.map((file, index) => (
                  <div className="flex justify-center align-center w-[800px] h-[24px] ">
                    <img key={index} src={icons.fileIcon} className="h-[24px]"/>
                    <p className="text-[10px] font-bold mb-[24px] ml-[8px]">{file.name}</p>
                    <progress value={uploadProgress} max="100" className="bg-[#055532]"></progress>
                  </div>
                ))}
          </div>
          <div className="flex justify-center mt-[25px]">
            <CustomButton title = "Analysis" containerStyles={"w-[256px] h-[64px] border-0 bg-[#055532]"} textStyles={"text-white text-[24px] text-"}/>
          </div>
    </main>
    );
}

export default Upload1;
