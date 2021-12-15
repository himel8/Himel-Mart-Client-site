import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: tomato;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
`;

const Announcement = () => {
  return <Container>Super offer!! 50% off Till 1 January</Container>;
};

export default Announcement;
