import React from "react";
import styled from "styled-components";
import { ProductsData } from "../../../Data/ProductsData";
import Product from "../Product/Product";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {ProductsData.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
