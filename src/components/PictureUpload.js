import React from "react";
import Webcam from "react-webcam";
import { Button, Container } from "reactstrap";

class PictureUpload extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    const imgSrc = this.webcam.getScreenshot();
    console.log(imgSrc);
  };

  render() {
    const videoConstraints = {
      width: 640,
      height: 480,
      facingMode: "user"
    };
    return (


      <div class="col-sm-6 v3-homeform" style={{paddingTop: "135px !important;"}}>
      <div class="about-form">
          <div class="form-title text-center">
              <h2>Membership <span>Application </span> 2/4</h2>
          </div>
          <div class=" text-left">
              <h2 style={{color: "wheat", fontSize: "16px", marginBottom: "7px" }}>Take a Picture</h2>
          </div>
          <div class="v2-about-input">
          <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
         <Button color="danger" onClick={this.capture}>
            Capture
        </Button>
          </div>
          <div class="v2-about-submit">
              <input type="submit" value="Save & Continue" />
          </div>
      </div>
  </div>
    );
  }
}

export default PictureUpload;

