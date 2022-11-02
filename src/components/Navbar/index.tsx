import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import UserNavSection from "../UserNavSection";

const Header = styled.header`
  align-items: center;
  border-bottom: 1px solid var(--shadow-light);
  display: flex;
  height: 40px;
  justify-content: space-between;
  padding: 10px 40px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    gap: 80px;
    list-style-type: none;
  }
`;

type propTypes = {
  nav?: boolean;
};

export default function Navbar({ nav }: propTypes): JSX.Element {
  return (
    <Header>
      <Link to="/">
        <Title>DevUp</Title>
      </Link>
      {nav && (
        <Nav>
          <ul>
            <li>
              <NavLink
                to="following"
                style={({ isActive }) =>
                  isActive ? { fontWeight: 700 } : undefined
                }
              >
                Following
              </NavLink>
            </li>
            <li>
              <NavLink
                to="explore"
                style={({ isActive }) =>
                  isActive ? { fontWeight: 700 } : undefined
                }
              >
                Explore
              </NavLink>
            </li>
          </ul>
        </Nav>
      )}
    <UserNavSection />
    </Header>
  );
}
