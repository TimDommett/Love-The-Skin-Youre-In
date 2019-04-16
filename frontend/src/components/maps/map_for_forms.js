import * as React from "react";
// import { FieldProps } from "formik";
import Geosuggest, { Suggest } from "react-geosuggest";
// import MapWithAMarker from "./map";
import MarkerManager from "../../utils/marker_manager";


import "./geo.css";



import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const google = window.google;

class MapForForms extends React.Component {
    render() {
        const {
            newDefault = this.props.location
        } = this.props;
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
                    onSuggestSelect={this.props.onSuggestSelect}
                    location={new google.maps.LatLng(53.558572, 9.9278215)}
                    radius={20}
                    placeholder={"Type your address here..."}
                />
                <MapWithAMarker
                    containerElement={<div style={{ height: `800px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    currentLocation={this.props.defaultCenter}


                />
            </div>
        );
    }
}

export default MapForForms;
