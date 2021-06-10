import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useWinstonLogger } from "winston-react";
import { useStoreActions, useStoreState } from "easy-peasy";

const StyledItem = getStyledItem();
const ItemContainer = getItemContainer();

const Item = item => {
  const selectedItems = useStoreState(state => state.selectedItems);
  const isSelected = !!selectedItems.filter(i => i.name === item.name).length;
  const [isOpen, setIsOpen] = useState(isSelected);
  const { name, children } = item;
  const selectItem = useStoreActions(actions => actions.selectItem);
  const deselectItem = useStoreActions(actions => actions.deselectItem);
  const logger = useWinstonLogger();

  const handleOnClick = () => {
    setIsOpen(!isOpen);
    logger.info(`[Item] Name: ${name}`);
    if (isOpen && item.name) {
      deselectItem(item);
    } else {
      selectItem(item);
    }
  };

  return (
    <ItemContainer>
      <StyledItem onClick={handleOnClick} isOpen={isOpen}>
        {name}
      </StyledItem>
      {isOpen &&
        children &&
        children.map(({ name, children }, i) => (
          <Item key={`${name}-${i}`} name={name}>
            {children}
          </Item>
        ))}
    </ItemContainer>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.array
};

function getItemContainer() {
  return styled.div``;
}

function getStyledItem() {
  return styled.div`
    :hover {
      font-weight: bold;
      cursor: pointer;
    }
    ${props => (props.isOpen ? "font-weight: bold" : "font-weight: none;")}
  `;
}

export default Item;
