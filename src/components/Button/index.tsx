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
  onClick?: () => void;
  outlined?: boolean;
  secondary?: boolean;
  type?: "submit" | "reset" | "button";
};

const secondaryStyle = {
  background: "transparent",
  fontSize: "0.875rem",
  fontWeight: 500,
  padding: 0,
};

const outlinedStyle = {
  background: "transparent",
  border: "1px solid var(--font-primary)",
  padding: "10px 20px",
};

export default function Button({
  children,
  icon,
  minWidth,
  onClick,
  outlined,
  secondary,
  type,
}: Props) {
  return (
    <StyledButton
      onClick={onClick}
      style={{
        minWidth,
        ...(secondary ? secondaryStyle : outlined ? outlinedStyle : undefined),
      }}
      type={type}
    >
      {icon && <IconContainer>{icon}</IconContainer>}
      <Span>{children}</Span>
    </StyledButton>
  );
}
