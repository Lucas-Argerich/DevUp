import { Form } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import LinkButton from "../../components/LinkButton";

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
`

export default function EmailRegister() {
  return (
    <>
      <H2>Create your DevUp Account</H2>
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
            autoComplete="username"
            id="email"
            label="Email"
            name="Email"
            placeholder="example@example.com"
            type="email"
          />
          <FormInput
            autoComplete="password"
            id="password"
            label="Password"
            name="Password"
            placeholder="********"
            type="password"
          />
          <FormInput
            autoComplete="password"
            id="passwordRepeat"
            label="Repeat Password"
            name="PasswordRepeat"
            placeholder="********"
            type="password"
          />
        </InputContainer>
        <ButtonContainer>
          <Button minWidth={175} type="submit">Register</Button>
          <LinkButton secondary to="/register">Cancel</LinkButton>
        </ButtonContainer>
      </StyledForm>
    </>
  );
}
