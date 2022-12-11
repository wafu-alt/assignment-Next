import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
// 최상단 Navbar
export default function NavBar() {
  const [windowSize, setWindowSize] = useState(0);

  // 0.5초마다 윈도우 사이즈를 감시
  let timer = 0;
  const resizeWindow = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // 현재 window width 값
      setWindowSize(window.innerWidth);
    }, 500);
  };

  // 윈도우 사이즈를 세팅하고, 이벤트로 감시 후 0.5초후 이벤트를 삭제
  useEffect(() => {
    setWindowSize(window.innerWidth);
    window.addEventListener("resize", resizeWindow);
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, [windowSize]);
  return (
    <>
      <nav>
        <MainNavUl>
          <MainNavItemsLi>
            <Link href="/">
              <h1>Home</h1>
            </Link>
          </MainNavItemsLi>
          <MainNavLi>
            <Link href="/about">About</Link>
          </MainNavLi>
          <MainNavLi>유라</MainNavLi>
          <MainNavLi>알라카르테</MainNavLi>
          <MainNavLi>공지사항</MainNavLi>
          <MainNavLi>맴버십</MainNavLi>
          <MainNavItemsLi>
            <span className="material-symbols-outlined">shopping_bag</span>
          </MainNavItemsLi>
          <MainNavItemsLi>
            {windowSize > 768 ? (
              <span className="material-symbols-outlined">person</span>
            ) : (
              <span className="material-symbols-outlined">menu</span>
            )}
          </MainNavItemsLi>
        </MainNavUl>
      </nav>
    </>
  );
}

const MainNavUl = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin-top: 40px;

  @media screen and (min-width: 360px) and (max-width: 768px) {
    margin-top: 13px;
  }
`;

const MainNavItemsLi = styled.li`
  display: block;

  @media screen and (min-width: 360px) and (max-width: 768px) {
    margin: 0 20px;
  }
`;

const MainNavLi = styled.li`
  @media screen and (min-width: 360px) and (max-width: 768px) {
    visibility: hidden;
  }
`;
