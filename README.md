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


◾ 회원가입 : POST `/api/sign/register` 

◾ 로그인 : POST `/api/sign/login`

◾ 회원가입 : DELETE `/api/sign/{user_id}` 

◾ 판매상품등록 : POST `/api/post/add/` 

◾ 판매상품수정 : PUT `/api/post/update` 

◾ 판매상품삭제 : DELETE `/api/post/{post_id}`

◾ 모든상품페이지조회(일반user) : GET `api/post/normal` 

◾ 단일상품페이지조회(판매자) : GET `api/post/{post_id}` 

◾ 카테고리별 상품페이지조회(판매자) : GET `api/post/category/` 

◾ 판매중인 모든상품페이지조회(판매자) : GET `api/post/seller-page/` 

◾ 판매자 ID로 모든상품페이지조회(판매자) : GET `api/post/seller/` 

◾ 장바구니 상품 담기 : POST `api/cart/add` 

◾ 장바구니 상품 수량 변경 : PUT `api/cart/updateCount/{cart_item_id}`

◾ 장바구니 상품 삭제 : DELETE `api/cart/delete/{cart_item_id}` 

◾ 유저 장바구니 조회 : GET `/api/myPage/cart` 

◾ 유저 정보 조회 : GET `/api/myPage/UserInfo` 


---





