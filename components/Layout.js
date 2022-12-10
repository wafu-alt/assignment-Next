import NavBar from "./NavBar";
import Footer from "./Footer";

import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <MainContentsSections>{children}</MainContentsSections>
      <Footer />
    </>
  );
}

const MainContentsSections = styled.section`
  background-color: #ebd57d;
`;
