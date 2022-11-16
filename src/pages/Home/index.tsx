import HomeLogo from "../../assets/icons/HomeLogo";
import LinkButton from "../../components/LinkButton";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 80px 0;
`;

const Text = styled.span`
  font-weight: 700;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export default function Home() {
  return (
    <>
      <Wrapper>
        <HomeLogo />
        <Text>
          The free-space for developers to share their endeavors <br /> and
          interact with each others!
        </Text>
      </Wrapper>
      <ButtonWrapper>
        <LinkButton to="/register">Sign Up</LinkButton>
        <LinkButton to="/login" secondary>
          Sign In
        </LinkButton>
      </ButtonWrapper>
    </>
  );
}
