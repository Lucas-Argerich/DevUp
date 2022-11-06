import Button from "../../components/Button";
import GithubIcon from "../../assets/icons/GithubIcon";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import HomeLogo from "../../assets/icons/HomeLogo";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SignInWithProvider } from "../../firebase/auth";
import LinkButton from "../../components/LinkButton";

const StyledHomeLogo = styled(HomeLogo)`
  margin: 80px 0;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
`;

const StyledLink = styled(Link)`
  font-size: 0.9375rem;

  span {
    font-weight: 600;
  }
`;

export default function Login() {
  const buttonMinWidth = 300;

  return (
    <>
      <StyledHomeLogo />
      <Container>
        <H2>Access to your Account</H2>
        <Button
          onClick={() => {
            SignInWithProvider("google");
          }}
          icon={<GithubIcon />}
          minWidth={buttonMinWidth}
        >
          Sign in with Github
        </Button>
        <Button
          onClick={() => {
            SignInWithProvider("github");
          }}
          icon={<GoogleIcon />}
          minWidth={buttonMinWidth}
        >
          Sign in with Google
        </Button>
        <LinkButton minWidth={buttonMinWidth} to="email">
          Sign in with Email
        </LinkButton>
        <StyledLink to="/register">
          Don’t have an account? <span>Sign Up</span>
        </StyledLink>
      </Container>
    </>
  );
}
