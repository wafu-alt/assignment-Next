import Link from "next/link";
import styled, { css } from "styled-components";
import { useState, useEffect } from "react";

export default function About() {
  const shopLocationsList = [
    "전체",
    "서울",
    "경기",
    "대전/충청",
    "전라",
    "경상",
  ];

  // 처음 지역 '전체'세팅
  const [shopLocations, setShopLocations] = useState(shopLocationsList[0]);
  // 매장 정보를 담음
  const [getShops, setGetShops] = useState([]);

  // 탭 변경에 의한 통신요청
  useEffect(() => {
    const storesCall = async (region) => {
      try {
        console.log("콜 region:", region);
        const res = await fetch("api/stores");
        const data = await res.json();
        // console.log(data);
        // console.log("전체인지 검증");
        // 지역이 전체인지 검증하고 세팅
        if (region === "전체") return setGetShops(data);

        // console.log("data1 필터");
        // 다른 지역일 경우 필터링으로 거르고 세팅
        const data1 = data.filter(
          (item) =>
            // console.log(item.storeImage, region === item.region)
            region === item.region
        );
        // console.log(data1);
        // console.log("data1정보를 불러옵니다.");
        setGetShops(data1);
      } catch (err) {
        alert(err);
      }
    };

    storesCall(shopLocations);
  }, [shopLocations]);

  // 탭 변경
  const handleClickTab = (item) => {
    // 지역 변경이 없다면 변경을 새로 세팅안함
    if (shopLocations === item) return;
    setShopLocations(item);
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
        {getShops.length > 0 ? (
          <>
            <ul>
              {getShops.map((item, i) => {
                return (
                  <li key={`${item.storeIdx}-${i}`}>
                    <img
                      src={`${item.storeImage}`}
                      alt={`${item.storeName}`}
                    ></img>
                    <p>{item.storeName}</p>
                    <p>icon</p>
                    <p>{`${item.mainAddress} ${item.detailAdderss}`}</p>
                    <ShopPoneNumDiv>
                      <Link href="">
                        <span>icon</span>
                        {item.contact.replace("-", ".")}
                      </Link>
                    </ShopPoneNumDiv>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <>
            <div>
              <h4>매장을 찾을 수 없습니다.</h4>
            </div>
          </>
        )}
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
