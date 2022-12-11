import styled from "styled-components";

// Home page
export default function Home() {
  return (
    <MainContentsDiv>
      <p>Home 페이지 입니다.</p>
      <p>Nav메뉴에서 About으로 이동하세요</p>
    </MainContentsDiv>
  );
}

const MainContentsDiv = styled.div`
  margin-top: 40px;
  text-align: center;
  height: 500px;
`;
