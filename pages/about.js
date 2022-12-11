import Link from "next/link";
import styled, { css } from "styled-components";
import { useState, useEffect } from "react";

// About page
export default function About() {
  // 매장 지역 배열
  const shopLocationsList = [
    "전체",
    "서울",
    "경기",
    "대전/충청",
    "전라",
    "경상",
  ];
  // 매장 정보를 불러들이는 함수
  const shopsCall = async (region) => {
    try {
      const res = await fetch("api/stores");
      const data = await res.json();
      // 지역이 전체인지 검증하고 세팅
      if (region === "전체") return setGetShops(data);

      // 다른 지역일 경우 필터링으로 거르고 세팅
      const fiterData = data.filter((item) => region === item.region);

      // 필터 데이터를 세팅
      setGetShops(fiterData);
    } catch (err) {
      alert(err);
    }
  };

  // 처음 지역 '전체'세팅
  const [shopLocations, setShopLocations] = useState(shopLocationsList[0]);
  // 매장 정보를 담음
  const [getShops, setGetShops] = useState([]);

  // 탭 변경에 의한 통신요청
  useEffect(() => {
    // 매장정보를 불러오기
    shopsCall(shopLocations);
  }, [shopLocations]);

  // 탭 변경
  const handleClickTab = (item) => {
    // 탭 지역 변경이 없다면 변경을 새로 세팅안함
    if (shopLocations === item) return;
    // 탭 지역 변경이 있으면 useEffect 실행 -> 정보 불러오기 실행
    setShopLocations(item);
  };

  return (
    <>
      <ShopsTitleH2>매장안내</ShopsTitleH2>
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
          <ShopsListUl>
            {getShops.map((item, i) => {
              return (
                <ShopListItemLi key={`${item.storeIdx}-${i}`}>
                  <ShopListItemImg
                    src={`${item.storeImage}`}
                    alt={`${item.storeName}`}
                  ></ShopListItemImg>
                  <ShopListItemTitleH4>{item.storeName}</ShopListItemTitleH4>
                  <ShopListItemAddressUl>
                    <li>
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                    </li>
                    <li>
                      <p>{`${item.mainAddress} ${item.detailAdderss}`}</p>
                    </li>
                  </ShopListItemAddressUl>

                  <ShopPoneNumDiv>
                    <Link href="">
                      <span className="material-symbols-outlined">call</span>
                      {item.contact.replaceAll("-", ".")}
                    </Link>
                  </ShopPoneNumDiv>
                </ShopListItemLi>
              );
            })}
          </ShopsListUl>
        ) : (
          <div>
            <NonShopsListP>매장을 찾을 수 없습니다.</NonShopsListP>
          </div>
        )}
      </article>
    </>
  );
}

// 컨텐츠 제목 '매장안내'
const ShopsTitleH2 = styled.h2`
  position: relative;
  margin: 60px auto 52px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;

  @media screen and (min-width: 360px) and (max-width: 768px) {
    margin: 9px auto 29px;
    font-size: 18px;
    &:before {
      content: "<";
      clear: both;
      position: absolute;
      left: 0;
      cursor: pointer;
    }
  }
`;

// 컨텐츠 Navbar
const ShopLocationsListUl = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  border: 1px solid #ededee;
  font-size: 16px;
  text-align: center;

  cursor: pointer;

  @media screen and (min-width: 360px) and (max-width: 768px) {
    display: none;
  }
`;

const ShopLocationsListLi = styled.li`
  ${(props) =>
    props.active &&
    css`
      color: #fff;
      background: #174882;
    `}
  padding: 14px 65px;
`;

// 매장 리스트
const ShopsListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

// 각 매장 정보
const ShopListItemLi = styled.li`
  margin-top: 32px;
  width: 30%;
  margin-right: 4.6%;
  &:nth-child(3n) {
    margin-right: 0;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
    width: 300%;
    margin-right: 0;
    margin-top: 28px;
    &:nth-child(1) {
      margin-top: 69px;
    }
  }
`;

const ShopListItemImg = styled.img`
  width: 308px;
  @media screen and (min-width: 360px) and (max-width: 768px) {
    width: 330px;
  }
`;

const ShopListItemTitleH4 = styled.h4`
  font-weight: 600;
  font-size: 18px;
  margin: 12px 0;

  @media screen and (min-width: 360px) and (max-width: 768px) {
    margin: 12px 0 8px;
  }
`;

const ShopListItemAddressUl = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;

  li: nth-child(2) {
    padding-left: 12px;
    font-size: 16px;
  }
`;

const ShopPoneNumDiv = styled.div`
  margin-top: 20px;
  font-size: 16px;
  color: #174882;
  border: 1px solid #174882;
  border-radius: 22px;
  padding: 9px 72px;
  cursor: pointer;

  span {
    padding-right: 20px;
    font-size: 20px;
    vertical-align: bottom;
  }
  a {
    vertical-align: text-bottom;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
    font-size: 14px;
    padding-left: 110px;
    span {
      padding-right: 8px;
      font-size: 16px;
    }
  }
`;

// 매장 정보가 없을때
const NonShopsListP = styled.p`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;
