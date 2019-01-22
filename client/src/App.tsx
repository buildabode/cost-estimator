import React, { Component } from "react";
import { Box, Heading, Flex, Text } from "rebass";
import Field from "./Field";
import Input from "./Input";
import House from "./House";

class App extends Component {
  render() {
    return (
      <Box className="container" py={3}>
        <Heading>Build cost estimator</Heading>
        <Flex flexDirection="row">
          <Box pt={4} width={1 / 2}>
            <Field label="Lot slope">
              <label className="control radio">
                <input id="radio1" name="radio" type="radio" />
                <span className="control-indicator" />
                Steep, greater than 30%
              </label>
              <label className="control radio">
                <input id="radio2" name="radio" type="radio" />
                <span className="control-indicator" />
                Medium, between 5% and 30%
              </label>
              <label className="control radio">
                <input id="radio2" name="radio" type="radio" />
                <span className="control-indicator" />
                Flat, less than 5%
              </label>
            </Field>
            <Field label="House size (sqft)">
              <Input name="house-size" type="number" />
            </Field>
          </Box>
          <Flex width={1 / 2} px={5} flexDirection="column" alignItems="center">
            <House />
          </Flex>
        </Flex>
      </Box>
    );
  }
}

export default App;
