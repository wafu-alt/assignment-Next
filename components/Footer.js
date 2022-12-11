import styled from "styled-components";

// footer 영역 표시
export default function Footer() {
  return (
    <>
      <FooterArea>Footer Area</FooterArea>
    </>
  );
}

const FooterArea = styled.footer`
  text-align: center;
  height: 467px;
  padding-top: 200px;
  width: 1200px;
  margin: 150px auto 0;

  @media screen and (min-width: 360px) and (max-width: 768px) {
    margin-top: 52px;
    width: 330px;
  }
`;
