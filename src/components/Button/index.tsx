import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  padding: 10px 40px;
  border-radius: 100px;
`;

type props = {
  to: string;
  children: string | JSX.Element;
  secondary?: boolean;
};

const primaryStyle = {
  background: "var(--color-gray)",
  fontWeight: 600,
};

const secondaryStyle = {
  fontWeight: 500,
  fontSize: "0.875rem",
};

export default function Button({ to, children, secondary }: props) {
  return (
    <StyledLink to={to} style={secondary ? secondaryStyle : primaryStyle}>
      {children}
    </StyledLink>
  );
}
