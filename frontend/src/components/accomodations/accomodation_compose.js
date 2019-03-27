
import React from 'react';
import AccomodationBox from "./accomodation_box";
import S3FileUpload from "react-s3";
import S3 from "aws-s3";


const keys = require("../../keys");

const config = {
  bucketName: "ahomeawayfromhome",
  dirName: "photos",
  region: "eu-west-2",
  accessKeyId: keys.awsAccessKeyID,
  secretAccessKey: keys.awsSecretAccessKey
};

const S3Client = new S3(config);

const newFileName = 'my-awesome-file';



class AccomodationCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      text: "",
      link: "",
      price: 1,
      newAccomodation: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ newAccomodation: nextProps.newAccomodation.text });
  }

  upload(e) {
    console.log(e.target.files[0]);
    S3Client
      .uploadFile(e.target.files[0], newFileName)
      .then(data => console.log(data))
      .catch(err => console.error(err))
  };
    // S3FileUpload.uploadFile(e.target.files[0], config)
    //   .then(data => console.log(data.location))
    //   .catch(err => alert(err))

  handleSubmit(e) {
    e.preventDefault();
    let accomodation = {
      title: this.state.title,
      text: this.state.text,
      link: this.state.link,
      price: this.state.price,
      newAccomodation: ""
    };

    this.props.composeAccomodation(accomodation);
    this.setState({ text: "", title: "", link: "", price: 1 });
  }

  update(property) {
    return e =>
      this.setState({
        [property]: e.target.value
      });
  }

  render() {
    const { title, text, link, price } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={title}
              onChange={this.update("title")}
              placeholder="Write your title here..."
            />

            <input
              type="textarea"
              value={text}
              onChange={this.update("text")}
              placeholder="Write your accomodation details here..."
            />

            <input
              type="textarea"
              value={link}
              onChange={this.update("link")}
              placeholder="Give a link to your website..."
            />

            <input
              type="file"
              // value={price}
              onChange={this.upload}
              // placeholder="Write your accomodation..."
            />
            <select value={price} onChange={this.update("price")}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <br />
        <AccomodationBox text={this.state.newAccomodation} />
      </div>
    );
  }
}

export default AccomodationCompose;