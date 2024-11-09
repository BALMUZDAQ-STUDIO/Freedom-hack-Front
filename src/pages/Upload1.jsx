import React, {useState} from "react";

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
    

    return (
        <div>
            <form>
                <h1>React Multiple File Upload</h1>
                <input type="file" multiple onChange={handleMultipleChange} />
                <button type="submit">Upload</button>
            </form>
            {uploadedFiles.map((file, index) => (
                <img key={index} src={file} alt={`Uploaded content ${index}`} />
            ))}
            <progress value={uploadProgress} max="100"></progress>
        </div>
    );
}

export default Upload1;
