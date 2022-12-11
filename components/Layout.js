import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from "styled-components";

// 전체적인 형태잡기
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <MainContentsSections>{children}</MainContentsSections>
      <Footer />
    </>
  );
}

// 메인 콘텐츠가 담기는 곳
const MainContentsSections = styled.section`
  width: 1000px;
  margin: 0 auto;

  @media screen and (min-width: 360px) and (max-width: 768px) {
    width: 330px;
  }
`;
