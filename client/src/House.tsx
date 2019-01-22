import house from "./modern-architecture.png";
import * as React from "react";
import { Image } from "rebass";

class House extends React.PureComponent {
  render() {
    return <Image src={house} width={2 / 3} />;
  }
}

export default House;
