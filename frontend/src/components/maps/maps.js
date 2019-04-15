import * as React from "react";
// import { FieldProps } from "formik";
import Geosuggest, { Suggest } from "react-geosuggest";
// import MapWithAMarker from "./map";
import MarkerManager from "../../utils/marker_manager";


import "./geo.css";



import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const google = window.google;


// const this.state.location ? 
// const burritos = this.props.burritos;



class Maps extends React.Component {
    constructor(props) {
        super(props);
        // const burritos = this.props.burritos;

        this.state = {
            shops: []
        };
        this.addBurritoPlace = this.addBurritoPlace.bind(this);
        // this.navigateToPosts = this.navigateToPosts.bind(this);

    }


    componentDidMount() {
        if (this.props.burritoPlaces != undefined) {
          this.props.burritoPlaces.forEach(this.addBurritoPlace);
        }
    }


    addBurritoPlace(burritoPlace) {
        /*
         * we make an instance of the google maps LatLng class, args are
         * (lat, lng)
         */
        const pos = new google.maps.LatLng(burritoPlace.lat, burritoPlace.lng);

        /* 
         * then we use our new instance of LatLng to make a marker
         * set map to this.map, this is what adds it to the map
         * when we want to remove this marker, we need to set its
         * map property to null using myMarker.setMap(null)
         */
        const marker = new google.maps.Marker({
            position: pos,
            map: this.map
        });
        this.state.shops.push(marker);

        // when the marker is clicked on, alert the name
        // marker.addListener('click', () => {
        //     alert(`clicked on: ${burritoPlace.name}`);
        // });
        // var contentString = '<div id="content">' +
        //     '<div id="siteNotice">' +
        //     '</div>' +
        //     '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        //     '<div id="bodyContent">' +
        //     '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        //     'sandstone rock formation in the southern part of the ' +
        //     'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
        //     'south west of the nearest large town, Alice Springs; 450&#160;km ' +
        //     '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
        //     'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
        //     'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
        //     'Aboriginal people of the area. It has many springs, waterholes, ' +
        //     'rock caves and ancient paintings. Uluru is listed as a World ' +
        //     'Heritage Site.</p>' +
        //     '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        //     'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
        //     '(last visited June 22, 2009).</p>' +
        //     '</div>' +
        //     '</div>';
        // var infowindow = new google.maps.InfoWindow({
        //     content: contentString
        // });

        marker.addListener('click', function () {
            // infowindow.open(this.map, marker);
            this.navigateToPosts();
            
        });
    }
    // constructor(props) {
    //     super(props);

    //     this.state = {  
    //         location: { lat: -33.9248685, lng: 18.424055299999964 },
        //     lat: "",
        //     lng:
        // location: null,
        // defaultCenter: { lat: -34.397, lng: 150.644 }
           
        // };

        // this.handleSubmit = this.handleSubmit.bind(this);
    //     this.onSuggestSelect = this.onSuggestSelect.bind(this);
    // }





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
    // }

    render() {
        const {
            newDefault = this.props.location
            // lat:
        //     form: { values } // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        } = this.props;
        // const lat = loc ? loc.latitude : 34.05;
        // const lon = loc ? loc.longitude : 118.25;
        const MapWithAMarker = withGoogleMap(props => (
          <GoogleMap
            defaultZoom={12}
            defaultCenter={newDefault}
            // burritoPlaces={this.state.shops}
          >
                {this.props.burritoPlaces.map((shop, index) => {
                    if (shop.lat != undefined ) {
                        return (
                            <Marker
                                // position={shop.location}
                                // center: {lat: this.state.lat, lng: this.state.lng }
                                position={{ lat: shop.lat, lng: shop.lng }}
                                title={shop.title}
                                photo={shop.photoURL}
                                onClick={this.props.navigateToPosts}
                            // title="Click to zoom"
                            // onClick={props.onMarkerClick}
                            />
                        )
                    }
                    
                })}
            <Marker position={newDefault} title={"You are here..."}/>
            {/* {this.state.accomodations.map(accomodation => (
                    location = accomodation.lat, accomodation.lng 
                    < Marker
                            position={ location }
                    />
                    )} */}
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
            {/* <div>{this.state.location.lat}</div>
                <div>{this.state.location.lng}</div> */}
            <MapWithAMarker
              containerElement={<div style={{ height: `800px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
                currentLocation={this.props.defaultCenter}
                    

              // lat={lat}
              // lng={lon}
            />
          </div>
        );
    }
}

export default Maps;
