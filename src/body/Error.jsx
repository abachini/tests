import React from "react";
import styled from "styled-components";

const StyledErrorContainer = getStyledErrorContainer();

export const Error = ({ error }) => {
  return (
    <StyledErrorContainer>{`Error: ${error.message}`}</StyledErrorContainer>
  );
};

function getStyledErrorContainer() {
  return styled.div`
    margin: 10px;
  `;
}

export default Error;
