import * as React from "react";
import Geosuggest, { Suggest } from "react-geosuggest";
import MarkerManager from "../../utils/marker_manager";


import "./geo.css";



import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const google = window.google;


class Maps extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shops: []
        };
        this.addBurritoPlace = this.addBurritoPlace.bind(this);

    }


    componentDidMount() {
        if (this.props.burritoPlaces != undefined) {
          this.props.burritoPlaces.forEach(this.addBurritoPlace);
        }
    }


    addBurritoPlace(burritoPlace) {
        const pos = new google.maps.LatLng(burritoPlace.lat, burritoPlace.lng);

        const marker = new google.maps.Marker({
            position: pos,
            map: this.map
        });
        this.state.shops.push(marker);

        marker.addListener('click', function () {
            // infowindow.open(this.map, marker);
            this.navigateToPosts();
            
        });
    }

    render() {
        const {
            newDefault = this.props.location
        } = this.props;
        const MapWithAMarker = withGoogleMap(props => (
          <GoogleMap
            defaultZoom={18}
            defaultCenter={newDefault}
            // burritoPlaces={this.state.shops}
          >
                {this.props.burritoPlaces.map((shop, index) => {
                    if (shop.lat != undefined ) {
                        return (
                            <Marker
                         
                                position={{ lat: shop.lat, lng: shop.lng }}
                                title={shop.title}
                                photo={shop.photoURL}
                                onClick={this.props.navigateToPosts}
                            />
                        )
                    }
                    
                })}
            <Marker position={newDefault} title={"You are here..."}/>
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

export default Maps;
