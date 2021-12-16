import React from "react";
import styled from "styled-components";
import { mobile } from "../../../Hooks/Responsive/Responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/0ytm5FS/freestocks-3-Q3ts-J01nc-unsplash-1.jpg")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  background-color: #fff;
  padding: 20px;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const From = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  font-family: "poppins", sans-serif;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <From>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            hic numquam, iusto eius nemo praesentium.
          </Agreement>
          <Button>CREATE</Button>
        </From>
      </Wrapper>
    </Container>
  );
};

export default Register;
