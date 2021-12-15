import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 15px;
`;
const Description = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 300;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  border: none;
  padding-left: 20px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  flex: 8;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #53badb;
`;

const Newslater = () => {
  return (
    <Container>
      <Title>Newslatter</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quo
        repellat ipsam dolorem dolor reiciendis.
      </Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newslater;
