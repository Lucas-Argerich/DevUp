import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  padding: 10px 40px;
  border-radius: 100px;
  font-weight: 600;
`;

type props = {
  to: string;
  children: string | JSX.Element;
  secondary?: boolean;
  outlined?: boolean;
};

const primaryStyle = {
  background: "var(--color-gray)",
};

const secondaryStyle = {
  fontWeight: 500,
  fontSize: "0.875rem",
};

const outlinedStyle = {
  border: "1px solid var(--font-primary)",
  padding: "10px 20px"
}

export default function LinkButton({ to, children, secondary, outlined }: props) {
  return (
    <StyledLink to={to} style={secondary ? secondaryStyle : outlined ? outlinedStyle : primaryStyle}>
      {children}
    </StyledLink>
  );
}
