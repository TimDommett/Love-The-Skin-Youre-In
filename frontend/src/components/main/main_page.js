
import React from 'react';
import "./home.css";
import Maps from "../maps/maps";
import { Link } from "react-router-dom";



class MainPage extends React.Component {

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
                  Scroll Down
                  {/* Click Me */}
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