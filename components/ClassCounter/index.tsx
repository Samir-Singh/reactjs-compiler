import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    console.log("Run : Class Constructor");
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  incrementCount2 = () => {
    this.setState((prevState) => ({ count2: prevState.count2 + 1 }));
  };

  componentDidMount(): void {
    console.log("Run : Class componentDidMount");
  }

  componentDidUpdate(prevProps, prevState): void {
    console.log("Run : Class componentDidUpdate");

    if (prevState.count !== this.state.count) {
      console.log("Run : Class Count changed");
    }
  }

  componentWillUnmount(): void {
    console.log("Run : Class componentWillUnmount");
  }

  render() {
    console.log("Run : Class Render");

    return (
      <>
        <h1>Class Counter</h1>
        <button onClick={this.incrementCount}>
          Count : {this.state.count}
        </button>

        <button onClick={this.incrementCount2}>
          Count2 : {this.state.count2}
        </button>
      </>
    );
  }
}

export default ClassCounter;
