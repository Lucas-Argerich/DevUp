import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 40px;
  background: var(--color-gray);
  border: none;
  border-radius: 100px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }

  span {
    margin: 0 auto;
  }
`;

const IconContainer = styled.div`
  border-radius: 12px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  children: JSX.Element;
  icon?: JSX.Element;
  onClick: () => void;
};

export default function Button({ children, icon, onClick }: Props) {
  return (
    <StyledButton onClick={onClick}>
      <IconContainer>{icon}</IconContainer>
      {children}
    </StyledButton>
  );
}
