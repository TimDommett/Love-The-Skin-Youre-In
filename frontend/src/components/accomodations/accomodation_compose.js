
import React from 'react';
import AccomodationBox from "./accomodation_box";

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
              onChange={this.update('title')}
              placeholder="Write your title here..."
            />

            <input
              type="textarea"
              value={text}
              onChange={this.update('text')}
              placeholder="Write your accomodation details here..."
            />

            <input
              type="textarea"
              value={link}
              onChange={this.update('link')}
              placeholder="Give a link to your website..."
            />

            <input
              type="textarea"
              value={price}
              onChange={this.update('price')}
              placeholder="Write your accomodation..."
            />
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