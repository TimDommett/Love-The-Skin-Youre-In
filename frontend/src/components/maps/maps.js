import * as React from "react";
// import { FieldProps } from "formik";
import Geosuggest, { Suggest } from "react-geosuggest";
// import MapWithAMarker from "./map";
import MarkerManager from "../../utils/marker_manager";


import "./geo.css";



import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const google = window.google;


// const this.state.location ? 



class Maps extends React.Component {
    constructor(props) {
        super(props);

        this.state = {  
            location: { lat: -33.9248685, lng: 18.424055299999964 },
        //     lat: "",
        //     lng:
        // location: null,
        defaultCenter: { lat: -34.397, lng: 150.644 }
           
        };

        // this.handleSubmit = this.handleSubmit.bind(this);
        this.onSuggestSelect = this.onSuggestSelect.bind(this);
    }




    onSuggestSelect = function(suggest) {
        // suggest ? {
        this.setState({
          location: suggest.location,
          defaultCenter: {
            lat: suggest.location.lat,
            lng: suggest.location.lng
          }
        }, () => console.log(this.state.location))
        // );
        // console.log(this.state.location.lat);
        // console.log(this.state.location.lng);
        // } :
        // {console.log("nothing selected")};

        // const {
        //     location: { lat, lng }
        // } = place;
        // const {
        //     form: { setValues, values }
        // } = this.props;
        // setValues({
        //     ...values,
        //     latitude: lat,
        //     longitude: lng
        // });
    //     `this.setState({
    // location: suggest.location,
    //      defaultCenter: {
    //        lat: suggest.location.lat,
    //        lng: suggest.location.lng
    //      }
    //    }, ( ) => console.log(this.state.location))`;
    }

    render() {
        const {
            newDefault = this.state.location
            // lat:
        //     form: { values } // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        } = this.props;
        // const lat = loc ? loc.latitude : 34.05;
        // const lon = loc ? loc.longitude : 118.25;
        const MapWithAMarker = withGoogleMap(props => (

            <GoogleMap
                defaultZoom={12}
                defaultCenter={newDefault}
            >
                <Marker position={newDefault} />
            </GoogleMap>
        ));

        return (
          <div>
            <Geosuggest
              placeholder="Start typing!"
              onSuggestSelect={this.onSuggestSelect}
              location={new google.maps.LatLng(53.558572, 9.9278215)}
              radius={20}
              placeholder={"Type your address here..."}
            />
            {/* <div>{this.state.location.lat}</div>
                <div>{this.state.location.lng}</div> */}
            <MapWithAMarker
              containerElement={<div style={{ height: `800px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
                currentLocation={this.state.defaultCenter}

              // lat={lat}
              // lng={lon}
            />
          </div>
        );
    }
}

export default Maps;
