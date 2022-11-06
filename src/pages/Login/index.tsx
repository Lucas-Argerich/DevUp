import Button from "../../components/Button";
import EmailIcon from "../../assets/icons/EmailIcon";
import GithubIcon from "../../assets/icons/GithubIcon";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import HomeLogo from "../../assets/icons/HomeLogo";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SignInWithProvider } from "../../firebase/auth";

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
        >
          Sign in with Github
        </Button>
        <Button
          onClick={() => {
            SignInWithProvider("github");
          }}
          icon={<GoogleIcon />}
        >
          Sign in with Google
        </Button>
        <Button onClick={() => {}} icon={<EmailIcon />}>
          Sign in with Email
        </Button>
        <StyledLink to="/register">
          Don’t have an account? <span>Sign Up</span>
        </StyledLink>
      </Container>
    </>
  );
}
