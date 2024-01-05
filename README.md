## 🏠 Tomorrow-House

#### ◼ 2309 SuperCoding TEAM 01 PJT 2 

◼ 2023.12.11(월)~2023.12.29(금) (3주 진행, FE/BE 협업 진행)

* 오늘의 집 벤치 마킹을 통해 '내일의 집' 쇼핑몰 프로젝트 진행

      협업 진행 : Discord, Notion

### ✔️Back-end
<img src="https://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=green">

| 정재화 | 김은지(CTO) | 유동후 |
| --- | --- | --- |
| 쇼핑몰 판매, 조회 | 마이페이지, 장바구니 | 유저 로그인 / 로그아웃, 주문 |


### ✔️Frond-end
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"><img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=purple">

| 이세호 | 이주연 | 임수경(CTO) | 김두희 | 김여울 |
| --- | --- | --- | --- | --- |
| 로그인, 회원가입 | 관리자 페이지 | 메인페이지, 장바구니 | 주문목록, 상품상세 | 베스트 상품, 결제완료 |



### 1. ERD
![image](https://github.com/oiosu/Tomorrow-House/assets/99783474/9acf968a-93bf-4db4-acc1-dc999e0b93e5)

* Backend Github : https://github.com/orgs/BE-ShoppingmallProject/repositories

* Backend Swagger : http://mini.jh1105.xyz:5305/swagger-ui/index.html


### 2. FIGMA
![image](https://github.com/oiosu/Tomorrow-House/assets/99783474/706452b2-badc-468b-8eeb-421fc99ef97d)


---

### 3. MainPage 
![image](https://github.com/oiosu/Tomorrow-House/assets/99783474/23690981-8384-4584-b486-11a378baeb93)
![image](https://github.com/oiosu/Tomorrow-House/assets/99783474/df366cfc-5062-46e7-ab58-5236549bb58f)
![image](https://github.com/oiosu/Tomorrow-House/assets/99783474/df3f0aa9-14f5-4be9-a8dd-ee1ca159b75a)
![image](https://github.com/oiosu/Tomorrow-House/assets/99783474/5d5cb22d-06df-4e38-8944-3c4f64425d15)
![image](https://github.com/oiosu/Tomorrow-House/assets/99783474/90996594-d5ba-40a2-a7a2-0c32d862b959)
![image](https://github.com/oiosu/Tomorrow-House/assets/99783474/50f3c499-8499-4ee2-82f6-3b6c9fd17847)




#### 📌 Swiper

* Swiper는 웹 및 모바일 웹 플리케이션에서 이미지 또는 콘텐츠 슬라이드쇼를 만들기 위한 자바스크립트 라이브러리 중 하나입니다.
* Swiper를 통해 banner를 구현하였습니다. 

```bash
$ npm install swiper
```

![2024-01-05-10_42_01](https://github.com/oiosu/Tomorrow-House/assets/99783474/a4f693a6-2537-4bd1-9b60-107ac3cc542b)


```Javascript
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

//...
const Banner = () => {
  return (
    <>
      <BannerContainer>
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className="one">
                  <img
                    src=" "
                    alt="Slide 1"
                  />
                </SwiperSlide>
             </Swiper>
      <BannerContainer>
//...

```




#### 📌 코드 중복성 줄이기 


> 코드를 더 유지 관리 쉽고 읽기 쉽게 만들 수 있도록 다음과 같이 코드를 수정하는 방향으로 생각보았습니다.
> 
> 각 범주를 나타내는 객체 배열을 만든 다음 해당 배열을 매핑하여 목록 항목을 동적으로 생성하였습니다.
>
> * `CategoryList.jsx`

```javascript
import React from "react";

const categories = [
  {
    id: 1,
    imageUrl: "..170260512138923955.png/512/none",
    alt: "1",
    text: "연말빅세일"
  },
 
];

const CategoryList = () => {
  return (
    <CategoryHere>
      <div className="nav">
        <ul className="ul-list">
          {categories.map((category) => (
            <li key={category.id} className="li-list">
              <figure>
                <img
                  src={category.imageUrl}
                  alt={category.alt}
                />
              </figure>
              <div className="li-text">
                <span>{category.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </CategoryHere>
  );
};

export default CategoryList;

```



#### 📌 알림을 자동으로 숨기는 기능 

![2024-01-05-11_32_38](https://github.com/oiosu/Tomorrow-House/assets/99783474/3d49ad90-3861-4eed-8e37-91d5492c5bef)

```javascript
import React, { useEffect, useState } from "react";

const Nav = () => {
        //alert 구현
        let [alert, setAlert] = useState(true)
        // 재랜더링 마다 코드 실행
        useEffect(() => {
          let a = setTimeout(() => { setAlert(false) }, 10000)
          // mout시 실행안됨, unmout시 실행됨
          return () => {
            clearTimeout(a)
          }
        }, [])
        return (
          <NavComponent>

            //...

            <div className="nav-footer">
              {
                alert === true
                  ? <div className="alert" >
                    5시간 이내 구매시 할인
                  </div>
                  : null
              }
            </div>
        </NavComponent>
        );
      };
      
export default Nav;



//...


```
> 해당 알림은 컴포넌트가 처음 mount 되었을때 10초 동안 보여진 후 자동으로 사라지도록 구현하였습니다. `useEffect`를 사용하여 타이머를 설정하고 mount 해제시에는 타이머를 정리하는 방식으로 구현하였습니다.




#### 📌 오늘의 베스트 상품

![image](https://github.com/oiosu/Tomorrow-House/assets/99783474/2c7105b7-a43c-479a-acb4-26d018972e77)

```javascript
import React, { useState } from 'react';
import data from "./data";
import { addItem } from '../Basket/store';
import { useDispatch } from "react-redux";

const BestSale = () => {

  let [products] = useState(data)
  let dispatch = useDispatch()

  return (
    <SaleSection>
      <header className="new-title">
        <h2>오늘의 베스트 상품</h2>
      </header>
      <div className="bigsale-item">
        <ul>
          <li className="item-img">
            <img
              src="162303132447303472.jpeg?gif=1&w=360&h=360&c=c&q=0.8&webp=1"
              alt="01"
            />
            <Card item={products[0]}></Card>
            <div className="item-btn">
              <button className="free-btn">할인 쿠폰</button>
              <button className="big-btn">특가</button>
              <button className='big-btn'
                onClick={() => {
                  dispatch(addItem({ id: 2, name: 'gray yordan', count: 1 }))
                }}>
                주문하기
              </button>
            </div>
          </li>

```

```javascript
let data = [
    {
        id: 1,
        title: "비침없는 도톰 레이스/쉬폰 커튼",
        rate: "23%",
        price: "16,800"
    },

    {
        id: 2,
        title: "삼성전자 스마트모니터 M7 S43 화이트 4K UHD",
        rate: "42%",
        price: "579,000"
    },

    {
        id: 3,
        title: "삼성 81cm M5 S32 삼탠바이미 패키지 OTT",
        rate: "23%",
        price: "419,000"
    },

    {
        id: 4,
        title: "후기6만돌파! 40수 코마사 호텔수건 200g 10장",
        rate: "62%",
        price: "28,900"
    },
];

export default data;
```

> Redux를 사용하여 상품을 장바구니에 추가하는 기능을 구현하였습니다.
>
> `useState` 를 사용하여 products 상태 변수를 초기화하고 이를 `data`로 설정 합니다.
>
> `useDispatch`를 사용하여 Redux의 `dispatch` 함수를 가져오는 방식입니다.
> * 상품 이미지, Card 컴포넌트, 할인 및 주문하기 버튼등이 포함되어 있도록 코드를 작성하였고 각 상품에 대한 정보는 `data` 배열에서 가져와서 사용하였습니다.
>
> * Redux의 addItem 액션을 호출하여 장바구니에 상품을 추가합니다.
>
>  상품 정보를 나타내는 Card 함수형 컴포넌트에는 `item`을 props로 받아와서 상품의 제목 들을 보여줄 수 있도록 코드를 작성하였습니다. 
