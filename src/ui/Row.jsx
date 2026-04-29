import styled, { css } from "styled-components";

const Row = styled.div.attrs((props) => ({ type: props.type || "vertical" }))`
  display: flex;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      align-items: center;
      justify-content: space-between;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
}; // This won't work in version 6 of styled-components

export default Row;
