import styled from "styled-components";
export default function Home() {
  return (
    <MainContentsDiv>
      <p>Home 페이지 입니다.</p>
      <p>Nav메뉴에서 About으로 이동하세요</p>
    </MainContentsDiv>
  );
}

const MainContentsDiv = styled.div`
  background-color: #ebd57d;
  height: 500px;
`;
