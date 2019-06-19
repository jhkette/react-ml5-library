import React, { useState, useRef } from "react";
import ml5 from "ml5";
import Dropzone from "react-dropzone";

function Ml5ImagePage(props) {
  const [pic, setPic] = useState(null);
  const [label, setLabel] = useState([]);
  const [confidence, setConfidence] = useState([]);
  const [loading, setLoading] = useState(false);

  const clearState = function(){
    setLabel("");
    setPic(null);
    setConfidence(confidence.splice(0, confidence.length));
    setLabel(label.splice(0, label.length));
    setLoading(true);
  }

  const onDrop = async function(acceptedFiles) {
    clearState();
    try {
      const pic = URL.createObjectURL(acceptedFiles[0]);
      setPic(pic);
      const classifier = await ml5.imageClassifier("MobileNet");
      const results = await classifier.predict(imageRef.current);
      console.log(results);
      setLabel([
        ...label,
        ...[results[0].label, results[1].label, results[2].label]
      ]);
      setConfidence([
        ...confidence,
        ...[results[0].confidence, results[1].confidence, results[2].confidence]
      ]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      throw error;
    }
  };

  const imageRef = useRef(null);
  return (
    <div>
      <div
        className="dropzone"
        style={{ padding: 20, cursor: "pointer", backgroundColor: "#93E9C7" }}
      >
        <Dropzone onDrop={onDrop}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p className="title">Drop Image Here</p>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
      <div class="results">
        <div>
          {pic ? (
            <img
              src={pic}
              alt={"pic"}
              style={{ width: 250, height: "auto" }}
              ref={imageRef}
            />
          ) : null}
        </div>
        <div style={{ paddingTop: 20 }}>
          {loading ? <p>Loading...</p> : null}
        </div>
        {!loading ?
        <div className="labels">
          <h3>{label[0]}</h3>
          <p>{confidence[0] && `${Math.round(confidence[0] * 100)}%`}</p>
          <h3>{label[1]}</h3>
          <p>{confidence[1] && `${Math.round(confidence[1] * 100)}%`}</p>
          <h3>{label[2]}</h3>
          <p>{confidence[2] && `${Math.round(confidence[2] * 100)}%`}</p>
        </div> : null}
      </div>
    </div>
  );
}

export default Ml5ImagePage;
