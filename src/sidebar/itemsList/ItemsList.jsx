import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Item from "../item/Item";

const StyledItemList = getStyledItemList();

const ItemsList = ({ items }) => {
  return (
    <StyledItemList>
      {items &&
        items.length > 0 &&
        items.map(({ name, children }, i) => (
          <Item key={`${name}-${i}`} name={name}>
            {children}
          </Item>
        ))}
    </StyledItemList>
  );
};

function getStyledItemList() {
  return styled.div`
    padding-top: 20px;
    border-right: 1px solid lightgray;
    height: 100%;
  `;
}

ItemsList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemsList;
