import * as React from "react";

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const MapWithAMarker = withGoogleMap(props =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        <Marker
            position={{ lat: -34.397, lng: 150.644 }}
        />
    </GoogleMap>
);


export default MapWithAMarker;



// import React from 'react';
// // import ReactDOM from 'react-dom';
// import { withRouter } from 'react-router-dom';

// import MarkerManager from '../../utils/marker_manager';
// const google = window.google;


// const getCoordsObj = latLng => ({
//     lat: latLng.lat(),
//     lng: latLng.lng()
// });

// const mapOptions = {
//     center: {
//         lat: 37.773972,
//         lng: -122.431297
//     }, // San Francisco coords
//     zoom: 13
// };

// class Maps extends React.Component {
//     componentDidMount() {
//         const map = this.refs.map;
//         this.map = new google.maps.Map(map, mapOptions);
//         this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
//         if (this.props.singleBench) {
//             this.props.fetchBench(this.props.benchId);
//         } else {
//             this.registerListeners();
//             this.MarkerManager.updateMarkers(this.props.benches);
//         }
//     }

    

    // componentDidUpdate() {
    //     if (this.props.singleBench) {
    //         const targetBenchKey = Object.keys(this.props.benches)[0];
    //         const targetBench = this.props.benches[targetBenchKey];
    //         this.MarkerManager.updateMarkers([targetBench]); //grabs only that one bench
    //     } else {
    //         this.MarkerManager.updateMarkers(this.props.benches);
    //     }
    // }

    // registerListeners() {
    //     google.maps.event.addListener(this.map, 'idle', () => {
    //         const { north, south, east, west } = this.map.getBounds().toJSON();
    //         const bounds = {
    //             northEast: { lat: north, lng: east },
    //             southWest: { lat: south, lng: west }
    //         };
    //         this.props.updateFilter('bounds', bounds);
    //     });
    //     google.maps.event.addListener(this.map, 'click', (event) => {
    //         const coords = getCoordsObj(event.latLng);
    //         this.handleClick(coords);
    //     });
    // }

    // handleMarkerClick(bench) {
    //     this.props.history.push(`benches/${bench.id}`);
    // }

    // handleClick(coords) {
    //     this.props.history.push({
    //         pathname: 'benches/new',
    //         search: `lat=${coords.lat}&lng=${coords.lng}`
    //     });
    // }

//     render() {
//         return (
//             <div className="map" ref="map">
//                 Map
//       </div>
//         );
//     }
// }

// export default withRouter(Maps);

