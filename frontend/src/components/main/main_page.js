
import React from 'react';
import "./home.css";
import Maps from "../maps/maps";
import { Link } from "react-router-dom";


const google = window.google;
const burritos = [
  { location: {lat: -33.9375585, lng: 18.472116899999946}, name: "Papalote" },
  { location: {lat: 37.772045, lng: -122.437015}, name: "The Little Chihuahua" },
  { location: {lat: -33.9657883, lng: 18.481019999999944}, name: "Cancun" }
];


class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
  location: { lat: -33.9248685, lng: 18.424055299999964 },
  defaultCenter: { lat: -34.397, lng: 150.644 },
      // this.state = {
        accomodations: []
        // search: "", 
        // selectedOption: "title"
      
    };
    this.onSuggestSelect = this.onSuggestSelect.bind(this);

  };

  componentWillMount() {
    this.props.fetchAccomodations();
  }

  componentWillReceiveProps(newState) {
    this.setState({ accomodations: newState.accomodations });
  }

  onSuggestSelect = function (suggest) {
    // suggest ? {
    this.setState({
      location: suggest.location,
      lat: suggest.location.lat,
      lng: suggest.location.lng,
      defaultCenter: {
        lat: suggest.location.lat,
        lng: suggest.location.lng
      }
    }, () => console.log(this.state.location.lat))
    // S3FileUpload.uploadFile(e.target.files[0], config)
    //   .then(data => console.log(data.location))
    //   .catch(err => alert(err))
  }

  updateMarkers(accomodations) {
    const accomodationsObj = {};
    accomodations.forEach(accomodation => accomodationsObj[accomodation.id] = accomodation);

    accomodations
      .filter(accomodation => !this.markers[accomodation.id])
      .forEach(newBench => this.createMarkerFromBench(newBench, this.handleClick))

    Object.keys(this.markers)
      .filter(accomodationId => !accomodationsObj[accomodationId])
      .forEach((accomodationId) => this.removeMarker(this.markers[accomodationId]))
  }

  createMarkerFromBench(accomodation) {
    const position = new google.maps.LatLng(accomodation.lat, accomodation.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      accomodationId: accomodation.id
    });

    marker.addListener('click', () => this.handleClick(accomodation));
    this.markers[marker.accomodationId] = marker;
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

    render() {
        return (
          <div>
            {/* <h1>A Home Away From Home</h1> */}

            <div className="hero-image-frame fade-in">
              {/* <div className="bg"></div> */}
              <img
                className="hero-image"
                src="https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Home Away From Home"
              />

              {/* <a href="#home-map"> */}
              <div className="updown " onClick={this.scrollToBottom}>
                <p className="tattoo-machine-copy fade-in-delayed">
                  {/* Scroll Down */}
                  Click Me!
                </p>
                <img
                  className="tatoo-machine vert-move "
                  src="https://gdurl.com/wBmD"
                  alt="tattoo-machine"
                />
              </div>
              {/* </a> */}

              <div className="home-map">
                <h2 className="home-map-title">
                  Search For Tattoo Shops Near You
                </h2>
                <Maps
                  location={this.state.location}
                  onSuggestSelect={this.onSuggestSelect}
                  // burritos={this.state.accomodations}
                  burritoPlaces={this.state.accomodations}
                />
              </div>
            </div>
            <Link to={"/accomodations"} className="see-all-button">
              See All Tattoo Studios Here
            </Link>
            <div
              style={{ clear: "both" }}
              ref={el => {
                this.messagesEnd = el;
              }}
              className="bottom-of-page"
            />
          </div>
        );
    }
}

export default MainPage;