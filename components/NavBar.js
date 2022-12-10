import styled from "styled-components";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav>
        <MainNavUl>
          <li>
            <Link href="/">
              <h1>Home</h1>
            </Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
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
