import React from "react";
import Webcam from "react-webcam";
import { Button, Container, Row, Col } from "reactstrap";

class PictureUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: "",
      status: ""
    };

    this.capture = this.capture.bind(this);
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = async () => {
    const imgData = this.webcam.getScreenshot();
    await this.setState({
      ...this.state,
      imageData: imgData,
      status: "Captured!"
    });
    this.props.capture(imgData);
  };

  render() {
    const videoConstraints = {
      width: 640,
      height: 480,
      facingMode: "user"
    };

    console.log(this.props.currentState);

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
            <p style={{ color: "white" }}>{this.state.status}</p>
          </Col>
          <Col>
            <div className="float-right">
              <Button color="danger">Upload</Button>
            </div>
          </Col>
        </Row>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={400}
          videoConstraints={videoConstraints}
        />
        <input
          name="encoded_image"
          type="hidden"
          placeholder=""
          value={this.state.imageData}
        />
      </Container>
    );
  }
}

export default PictureUpload;
