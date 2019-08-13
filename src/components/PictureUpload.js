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
    this.upload = this.upload.bind(this);
    this.uploadListener = this.uploadListener.bind(this);
    this.triggerUpload = this.triggerUpload.bind(this);
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

  uploadListener = event => {
    const capturedFile = event.target.files[0];
    this.upload(capturedFile);
  };

  triggerUploadBtn = () => {
    document.getElementById("file-button").click();
  };

  upload = userFile => {
    console.log(userFile);
    this.props.uploadHandler(userFile);
    this.setState({
      ...this.state,
      status: "File Uploaded!"
    });
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
            <p style={{ color: "white" }} className="pt-2">
              {this.state.status}
            </p>
          </Col>
          <Col>
            <div className="float-right">
              <input
                type="file"
                className="form-control"
                name="user_img"
                id="file-button"
                hidden
                onChange={this.uploadListener}
              />
              <Button color="danger" onClick={this.triggerUploadBtn}>
                Upload
              </Button>
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
