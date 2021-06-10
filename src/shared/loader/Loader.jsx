import React from "react";
import styled from "styled-components";
import LoadingSpinner from "../icons";

const StyledLoaderContainer = getStyledLoaderContainer();

export const Loader = () => {
  return (
    <StyledLoaderContainer>
      <LoadingSpinner />
    </StyledLoaderContainer>
  );
};

function getStyledLoaderContainer() {
  return styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 100%;
    height: 500px;
  `;
}

export default Loader;
