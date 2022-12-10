import Link from "next/link";
import styled, { css } from "styled-components";
import { useState } from "react";

export default function About() {
  const shopLocationsList = [
    "전체",
    "서울",
    "경기",
    "대전/충청",
    "전라",
    "경상",
  ];
  const [shopLocations, setShopLocations] = useState(shopLocationsList[0]);
  // console.log(shopLocations);

  const [getShops, setGetShops] = useState([]);
  const storesCall = async (region) => {
    const res = await fetch("api/stores");
    const data = await res.json();
    console.log(data);
    if (region === "전체") return setGetShops([...getShops, data]);
    console.log("region", region);
    data.map((item) => (item.region === region ? setGetShops(item) : ""));
    console.log(getShops);
  };
  // storesCall();

  const handleClickTab = (item) => {
    if (shopLocations === item) return;
    setShopLocations(item);
    storesCall(item);
  };

  return (
    <>
      <ShopLocationsListUl>
        {shopLocationsList.map((item, i) => {
          return (
            <ShopLocationsListLi
              key={`${item}-${i}`}
              active={shopLocations === item}
              onClick={() => handleClickTab(item)}
            >
              {item}
            </ShopLocationsListLi>
          );
        })}
      </ShopLocationsListUl>

      <article>
        <ul>
          <li>
            <img src="" alt=""></img>
            <p>제목</p>
            <p>icon</p>
            <p>주소</p>
            <ShopPoneNumDiv>
              <Link href="">icon + 폰번호</Link>
            </ShopPoneNumDiv>
          </li>
        </ul>
      </article>
    </>
  );
}

const ShopLocationsListUl = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  cursor: pointer;
`;

const ShopLocationsListLi = styled.li`
  ${(props) =>
    props.active &&
    css`
      color: #fff;
      background: #174882;
    `}
`;

const ShopPoneNumDiv = styled.div`
  font-size: 16px;
  border: 1px solid #174882;
  border-radius: 22px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
