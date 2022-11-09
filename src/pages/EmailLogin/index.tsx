import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import styled from "styled-components";
import { Form, Link } from "react-router-dom";

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  margin: 80px 0 25px;
`;

const StyledForm = styled(Form)`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 500px;
`;

const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 60px;
`;

const StyledLink = styled(Link)`
  font-size: 0.9375rem;

  span {
    font-weight: 600;
  }
`;

export default function EmailLogin() {
  return (
    <>
      <H2>Access to your Account</H2>
      <StyledForm>
        <InputContainer>
          <FormInput
            autoComplete="off"
            id="name"
            label="Username"
            name="name"
            placeholder="exampleUser"
            type="text"
          />
          <FormInput
            autoComplete="password"
            id="password"
            label="Password"
            name="Password"
            placeholder="********"
            type="password"
          />
        </InputContainer>
        <ButtonContainer>
          <Button minWidth={175} type="submit">
            Log In
          </Button>
          <StyledLink to="/register">
            Don’t have an account? <span>Sign Up</span>
          </StyledLink>
        </ButtonContainer>
      </StyledForm>
    </>
  );
}
