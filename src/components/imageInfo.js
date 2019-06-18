import React, { Component } from 'react'
import * as ml5 from "ml5";

class ImageInfo extends Component {
    classifyImg = () => {
        // Initialize the Image Classifier method with MobileNet
        const classifier = ml5.imageClassifier('MobileNet', modelLoaded);
        // When the model is loaded
        function modelLoaded() {
          console.log('Model Loaded!');
          classifier.predict(this.image, 5, function(err, results) {
            // print the result in the console
            console.log(results);
          })
        }
    }
    componentDidMount(){
        // once the component has mount, start the classification
        this.classifyImg();
      }

        render() {
               
  return (
    <div>
    {console.log(this.image)}
  
    </div>
  )
}
  
}

export default ImageInfo;
