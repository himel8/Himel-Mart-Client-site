import React from "react";
import styled from "styled-components";
import { Categoriesdata } from "../../../Data/Categoriesdata";
import CategoriesItem from "./CategoriesItem/CategoriesItem";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Categories = () => {
  return (
    <Container>
      {Categoriesdata.map((item) => (
        <CategoriesItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;
