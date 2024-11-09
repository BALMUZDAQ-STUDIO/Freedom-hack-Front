import React, { useState } from 'react';
import '../Upload.css';
import { icons } from "../constants/index.js";

function FileUpload() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const newFiles = Array.from(event.target.files).map((file) => ({
      file,
      progress: 0,
      status: 'Ready to load',
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);

    newFiles.forEach((fileObj, index) => {
      simulateFileUpload(fileObj, index);
    });
  };

  const simulateFileUpload = async (fileObj, index) => {
    fileObj.status = 'Loading...';
    let progress = 0;

    while (progress < 100) {
      progress += 10;
      await new Promise(resolve => setTimeout(resolve, 200)); // Задержка для эмуляции загрузки

      setFiles((prevFiles) => {
        const updatedFiles = [...prevFiles];
        updatedFiles[index] = {
          ...updatedFiles[index], // Обновление состояния только для текущего файла
          progress: progress > 100 ? 100 : progress,
          status: progress >= 100 ? 'Loaded' : updatedFiles[index].status,
        };
        return updatedFiles;
      });
    }
  };

  return (
    <div className="upload-container">
      <h2>Загрузите файлы</h2>
      <label className="upload-label">
        <img src={icons.uploadFile} alt="Upload Icon" className="upload-icon" />
        <span>Выберите файлы</span>
        <input type="file" onChange={handleFileUpload} multiple hidden />
      </label>

      <div className="file-table">
        {files.map((fileObj, index) => (
          <div key={index} className="file-row">
            <div className="file-info">
              <img src={icons.fileIcon} alt="File Icon" className="file-icon" />
              <span className="file-name">{fileObj.file.name}</span>
            </div>
            <div className="progress-container">
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${fileObj.progress}%` }}
                ></div>
              </div>
              <p className="progress-text">
                {fileObj.status} ({fileObj.progress}%)
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
