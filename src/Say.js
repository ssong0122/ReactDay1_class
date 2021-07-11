import React, { Component } from "react";

//Component 상속 받아 Say라는 클래스 컴포넌트 객체가 생성됨
//Say 클래스 컴포넌트 객체가 생성될 때 생성자 초기화 함수를 정의할 수 있다.

class Say extends Component {
  //constructor : 클래스 생성자 함수
  //생성자 함수는 해당 컴포넌트가 최초로 생성(객체화=인스턴스화)될 때 실행해주는 함수
  //생성자 함수 호출 시 반드시 super메소드를 호출해줘서 부모 클래스에 props를 전달해줘야 한다.(안 하면 props 쓸 수 없음)
  constructor(props) {
    //super라는 메소드는 부모 클래스인 Component클래스 내에 정의된 함수로, super클래스에 props를 전달하여 부모 클래스에서 정의된 기능과 속성에 props를 전달한다.
    super(props);

    //클래스형 컴포넌트에서의 state 사용은 생성자 내에서 state을 정의하는 방법1

    //컴포넌트에서 사용할 데이터 구조 정의
    //클래스형 컴포넌트의 state는 this.state내에 모든 데이터 구조를 정의한다.
    this.state = {
      number: 0,
      user: {
        email: "eddy@test.co.kr",
        age: 20,
        userid: "eddy",
        username: "강창훈",
      },
      message: "",
    };
  }

  //감소 버튼 클릭 시 이벤트 처리기 함수 정의
  onDecrease = () => {
    //숫자 감소시키기
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    //비구조화 할당으로 JSX에서 사용할 변수/ 객체 데이터 할당
    const { number, user, message } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <h1>{this.state.number}</h1>

        {/* 이벤트 처리기 함수를 정의하지 않고, 이벤트 발생 시 바로 화살표 함수를 통해 이벤트 처리 */}
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          증가1
        </button>

        {/* 이벤트 처리기 함수를 별도로 정의하고 호출해서 사용하는 경우 */}
        <button
          onClick={() => {
            this.onDecrease();
          }}
        >
          감소1
        </button>
      </div>
    );
  }
}

export default Say;
