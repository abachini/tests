import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Main from "../main";
import Sidebar from "../sidebar";
import Error from "./Error";
import Loader from "../shared";

const StyledBodyContainer = getStyledBodyContainer();

export const Body = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState();

  useEffect(() => {
    fetch("https://run.mocky.io/v3/c12045db-63a5-4560-8d14-01d230d828ad")
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setItems(result);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <Error error={error} />;
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <StyledBodyContainer>
        <Sidebar items={items?.items} />
        <Main />
      </StyledBodyContainer>
    );
  }
};

function getStyledBodyContainer() {
  return styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: ;
  `;
}

export default Body;
