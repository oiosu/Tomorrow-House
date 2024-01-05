## 🏠 Tomorrow-House

#### ◼ 2309 SuperCoding TEAM 01 PJT 2 

◼ 2023.12.11(월)~2023.12.29(금) (3주 진행, FE/BE 협업 진행)

* 오늘의 집 벤치 마킹을 통해 '내일의 집' 쇼핑몰 프로젝트 진행

      협업 진행 : Discord, Notion

### ✔️Back-end
<img src="https://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=green">

    BE Team : 김은지(CTO) (마이페이지, 장바구니) , 정재화 (쇼핑몰 판매, 조회), 유동후 (유저 로그인 / 로그아웃, 주문)

### ✔️Frond-end
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"><img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=purple">

    FE Team : 임수경(CTO) (메인페이지, 장바구니), 김여울 (베스트상품, 결제완료), 김두희 (주문목록, 상품상세), 이세호 (로그인, 회원가입), 이주연 (관리자 페이지)

---


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

### 📌 코드 중복성 줄이기 

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




