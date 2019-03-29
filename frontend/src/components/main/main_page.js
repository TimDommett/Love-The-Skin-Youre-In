
import React from 'react';
import "./home.css";
import Maps from "../maps/maps";


class MainPage extends React.Component {

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
              <div className="updown ">
                <p className="tattoo-machine-copy fade-in-delayed">
                  Scroll Down
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
                <Maps />
              </div>
            </div>
          </div>
        );
    }
}

export default MainPage;