import './UploadPage.css';
import { useState } from 'react';
import Botton1 from '../Components/Button'; 
import ViewingResults from '../Components/ViewingResults';
import { TiCloudStorage } from 'react-icons/ti';
import { MdCloudDone } from 'react-icons/md';

function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showResults, setShowResults] = useState(false); 

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setShowResults(true); 
  };

  return (
    <section>
      {!showResults ? (
        <form className='file-upload-form'>
          <label htmlFor='file' className='file-upload-label'>
            <div className='file-upload-design'>
              {selectedFile ? (
                <>
                  <MdCloudDone />
                  <Botton1 onClick={handleClick}>Upload File</Botton1>
                </>
              ) : (
                <>
                  <TiCloudStorage />
                  <p>Drag and Drop</p>
                  <p>or</p>
                  <Botton1 as='span'>Choose File</Botton1>
                </>
              )}
            </div>
            <input id='file' type='file' onChange={handleFileChange} />
            <span className='filename'>
              {selectedFile ? selectedFile.name : 'No file chosen'}
            </span>
          </label>
        </form>
      ) : (
        <ViewingResults />
      )}
    </section>
  );
}

export default UploadPage;
