import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  align-items: center;
  border-radius: 100px;
  display: flex;
  font-weight: 600;
  justify-content: center;
  padding: 10px 40px;
  background: var(--color-gray);
`;

type props = {
  children: string | JSX.Element;
  minWidth?: number;
  outlined?: boolean;
  secondary?: boolean;
  to: string;
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

export default function LinkButton({
  children,
  minWidth,
  outlined,
  secondary,
  to,
}: props) {
  return (
    <StyledLink
      to={to}
      style={{
        minWidth,
        ...(secondary ? secondaryStyle : outlined ? outlinedStyle : undefined),
      }}
    >
      {children}
    </StyledLink>
  );
}
