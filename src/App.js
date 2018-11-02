import React from "react";

import Button from "./ButtonInput";
import Screen from "./Screen";

const numbersValues = Array(10)
  .fill(null)
  .map((v, i) => i);

const numbersOperators = ["*", "/", "+", "-", ".", "=", "C"];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isUpdatedable: true,
      value: ["0"]
    };
  }

  handleClick = event => {
    const myVal = event.target.innerHTML;

    if (!isNaN(myVal)) {
      this.setState({
        value:
          Number(this.state.value) === 0
            ? [myVal]
            : this.state.value.concat([myVal])
      });
    } else if (myVal === "=") {
      const x = this.state.value !== "0" ? this.state.value.join("") : ["0"];
      const result = eval(x);

      console.log(typeof x);
      this.setState({
        value: [String(result)]
      });
    } else if (myVal === "C") {
      this.setState({
        value: "0"
      });
    } else {
      console.log("azert");
      this.setState({
        value: this.state.value.concat([myVal])
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Screen data={this.state.value} />
        {numbersValues.map((v, i) => (
          <Button key={i} onClick={this.handleClick} number={v} />
        ))}
        {numbersOperators.map((v, i) => (
          <Button onClick={this.handleClick} key={i} number={v} />
        ))}
      </div>
    );
  }
}

export default App;
