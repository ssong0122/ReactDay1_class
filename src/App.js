import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

//프로파일 컴포넌트 참조
import Profile from "./Profile";

//state 컴포넌트 참조
import Say from "./Say";

import Say2 from "./Say2";

class App extends Component {
  render() {
    return (
      <div>
        {/* 프로필 자식 컴포넌트 추가 */}
        <Profile
          name="song"
          telephone="010-1234-1234"
          age={20}
          email="song@test.co.kr"
        >
          프로필
        </Profile>

        <hr></hr>
        <Say></Say>

        <Say2></Say2>
      </div>
    );
  }
}

export default App;
