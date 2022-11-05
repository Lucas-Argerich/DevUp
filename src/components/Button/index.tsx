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

  svg {
    width: 24px;
  }

  span {
    margin: 0 auto;
  }
`;

type Props = {
  children: JSX.Element | JSX.Element[];
  onClick: () => void;
};

export default function Button({ children, onClick }: Props) {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
}
