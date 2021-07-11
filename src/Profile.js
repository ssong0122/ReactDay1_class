import React, { Component } from "react";

import PropTypes from "prop-types";

class Profile extends Component {
  /*자바 스크리배트 코딩 영역1*/
  //클래스 컴포넌트 전역으로 사용하는 자바스크립트 객체/데이터(state)/이벤트  정의

  render() {
    /*자바 스크리배트 코딩 영역2*/
    //화면 요소 (JSX)에서 사용한느 주요 변수 선언 영역
    //this.props 를 이용해 해당 컴포넌트(this)에 전달된 속성값을 가져와 비구조화 할당 방식으로 값을 할당한다.
    const { name, age, telephone, email, children, address } = this.props; //원래는 name = this.props.name 인데 간결하게 표현
    return (
      <div>
        <h1>{children}</h1>
        <table
          style={{ width: "500px", height: "50px", border: "1px solid gray" }}
        >
          <thead></thead>

          <tbody>
            <tr>
              <td>이름</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>{telephone}</td>
            </tr>
            <tr>
              <td>메일주소</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>나이</td>
              <td>{age}</td>
            </tr>
            <tr>
              <td>주소 - 디폴트 이용</td>
              <td>{address}</td>
            </tr>
            <tr>
              <td colSpan="2">
                <button>확인</button>
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    );
  }
}

//props의 새로운 속성을 정의하고 기본값을 세팅한다.
//부모에서 정의하지 않고 전달하지 않은 속성의 경우 아래와 같이 정의 사용 가능하다.
Profile.defaultProps = {
  address: "서울시 강남구 테헤란로",
};

//PROPS 속성들에 대한 데이터 형식 체크 및 필수 값 여부 체크
//체크 후 에러가 나면 브라우저 콘솔에서 확인이 가능하다.
Profile.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default Profile;
