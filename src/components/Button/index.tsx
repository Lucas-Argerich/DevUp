import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 40px;
  background: var(--color-gray);
  border: none;
  border-radius: 100px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Span = styled.span`
  margin: 0 auto;
`;

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  children: string;
  icon?: JSX.Element;
  minWidth?: number;
  onClick: () => void;
};

export default function Button({ children, icon, minWidth, onClick }: Props) {
  return (
    <StyledButton onClick={onClick} style={{ minWidth }}>
      <IconContainer>{icon}</IconContainer>
      <Span>{children}</Span>
    </StyledButton>
  );
}
