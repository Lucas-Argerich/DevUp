import styled from "styled-components";
import HomeLogo from "../../assets/icons/HomeLogo";
import Button from "../../components/Button";

const Wrapper = styled.div`
  margin: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Text = styled.span`
  font-weight: 700;
  text-align: center;
`;

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
      <Button to="/">Sign Up</Button>
      <Button to="/" secondary>
        Sign In
      </Button>
    </>
  );
}
