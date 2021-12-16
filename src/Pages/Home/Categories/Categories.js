import React from "react";
import styled from "styled-components";
import { Categoriesdata } from "../../../Data/Categoriesdata";
import { mobile } from "../../../Hooks/Responsive/Responsive";
import CategoriesItem from "./CategoriesItem/CategoriesItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {Categoriesdata.map((item) => (
        <CategoriesItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
