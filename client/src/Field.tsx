import * as React from "react";
import { Box, Text, Flex } from "rebass";

interface FieldProps {
  children: React.ReactNode;
  label: string;
}

class Field extends React.Component<FieldProps> {
  render() {
    const { label, children } = this.props;
    return (
      <Box pb={4}>
        <label>
          <Text fontSize={3}>{label}</Text>
        </label>
        <Flex py={2} flexDirection="column">
          {children}
        </Flex>
      </Box>
    );
  }
}

export default Field;
