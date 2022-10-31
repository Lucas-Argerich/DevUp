import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/Navbar";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Root() {
  return (
    <>
      <Navbar nav />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
