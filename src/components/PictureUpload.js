import React from "react";
import Webcam from "react-webcam";
import { Button, Container, Row, Col } from "reactstrap";

class PictureUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: ""
    };

    this.capture = this.capture.bind(this);
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = async () => {
    const imgData = this.webcam.getScreenshot();
    await this.setState({ imageData: imgData });
  };

  render() {
    const videoConstraints = {
      width: 640,
      height: 480,
      facingMode: "user"
    };

    return (
      <Container>
        <Row>
          <Col>
            <div className="float-left">
              <Button color="danger" onClick={this.capture}>
                Capture
              </Button>
            </div>
          </Col>
          <Col>
            <div className="float-right">
              <Button color="danger">Upload</Button>
            </div>
          </Col>
        </Row>
        <Webcam
          audio={false}
          height={400}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={450}
          videoConstraints={videoConstraints}
        />
        <input
          name="image_data"
          type="hidden"
          placeholder=""
          value={this.state.imageData}
        />
      </Container>
    );
  }
}

export default PictureUpload;
