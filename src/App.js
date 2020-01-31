import React from "react";
import "./App.css";
import a01 from "./128k/1.mp3";
import a02 from "./128k/2.mp3";
import a03 from "./128k/3.mp3";
import a04 from "./128k/4.mp3";
import a05 from "./128k/5.mp3";
import a06 from "./128k/6.mp3";
import a07 from "./128k/7.mp3";
import a08 from "./128k/8.mp3";
import a09 from "./128k/9.mp3";
import a10 from "./128k/10.mp3";
import a11 from "./128k/11.mp3";
import a12 from "./128k/12.mp3";
import a13 from "./128k/13.mp3";
import a14 from "./128k/14.mp3";
import a15 from "./128k/15.mp3";
import a16 from "./128k/16.mp3";
import a17 from "./128k/17.mp3";
import a18 from "./128k/18.mp3";
import a19 from "./128k/19.mp3";
import a20 from "./128k/20.mp3";
import a21 from "./128k/21.mp3";
import a22 from "./128k/22.mp3";
import a23 from "./128k/23.mp3";
import a24 from "./128k/24.mp3";
import a25 from "./128k/25.mp3";
import a26 from "./128k/26.mp3";
import a27 from "./128k/27.mp3";
import a28 from "./128k/28.mp3";
import a29 from "./128k/29.mp3";
import a30 from "./128k/30.mp3";
import a31 from "./128k/31.mp3";
import a32 from "./128k/32.mp3";
import a33 from "./128k/33.mp3";

import NavBar from "./components/container/NavBar";
import Content from "./components/container/Content";
import Header from "./components/display/Header";
import Footer from "./components/display/Footer";
import Home from "./components/display/Home";
import Contact from "./components/display/Contact";
import Portfolio from "./components/display/Portfolio";
import Services from "./components/display/Services";
import Extras from "./components/display/Extras";

class App extends React.Component {
  state = {
    h1: new Audio(a01),
    h2: new Audio(a02),
    h3: new Audio(a03),
    h4: new Audio(a04),
    h5: new Audio(a05),
    h6: new Audio(a06),
    h7: new Audio(a07),
    h8: new Audio(a08),
    h9: new Audio(a09),
    h10: new Audio(a10),
    h11: new Audio(a11),
    h12: new Audio(a12),
    h13: new Audio(a13),
    h14: new Audio(a14),
    h15: new Audio(a15),
    h16: new Audio(a16),
    h17: new Audio(a17),
    h18: new Audio(a18),
    h19: new Audio(a19),
    h20: new Audio(a20),
    h21: new Audio(a21),
    h22: new Audio(a22),
    h23: new Audio(a23),
    h24: new Audio(a24),
    h25: new Audio(a25),
    h26: new Audio(a26),
    h27: new Audio(a27),
    h28: new Audio(a28),
    h29: new Audio(a29),
    h30: new Audio(a30),
    h31: new Audio(a31),
    h32: new Audio(a32),
    h33: new Audio(a33),
    page: "home"
  };

  keypressApp = event => {
    if (event.key === "q") {
      this.state.h1.play();
    } else if (event.key === "a") {
      this.state.h2.play();
    } else if (event.key === "z") {
      this.state.h3.play();
    } else if (event.key === "w") {
      this.state.h4.play();
    } else if (event.key === "s") {
      this.state.h5.play();
    } else if (event.key === "x") {
      this.state.h6.play();
    } else if (event.key === "e") {
      this.state.h7.play();
    } else if (event.key === "d") {
      this.state.h8.play();
    } else if (event.key === "c") {
      this.state.h9.play();
    } else if (event.key === "r") {
      this.state.h10.play();
    } else if (event.key === "f") {
      this.state.h11.play();
    } else if (event.key === "v") {
      this.state.h12.play();
    } else if (event.key === "t") {
      this.state.h13.play();
    } else if (event.key === "g") {
      this.state.h14.play();
    } else if (event.key === "b") {
      this.state.h15.play();
    } else if (event.key === "y") {
      this.state.h16.play();
    } else if (event.key === "h") {
      this.state.h17.play();
    } else if (event.key === "n") {
      this.state.h18.play();
    } else if (event.key === "u") {
      this.state.h19.play();
    } else if (event.key === "j") {
      this.state.h20.play();
    } else if (event.key === "m") {
      this.state.h21.play();
    } else if (event.key === "i") {
      this.state.h22.play();
    } else if (event.key === "k") {
      this.state.h23.play();
    } else if (event.key === ",") {
      this.state.h24.play();
    } else if (event.key === "o") {
      this.state.h25.play();
    } else if (event.key === "l") {
      this.state.h26.play();
    } else if (event.key === ".") {
      this.state.h27.play();
    } else if (event.key === "p") {
      this.state.h28.play();
    } else if (event.key === ";") {
      this.state.h29.play();
    } else if (event.key === "/") {
      this.state.h30.play();
    } else if (event.key === "[") {
      this.state.h31.play();
    } else if (event.key === "'") {
      this.state.h32.play();
    } else if (event.key === "]") {
      this.state.h33.play();
    }
  };

  displaySwitch = () => {
    switch (this.state.page) {
      case "home":
        console.log(this);
        return <Home changeDisplay={this.changeDisplay} />;
      case "contact":
        console.log(`Rendering Contact component inside Content component`);
        return <Contact changeDisplay={this.changeDisplay} />;
      case "portfolio":
        return <Portfolio changeDisplay={this.changeDisplay} />;
      case "services":
        return <Services changeDisplay={this.changeDisplay} />;
      case "extras":
        return <Extras changeDisplay={this.changeDisplay} />;
      default:
        console.log("SHIT! State is fucked.");
    }
  };

  changeDisplay = newDisplay => {
    console.log(`Changing page state value to ${newDisplay}`);
    this.setState({
      page: newDisplay
    });
  };

  render() {
    return (
      <div
        autoFocus={true}
        tabIndex="1"
        className="AppX"
        onKeyDown={this.keypressApp}
      >
        <Header />
        <NavBar changeDisplay={this.changeDisplay} />
        <Content displaySwitch={this.displaySwitch} />
        <Footer />
      </div>
    );
  }
}

export default App;
