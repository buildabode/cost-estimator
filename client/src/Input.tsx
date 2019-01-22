import styled from "styled-components";
import { space, themeGet } from "styled-system";

const Input = styled.input`
  appearance: none;
  display: block;
  font-family: inherit;
  color: inherit;
  font-size: ${themeGet("fontSizes.1")}px;
  background-color: transparent;
  border-radius: ${themeGet("radius")};
  border-width: 0px;
  border-style: solid;
  border-color: ${themeGet("colors.borderGray")};
  border-radius: 2px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 12px;
  padding-right: 12px;
  margin: 0;
  box-shadow: 0 0 0 1px ${themeGet("colors.borderGray")};
  ::placeholder {
    color: ${themeGet("colors.gray")};
  }
  ::-ms-clear {
    display: none;
  }
  :focus {
    outline: 0;
    border-color: ${themeGet("colors.blue")};
    box-shadow: 0 0 0 2px ${themeGet("colors.blue")};
  }
  ${space};
`;

Input.displayName = "Input";

export default Input;
