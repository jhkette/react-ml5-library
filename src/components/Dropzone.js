import React, {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import * as ml5 from "ml5";
const classifier = ml5.imageClassifier("Mobilenet", () => {});


function Dropzone(props) {
  const [file, setfile] = useState([]);
 
  console.log('hello')
  let files = '';
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
 
    setfile(acceptedFiles)
    // files = acceptedFiles.map(file => (
 
   
    //   <li key={file.path}>
    //     {file.path} - {file.size} bytes
    //   </li>
    // ));
    
  }, [])
  
  console.log(file)
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDrop});

  

  return (
   
   
    <div {...getRootProps()} className="grey"
   >
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
      <aside>
        <h4>Files</h4>
        {file.length > 0 ?
        <ul>
          <li>{file[0].name}</li>
        <li>{file[0].size}</li> 
        </ul>

        : null }
      </aside>
    </div>
  
   
  )
}
export default Dropzone;