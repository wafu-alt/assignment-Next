import styled from "styled-components";

export default function NavBar() {
  return (
    <>
      <nav>
        <MainNavUl>
          <li>
            <h1>Home</h1>
          </li>
          <li>About</li>
          <li>유라</li>
          <li>알라카르테</li>
          <li>공지사항</li>
          <li>맴버십</li>
          <li>아이콘1</li>
          <li>아이콘2</li>
        </MainNavUl>
      </nav>
    </>
  );
}

const MainNavUl = styled.ul`
  background-color: yellow;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
`;
