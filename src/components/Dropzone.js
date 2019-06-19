import React, { useState, useRef } from 'react';
import ml5 from "ml5";
import Dropzone from "react-dropzone";

function Ml5ImagePage(props){
  const [pic, setPic] = useState(null)
  const [label, setLabel] = useState('')
  const [confidence, setConfidence] = useState(0)
  const [loading, setLoading] = useState(false)


  const onDrop = async function (acceptedFiles) {
    try {
      const pic = URL.createObjectURL(acceptedFiles[0]);
      setPic(pic);
    
      const classifier = await ml5.imageClassifier("MobileNet");
      const results = await classifier.predict(imageRef.current);
      setLabel(results[0].label);
      setConfidence(results[0].confidence);
      setLoading(false);
    
    } catch (error) {
      setLoading(false);
      console.log(error);
      throw error;
    }
  };

  
    const imageRef = useRef(null)
    return (
      <div>
        <div>
          {pic ? (
            <img
              src={pic}
              alt={"pic"}
              style={{ width: 250, height: 'auto' }}
              ref={imageRef}
            />
          ) : null}
        </div>
        <div style={{ paddingTop: 20 }}>
          {loading ? <p>Loading...</p> : null}
        </div>
        <div>
          <h3>{label}</h3>
          <p>{confidence && `${Math.round(confidence * 100)}%`}</p>
        </div>

        <div style={{ padding: 20, cursor: "pointer" }}>
          <Dropzone onDrop={onDrop}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drop Image Here</p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
      </div>
    );
  }


export default Ml5ImagePage;



