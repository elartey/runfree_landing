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
      <Container>
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
      </Container>
    );
  }
}

export default PictureUpload;
