import styled from "styled-components";

const StyledButton = styled.button`
  align-items: center;
  background: var(--color-gray);
  border-radius: 100px;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  justify-content: center;
  padding: 10px 40px;
  position: relative;

  svg {
    height: 24px;
    width: 24px;
  }
`;

const IconContainer = styled.div`
  align-items: center;
  display: flex;
  height: 24px;
  justify-content: center;
  left: 40px;
  position: absolute;
  width: 24px;
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
      {children}
    </StyledButton>
  );
}
