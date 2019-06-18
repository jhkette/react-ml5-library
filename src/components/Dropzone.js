import React, {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import * as ml5 from "ml5";
const classifier = ml5.imageClassifier("Mobilenet", () => {});

let files = '';
function Dropzone(props) {
 
  console.log('hello')
  
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles);
    files = acceptedFiles.map(file => (
 
   
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  }, [])
  
  
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDrop});

  

  return (
   
    <div {...getRootProps()} className="grey"
   >
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
      <aside>
        <h4>Files</h4>
        {/* <ul>{files}</ul> */}
      </aside>
    </div>
  
   
  )
}
export default Dropzone;