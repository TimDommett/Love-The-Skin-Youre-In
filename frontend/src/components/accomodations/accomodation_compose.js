
import React from 'react';
import AccomodationBox from "./accomodation_box";

class AccomodationCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
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
      text: this.state.text
    };

      this.props.composeAccomodation(accomodation);
    this.setState({ text: "" });
  }

  update() {
    return e =>
      this.setState({
        text: e.currentTarget.value
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="textarea"
              value={this.state.text}
              onChange={this.update()}
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