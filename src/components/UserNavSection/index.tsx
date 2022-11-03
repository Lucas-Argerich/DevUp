import ArrowDown from "../../assets/icons/ArrowDown";
import Button from "../LinkButton";
import ProfilePicture from "../../assets/icons/ProfilePicture";
import styled from "styled-components";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";

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
export default function UserNavSection() {
  const { user } = useContext(UserContext);

  return (
    <UserData>
      {user === undefined ? (
        <>
          <ProfilePicture />
        </>
      ) : user === null ? (
        <>
          <Button to="/register" outlined>
            Sign Up
          </Button>
          <ProfilePicture />
        </>
      ) : (
        <>
          <ArrowDown />
          <UserImage />
        </>
      )}
    </UserData>
  );
}
