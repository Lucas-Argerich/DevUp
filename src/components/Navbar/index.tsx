import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import ArrowDown from "../../assets/icons/ArrowDown";
import ProfilePicture from "../../assets/icons/ProfilePicture";
import Button from "../Button";

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

const UserData = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`;

const UserImage = styled.div`
  background: var(--color-gray);
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

type propTypes = {
  nav?: boolean;
};

const LOGGED = true; //temporary

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
      <UserData>
        {!LOGGED ? (
          <>
            <ArrowDown />
            <UserImage />
          </>
        ) : (
          <>
            <Button to="/" outlined>
              Sign Up
            </Button>
            <ProfilePicture />
          </>
        )}
      </UserData>
    </Header>
  );
}
