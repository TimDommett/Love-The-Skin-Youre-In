
import React from 'react';
import "./home.css";

class MainPage extends React.Component {

    render() {
        return (
          <div>
            {/* <h1>A Home Away From Home</h1> */}
            <div className="hero-image-frame">
            {/* <div className="bg"></div> */}
              <img
                className="hero-image"
                src="https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Home Away From Home"
              />
            </div>
          </div>
        );
    }
}

export default MainPage;