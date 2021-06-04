import React from "react";
import styled from "styled-components";
import { useStoreState } from "easy-peasy";

const StyledMain = getStyledMain();

export const Main = () => {
  const selectedItems = useStoreState(state => state.selectedItems);
  const currentSelectedItem = selectedItems[selectedItems.length - 1];
  const { name: selectedItemName } = currentSelectedItem || {};

  return (
    <StyledMain> {`${selectedItemName || "Nothing selected"}`} </StyledMain>
  );
};

function getStyledMain() {
  return styled.div`
    display: inline-block;
    margin: auto;
    text-align: center;
    width: 100%;
  `;
}

export default Main;
